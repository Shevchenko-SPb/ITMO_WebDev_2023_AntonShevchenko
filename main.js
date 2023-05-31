import 'uno.css';
import '@unocss/reset/tailwind.css';
import Dom from "./src/constants/dom.js";
const getDOM = (id) => document.getElementById(id);

getDOM(Dom.Button.ADD_ITEM).onclick = () => {
  console.log('Кнопка работает')
}