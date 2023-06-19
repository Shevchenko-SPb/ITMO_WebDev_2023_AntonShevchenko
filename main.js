import 'uno.css';
import '@unocss/reset/tailwind.css';
import Dom from "./src/constants/dom.js";
const getDOM = (id) => document.getElementById(id);
const domPopupContainer = getDOM(Dom.Popup.CONTAINER);
const domAddItem = getDOM(Dom.Button.ADD_ITEM);
const domClosePopup = getDOM(Dom.Button.CLOSE_POPUP);


domAddItem.onclick = (e) => {
  domPopupContainer.classList.remove("hidden");

  domClosePopup.onclick = () => {
    domPopupContainer.classList.add("hidden");
  }
}









