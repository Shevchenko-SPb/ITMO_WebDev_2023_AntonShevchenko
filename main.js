import 'uno.css';
import '@unocss/reset/tailwind.css';
import Dom from "./src/constants/dom.js";

const KEY_LOCAL_ITEMS = 'items'

class InvoiceItem {
  static fromJSON(json) {
    return new InvoiceItem(json.id, json.nameItem, json.descriptionItem, json.cost, json.qty, json.total)
  }
  constructor(id, name, description, cost, qty, total) {
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
  renderItemPopup(invoiceItem,'Update', (itemId, itemName, itemDescription, itemCost, itemQty, itemTotal) => {

    invoiceItem.title = taskTitle;
    const domTask = renderItem(invoiceItem)
    e.target.parentNode.replaceChild(domItem, e.target)
    saveItem();
  });
};


domAddItem.onclick = (e) => {
  renderItemPopup(null,'Add', (itemId, itemName, itemDescription, itemCost, itemQty, itemTotal) => {

    const itemId = `item_${Date.now()}`;
    const invoiceItem = new InvoiceItem(itemId, itemName, itemDescription, itemCost, itemQty, itemTotal);

    renderItem(invoiceItem);
    items.push(invoiceItem);

    saveItem()
  });
}

function renderItem(invoiceItem) {
  const domItemClone = domItem.cloneNode(true);
  domItemClone.dataset.id = invoiceItem.id;
  QUERY(domItemClone, Dom.Template.Item.ITEM_NAME).innerText = invoiceItem.name;
  QUERY(domItemClone, Dom.Template.Item.ITEM_DESCRIPTION).innerText = invoiceItem.description;
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

  class ItemPopup {
    #title;
    #name;
    #description;
    #cost;
    #qty;
    #total;

    constructor(title, name, description, cost, qty, total) {
      this.#title = title;
      this.#name = name;
      this.#description = description;
      this.#cost = cost;
      this.#qty = qty;
      this.#total = total;
    }

    #itemTitle = '';

    set itemTitle(value) {
      this.#itemTitle = value;
    }

    // const
    // ItemPopup = (await import('./src/view/popup/TaskPopup')).default;
    const
    itemPopupInstance = new ItemPopup(
      popupTitle,
      Tags,
      confirmText,
      (taskTitle, taskDate, taskTags) => {

        processDataCallback(taskTitle, taskDate, taskTags);
        onClosePopup();
      },
      onClosePopup
    );

    if(invoiceItem) {
      itemPopupInstance.taskTitle = invoiceItem.title
    }
  }
}


function saveItem () {
   localStorage.setItem(KEY_LOCAL_ITEMS, JSON.stringify(items));
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







