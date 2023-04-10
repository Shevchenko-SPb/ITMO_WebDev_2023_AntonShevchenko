import "uno.css";
import "@unocss/reset/tailwind.css";
import Dom from "./src/constants/dom.js";
import { presetTagify } from "unocss";
import { randomString } from "./src/utils/stringUtils.js";

const Tags = ["Web", "Update", "Design", "Content"];
class TaskVO {
  constructor(title, date, tag) {
  this.title = title;
  this.date = date;
  this.tag = tag;
  }
}

const task = new TaskVO("read", Date.now())


const DOM = (id) => document.getElementById(id);
const QUERY = (container, id) => container.querySelector(`[data-id="${id}"]`);

const domTask = DOM(Dom.Template.TASK);

const tasks = [];

DOM(Dom.Button.CREATE_TASK).onclick = () => {
  console.log("> domBtnCreateTask");

  const domPopupCreateTask = DOM(Dom.Popup.CREATE_TASK);
  const domBtnClose = QUERY(domPopupCreateTask, Dom.Button.POPUP_CREATE_TASK_CLOSE);
  const domBtnConfirm = QUERY(domPopupCreateTask, Dom.Button.POPUP_CREATE_TASK_CONFIRM);

  domPopupCreateTask.classList.remove("hidden");

  const closePopup = () => {
    domPopupCreateTask.classList.add("hidden");
    domBtnClose.onclick = null;
    domBtnConfirm.onclick = null;
  };

  domBtnClose.onclick = closePopup;

  domBtnConfirm.onclick = () => {
    const taskVO = new TaskVO(randomString(10),Date.now(), Tags[0]);
    const taskView = domTask.cloneNode(true);

    QUERY(taskView, Dom.Template.Task.TITLE).innerText = taskVO.title;


    domTask.parentNode.prepend(taskView);
    tasks.push(taskVO);


    console.log("confirm", taskVO);
    closePopup();
  };
};
