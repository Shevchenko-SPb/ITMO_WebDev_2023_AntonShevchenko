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
const domItemColumn = domItem.parentNode;
domItem.removeAttribute('id');
domItem.remove();
const rawItems = localStorage.getItem(KEY_LOCAL_ITEMS);

const items = rawItems
  ? JSON.parse(rawItems).map((json) => InvoiceItem.fromJSON(json))
  : [];

items.forEach((invoiceItem) => renderItem(invoiceItem));

domItemColumn.onclick = (e) => {
  e.stopPropagation();
  const itemId = e.target.dataset.id;
  if (!itemId) return;
  const invoiceItem = items.find((item) => item.id === itemId);

  renderItemPopup(invoiceItem,'Update', (itemQty, itemCost, itemTitle, itemDescription, itemTotal) => {

    invoiceItem.title = taskTitle;
    const domItem = renderItem(invoiceItem)
    e.target.parentNode.replaceChild(domItem, e.target)
    saveItem();
  });
};


getDOM(Dom.Button.ADD_ITEM).onclick = () => {

  renderItemPopup(null,'Add', (itemQty, itemCost, itemTitle, itemDescription, itemTotal) => {

    const itemId = `item_${Date.now()}`;
    const invoiceItem = new InvoiceItem(itemId, itemQty, itemCost, itemTitle, itemDescription, itemTotal);




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

async function renderItemPopup(invoiceItem, popupTitle, processDataCallback) {
  const domPopupContainer = getDOM(Dom.Popup.CONTAINER);
  const domSpinner = domPopupContainer.querySelector('.spinner');

  domPopupContainer.classList.remove('hidden');
  const onClosePopup = () => {
    domPopupContainer.children[0].remove();
    domPopupContainer.append(domSpinner);
    domPopupContainer.classList.add('hidden');
  };

  const ItemPopup = (await import('./src/view/popup/ItemPopup')).default;
  const itemPopupInstance = new ItemPopup(
    popupTitle,
    (itemQty, itemCost, itemTitle, itemDescription, itemTotal) => {

      processDataCallback(itemQty, itemCost, itemTitle, itemDescription, itemTotal);

      onClosePopup();
    },

    onClosePopup
  );

  if (invoiceItem) {
    itemPopupInstance.taskTitle = invoiceItem.title
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
