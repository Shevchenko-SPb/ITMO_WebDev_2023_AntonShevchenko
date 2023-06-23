import Dom from "./src/constants/dom.js";

const KEY_LOCAL_ITEMS = 'items'

class InvoiceItem {
  static fromJSON(json) {
    return new InvoiceItem(json.id, json.qty,  json.cost, json.nameItem, json.descriptionItem, json.total)
  }
  constructor(id, qty, cost, name, description, total) {
    this.id = id;
    this.nameItem = name;
    this.descriptionItem = description;
    this.cost = cost;
    this.qty = qty;
    this.total = total;
  }
}
const getDOM = (id) => document.getElementById(id);
const QUERY = (container, id) => container.querySelector(`[data-id="${id}"]`);


const domItem = getDOM(Dom.Template.ITEM);
const domInputNumberInvoice = getDOM(Dom.Template.Input.NUMBER_INVOICE);
const domInputIBAN = getDOM(Dom.Template.Input.IBAN);
const domResult = getDOM(Dom.Template.RESULT);
const subTotal = QUERY(domResult, Dom.Template.Result.RESULT_SUBTOTAL);
subTotal.value = 0;
const discountTotal = QUERY(domResult, Dom.Template.Result.RESULT_DISCOUNT);
const totalResult = QUERY(domResult, Dom.Template.Result.RESULT_TOTAL);
const inpTotalDiscount = QUERY(domResult, Dom.Template.Result.INPUT_DISCOUNT);
inpTotalDiscount.value = 0;


domInputNumberInvoice.addEventListener ('keyup', function (event) {
  console.log('Кнопка работает')
  if (String(this.value).length > 4)
    alert("Не больше 4-х цифр")
  this.value = this.value.substr(0, 4);
  console.log(String(this.value).length)
})

domInputIBAN.addEventListener ('keyup', function (event) {
  console.log('Кнопка работает')
  this.value = this.value.substr(0, 34);
  console.log(String(this.value).length)
  this.value = this.value.toString().toUpperCase();

  let val = this.value.replace(/[^a-zA-Zа-яА-ЯёЁ0-9]/g, '');
  val = val !== '' ? val.match(/.{1,4}/g).join` ` : ``;
  this.value = val;
})


inpTotalDiscount.addEventListener ('keyup', function (event) {
  this.value = this.value.substr(0, 2);
  console.log(String(this.value).length)
  calculationDiscount ();
})

const domItemColumn = domItem.parentNode;
domItem.removeAttribute('id');
domItem.remove();


const rawItems = localStorage.getItem(KEY_LOCAL_ITEMS);
const items = rawItems
  ? JSON.parse(rawItems).map((json) => InvoiceItem.fromJSON(json))
  : [];


items.forEach((invoiceItem) => renderItem(invoiceItem));
console.log('> items:', items);
items.forEach((invoiceItem) => calculationSubTotal(invoiceItem))

function calculationSubTotal (invoiceItem) {
  subTotal.value = invoiceItem.total + subTotal.value;
  subTotal.innerText =  subTotal.value;
  totalResult.innerHTML = subTotal.value;
}

function calculationDiscount () {
  const discontSumm = subTotal.value / 100 * inpTotalDiscount.value;
  discountTotal.innerHTML = discontSumm;
  totalResult.innerHTML =  subTotal.value - discontSumm;
}


domItemColumn.onclick = (e) => {
  e.stopPropagation();
  console.log('domTaskColumn', e.target)
  const itemId = e.target.dataset.id;
  if (!itemId) return;
  const invoiceItem = items.find((item) => item.id === itemId);

  renderItemPopup(
    invoiceItem,
    'Update',
    'Update',
    (itemQty, itemCost, itemTitle, itemDescription, itemTotal) => {

    invoiceItem.nameItem = itemTitle;
    invoiceItem.descriptionItem = itemDescription;
    invoiceItem.cost = itemCost;
    invoiceItem.qty = itemQty;
    invoiceItem.total = itemTotal;

    const domItem = renderItem(invoiceItem)
    e.target.parentNode.replaceChild(domItem, e.target)
    saveItem();
  });
};


getDOM(Dom.Button.ADD_ITEM).onclick = () => {

  renderItemPopup(
    null,
    'Add',
    'Create',
    (itemQty, itemCost, itemTitle, itemDescription, itemTotal) => {

    const itemId = `item_${Date.now()}`;
    const invoiceItem = new InvoiceItem(itemId, itemQty, itemCost, itemTitle, itemDescription, itemTotal);

    calculationSubTotal(invoiceItem)
    renderItem(invoiceItem);
    items.push(invoiceItem);

    saveItem()
  });
}

function renderItem(invoiceItem) {

  const domItemClone = domItem.cloneNode(true);

  domItemClone.dataset.id = invoiceItem.id;
  QUERY(domItemClone, Dom.Template.Item.ITEM_NAME).innerText = invoiceItem.nameItem;
  QUERY(domItemClone, Dom.Template.Item.ITEM_DESCRIPTION).innerText = invoiceItem.descriptionItem;
  QUERY(domItemClone, Dom.Template.Item.ITEM_COST).innerText = invoiceItem.cost;
  QUERY(domItemClone, Dom.Template.Item.ITEM_QTY).innerText = invoiceItem.qty;
  QUERY(domItemClone, Dom.Template.Item.ITEM_TOTAL).innerText = invoiceItem.total;

  domItemColumn.prepend(domItemClone);
  return domItemClone;
}


async function renderItemPopup(invoiceItem, popupTitle, confirmText, processDataCallback) {
  const domPopupContainer = getDOM(Dom.Popup.CONTAINER);
  const domSpinner = domPopupContainer.querySelector('.spinner');


  domPopupContainer.classList.remove('hidden');
  const onClosePopup = () => {
    domPopupContainer.children[0].remove();
    domPopupContainer.append(domSpinner);
    domPopupContainer.classList.add('hidden');
  };

  const onDeletePopup = () => {
    const del = items.splice(items.indexOf(invoiceItem), 0);
    console.log(items.splice(items.indexOf(invoiceItem), 1))
    delete del.property
    saveItem();
    onClosePopup();
    location.reload();
    }


  const ItemPopup = (await import('./src/view/popup/ItemPopup')).default;
  const itemPopupInstance = new ItemPopup(
    popupTitle,
    confirmText,
    (itemQty, itemCost, itemTitle, itemDescription, itemTotal) => {

      processDataCallback(itemQty, itemCost, itemTitle, itemDescription, itemTotal);

      onClosePopup();
    },

    onClosePopup,
    onDeletePopup
  );

  if (invoiceItem) {
    itemPopupInstance.itemTitle = invoiceItem.nameItem
    itemPopupInstance.itemDescription = invoiceItem.descriptionItem
    itemPopupInstance.itemQty = invoiceItem.qty
    itemPopupInstance.itemCost = invoiceItem.cost
    itemPopupInstance.itemTotal = invoiceItem.total
  }


  // setTimeout(() => {
  domSpinner.remove();
  document.onkeyup = (e) => {
    if (e.key === 'Escape') {
      onClosePopup();
    }
  }
  domPopupContainer.append(itemPopupInstance.render());
  // }, 1000);
}


function saveItem () {
   localStorage.setItem(KEY_LOCAL_ITEMS, JSON.stringify(items));
 }
