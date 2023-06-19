import 'uno.css';
import '@unocss/reset/tailwind.css';
import Dom from "./src/constants/dom.js";

class InvoiceItem {
  constructor(nameItem, descriptionItem, cost, qty, total) {
    this.nameItem = nameItem;
    this.descriptionItem = descriptionItem;
    this.cost = cost;
    this.qty = qty;
    this.total = total;
  }
}
const getDOM = (id) => document.getElementById(id);
const QUERY = (container, id) => container.querySelector(`[data-id="${id}"]`);
const domAddItem = getDOM(Dom.Button.ADD_ITEM);
const domItem = getDOM(Dom.Template.ITEM);
const items = [];




domAddItem.onclick = (e) => {
  const domPopupContainer = getDOM(Dom.Popup.CONTAINER);
  const domClosePopup = QUERY(domPopupContainer, Dom.Button.CLOSE_POPUP);
  const domCreateItem = QUERY(domPopupContainer, Dom.Button.CREATE_ITEM);


  domPopupContainer.classList.remove("hidden");
  domClosePopup.onclick = () => {
    domPopupContainer.classList.add("hidden");
    domClosePopup.onclick = null;
  }
  domCreateItem.onclick = () => {
    const invoiceItem = new InvoiceItem("sdd","vfb",1,2,3);
    const itemView = domItem.cloneNode(true)
    QUERY(itemView, Dom.Template.Item.ITEM_NAME).innerText = invoiceItem.nameItem;
    domItem.parentNode.prepend(itemView)
    items.push(InvoiceItem);
  }
}












