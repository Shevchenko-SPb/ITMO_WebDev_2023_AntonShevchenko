import "uno.css";
import "@unocss/reset/tailwind.css";
import DOM from "./src/constants/dom";
import { randomString } from "./src/utils/stringutils";

const KEY_LOCAL_TASKS = "tasks";

const Tags = ["Web", "Update", "Design", "Content"];

class TaskVO {
  static fromJSON(json) {
    return new TaskVO(json.title, json.date, json.tag);
  }
  constructor(title, date, tag) {
    this.title = title;
    this.date = date;
    this.tag = tag;
  }
}

// const task = new TaskVO("Read", Date.now(), Tags[0]);
const getDOM = (id) => document.getElementById(id);
const QUERY = (container, id) => container.querySelector(`[data-id="${id}"]`);

const domTemplateTask = getDOM(DOM.Template.TASK);
const domTaskColumn = domTemplateTask.parentNode;
domTemplateTask.remove();

const rawTasks = localStorage.getItem(KEY_LOCAL_TASKS);

const tasks = rawTasks ? JSON.parse(rawTasks).map((json) => TaskVO.fromJSON(json)) : [];
tasks.forEach((taskVO) => renderTask(taskVO));
console.log("> tasks", tasks);

getDOM(DOM.Button.CREATE_TASK).onclick = () => {
  console.log("> domPopupCreateTask.classList");

  const domPopupCreateTask = getDOM(DOM.Popup.CREATE_TASK);
  const domBtnClose = QUERY(domPopupCreateTask, DOM.Button.POPUP_CREATE_TASK_CLOSE);
  const domBtnConfirm = QUERY(domPopupCreateTask, DOM.Button.POPUP_CREATE_TASK_CONFIRM);
  const domInputTitle = getDOM(DOM.Popup.Input.INFO_TITLE);
  // const domCreateDate = getDOM(DOM.Popup.Input.USER_DATE);

  domPopupCreateTask.classList.remove("hidden");
  const onClosePopup = () => {
    domPopupCreateTask.classList.add("hidden");
    domBtnClose.onclick = null;
    domBtnConfirm.onclick = null;
  };

  domBtnConfirm.onclick = () => {
    let titleInfo = domInputTitle.value;
    domInputTitle.innerHTML = titleInfo;

    const taskVO = new TaskVO(titleInfo, Date.now(), Tags[0]);

    renderTask(taskVO);

    tasks.push(taskVO);

    localStorage.setItem(KEY_LOCAL_TASKS, JSON.stringify(tasks));

    onClosePopup();
  };
};

function renderTask(taskVO) {
  const domTaskClone = domTemplateTask.cloneNode(true);
  QUERY(domTaskClone, DOM.Template.Task.TITLE).innerHTML = taskVO.title;
  domTaskColumn.prepend(domTaskClone);
}