import 'uno.css';
import '@unocss/reset/tailwind.css';
import Dom from "./src/constants/dom.js";

const KEY_LOCAL_ITEMS = 'items'

class InvoiceItem {
  static fromJSON(json) {
    return new InvoiceItem(json.id, json.nameItem, json.descriptionItem, json.cost, json.qty, json.total)
  }
  constructor(id, nameItem, descriptionItem, cost, qty, total) {
    this.id = id;
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
const domItemColumn = domAddItem.parentNode;
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
  renderItemPopup(taskVO,'Update task', 'Update', (taskTitle, taskDate, taskTag) => {

    invoiceItem.title = taskTitle;
     const domTask = renderTask(taskVO)
     e.target.parentNode.replaceChild(domTask, e.target)
     saveTask();
  });
};



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








// const domTaskColumn = domTemplateTask.parentNode;
// domTemplateTask.removeAttribute('id');
// domTemplateTask.remove();
//
// const rawTasks = localStorage.getItem(KEY_LOCAL_TASKS);
//
// const tasks = rawTasks
//   ? JSON.parse(rawTasks).map((json) => TaskVO.fromJSON(json))
//   : [];
// tasks.forEach((taskVO) => renderTask(taskVO));
// console.log('> tasks:', tasks);
//
// domTaskColumn.onclick = (e) => {
//   e.stopPropagation();
//   console.log('domTaskColumn', e.target);
//   const taskId = e.target.dataset.id;
//   if (!taskId) return;
//
//   const taskVO = tasks.find((task) => task.id === taskId);
//   console.log('> taskVO:', taskVO);
//   renderTaskPopup(taskVO,'Update task', 'Update', (taskTitle, taskDate, taskTag) => {
//     console.log('> Update task -> On Confirm');
//
//     taskVO.title = taskTitle;
//     const domTask = renderTask(taskVO)
//     e.target.parentNode.replaceChild(domTask, e.target)
//     saveTask();
//   });
// };
// getDOM(DOM.Button.CREATE_TASK).onclick = () => {
//   console.log('> domPopupCreateTask.classList');
//   renderTaskPopup(null,'Create task', 'Create', (taskTitle, taskDate, taskTag) => {
//     console.log('>main -> Create task -> On Confirm');
//     const taskId = `task_${Date.now()}`;
//     const taskVO = new TaskVO(taskId, taskTitle, taskDate, taskTag);
//
//     renderTask(taskVO);
//     tasks.push(taskVO);
//
//     console.log('confirm', taskVO);
//     saveTask()
//   });
// };
//
// function renderTask(taskVO) {
//   const domTaskClone = domTemplateTask.cloneNode(true);
//   domTaskClone.dataset.id = taskVO.id;
//   QUERY(domTaskClone, DOM.Template.Task.TITLE).innerText = taskVO.title;
//   domTaskColumn.prepend(domTaskClone);
//   return domTaskClone;
// }
//
// async function renderTaskPopup(taskVO, popupTitle, confirmText, processDataCallback) {
//   const domPopupContainer = getDOM(DOM.Popup.CONTAINER);
//   const domSpinner = domPopupContainer.querySelector('.spinner');
//
//   domPopupContainer.classList.remove('hidden');
//
//   const onClosePopup = () => {
//     domPopupContainer.children[0].remove();
//     domPopupContainer.append(domSpinner);
//     domPopupContainer.classList.add('hidden');
//   };
//
//   const TaskPopup = (await import('./src/view/popup/TaskPopup')).default;
//   const taskPopupInstance = new TaskPopup(
//     popupTitle,
//     Tags,
//     confirmText,
//     (taskTitle, taskDate, taskTags) => {
//       console.log('main -> processDataCallback', {taskTitle, taskDate, taskTags})
//       processDataCallback(taskTitle, taskDate, taskTags);
//       onClosePopup();
//     },
//     onClosePopup
//   );
//   if (taskVO) {
//     taskPopupInstance.taskTitle = taskVO.title
//   }
//
//
//   // setTimeout(() => {
//   domSpinner.remove();
//   document.onkeyup = (e) => {
//     if (e.key === 'Escape') {
//       onClosePopup();
//     }
//   }
//   domPopupContainer.append(taskPopupInstance.render());
//   // }, 1000);
// }
//
// function saveTask () {
//   localStorage.setItem(KEY_LOCAL_TASKS, JSON.stringify(tasks));
// }







