import "uno.css";
import "@unocss/reset/tailwind.css";
import DOM from "./src/constants/dom";
import { randomString } from "./src/utils/stringUtils.js";


const Tags = ["Web","Update","Design","Content"];
class TaskVO {
  constructor (title, date, tag) {
    this.title = title;
    this.data = date;
    this.tag = tag;
  }
}

const getDOM = (id) => document.getElementById(id);
const QUERY = (container, id) => container.querySelector(`[data-id="${id}"]`);

const domTask = getDOM(DOM.Template.TASK);
const tasks = [];

getDOM(DOM.Button.CREATE_TASK).onclick = () => {
  console.log("> domPopupCreateTask.classList");

  const domPopupCreateTask = getDOM(DOM.Popup.CREATE_TASK);
  const domBtnClose = QUERY(domPopupCreateTask, DOM.Button.CLOSE_POPUP_CREATE_TASK);
  const domBtnCreate = QUERY(domPopupCreateTask, DOM.Button.POPUP_CREATE_TASK_CONFIRM);

  domPopupCreateTask.classList.remove("hidden");
  domBtnClose.onclick = () => {
    domPopupCreateTask.classList.add("hidden");
    domBtnClose.onclick = null;
  };
  domBtnCreate.onclick = () => {
    const taskVO = new TaskVO(randomString(12), Date.now(), Tags[0])
    const taskView = domTask.cloneNode(true)
    QUERY(taskView, DOM.Template.Task.TITLE).innerText = taskVO.title;
    domTask.parentNode.prepend(taskView)
    tasks.push(TaskVO);
  };
};