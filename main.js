import 'uno.css';
import '@unocss/reset/tailwind.css';
import Dom from "./src/constants/dom.js";

const KEY_LOCAL_ITEMS = 'items'

class InvoiceItem {
  static fromJSON(json) {
    return new InvoiceItem(json.id, json.nameItem, json.descriptionItem, json.cost, json.qty, json.total)
  }
  constructor(id, name, description, cost, qty,) {
    this.id = id;
    this.nameItem = name;
    this.descriptionItem = description;
    this.cost = cost;
    this.qty = qty;
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
  renderItemPopup(invoiceItem,'Update', (itemQty, itemCost, itemTitle, itemDescription) => {

    invoiceItem.title = taskTitle;
    const domItem = renderItem(invoiceItem)
    e.target.parentNode.replaceChild(domItem, e.target)
    saveItem();
  });
};


getDOM(Dom.Button.ADD_ITEM).onclick = () => {
  console.log('> domPopupCreateTask.classList');
  renderItemPopup(null,'Add', (itemQty, itemCost, itemTitle, itemDescription) => {

    const itemId = `item_${Date.now()}`;
    const invoiceItem = new InvoiceItem(itemId, itemQty, itemCost, itemTitle, itemDescription);




    renderItem(invoiceItem);
    items.push(invoiceItem);

    saveItem()
  });
}

function renderItem(invoiceItem) {
  console.log("> Work renderItem")
  const domItemClone = domItem.cloneNode(true);

  domItemClone.dataset.id = invoiceItem.id;
  QUERY(domItemClone, Dom.Template.Item.ITEM_NAME).innerText = invoiceItem.name;
  QUERY(domItemClone, Dom.Template.Item.ITEM_DESCRIPTION).innerText = invoiceItem.description;
  QUERY(domItemClone, Dom.Template.Item.ITEM_COST).innerText = invoiceItem.cost;
  QUERY(domItemClone, Dom.Template.Item.ITEM_QTY).innerText = invoiceItem.qty;
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
    (itemQty, itemCost, itemTitle, itemDescription) => {

      processDataCallback(itemQty, itemCost, itemTitle, itemDescription);

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
