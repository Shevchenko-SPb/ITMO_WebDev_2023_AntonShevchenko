/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

// Plugins
import { registerPlugins } from '@/plugins'

const app = createApp(App)

registerPlugins(app)

app.mount('#app')

import DOM from './dom.js';

setTimeout(startTaskiScript, 1000)

function startTaskiScript () {
  const KEY_LOCAL_TASKS = 'tasks';

  const Tags = ['Web', 'Update', 'Design', 'Content'];

  class TaskVO {
    static fromJSON(json) {
      console.log(json)
      return new TaskVO(json.id, json.title, json.body, json.date, json.tag);
    }

    constructor(id, title, body, date, tag) {
      this.id = id;
      this.title = title;
      this.body = body;
      this.date = date;
      this.tag = tag;
    }
  }

  const getDOM = (id) => document.getElementById(id);
  const QUERY = (container, id) => container.querySelector(`[data-id="${id}"]`);

  const domTemplateTask = getDOM(DOM.Template.TASK);

  console.log(domTemplateTask)

  const domTaskColumn = domTemplateTask.parentNode;
  domTemplateTask.removeAttribute('id');
  domTemplateTask.remove();

const rawTasks = localStorage.getItem(KEY_LOCAL_TASKS);
  // var rawTasks = undefined;
//document.addEventListener("DOMContentLoaded", function(event) {
  const headers = {
    'Content-Type': 'application/json'
  }
// axios.get('/tasks', {
//   headers: headers
// })
//   .then(function (response) {
//     rawTasks = response.data.result
//     //console.log(JSON.parse(response.data.result));
//     const tasks = rawTasks
//       ? rawTasks.map((json) => TaskVO.fromJSON(json))
//       : [];
//     tasks.forEach((taskVO) => renderTask(taskVO));
//   })
//   .catch(function (error) {
//     // handle error
//     //console.log(error);
//   })
//   .finally(function () {
//     // always executed
//   });
//console.log('finish');
//});

  // const eventSource = new EventSource('http://localhost:8081/sse');
  const listElement = document.getElementById('message-list');

  // eventSource.onmessage = function (currentEvent) {
    // const newElement = document.createElement('li');
    // newElement.innerText = currentEvent.data;

    // listElement.appendChild(newElement)
    // console.log(currentEvent);
  // };


  const tasks = rawTasks
    ? JSON.parse(rawTasks).map((json) => TaskVO.fromJSON(json))
    : [];
  tasks.forEach((taskVO) => renderTask(taskVO));
//console.log('> tasks:', tasks);

  const taskOperations = {
    [DOM.Template.Task.BTN_DELETE]: (taskVO, domTask) => {
      renderTaskPopup(
        taskVO,
        'Confirm delete task?',
        'Delete',
        (taskTitle, taskBody, taskDate, taskTag) => {
          console.log('> Delete task -> On Confirm', {
            taskTitle,
            taskBody,
            taskDate,
            taskTag,
          });
          tasks.splice(tasks.indexOf(taskVO), 1);
          domTaskColumn.removeChild(domTask);
          saveTask();
        }
      );
    },
    [DOM.Template.Task.BTN_EDIT]: (taskVO, domTask) => {
      console.log("Button Edit -> click")
      console.log("taskTitle Edit ->",taskVO.body)
      renderTaskPopup(
        taskVO,
        'Update task',
        'Update',
        (taskTitle, taskBody, taskDate, taskTag) => {
          console.log('> Update task -> On Confirm', {
            taskTitle,
            taskBody,
            taskDate,
            taskTag,
          });
          taskVO.title = taskTitle;
          taskVO.body = taskBody;

          const domTaskUpdated = renderTask(taskVO);
          domTaskColumn.replaceChild(domTaskUpdated, domTask);
          saveTask();
        }
      );
    },
  };
  
  domTaskColumn.onclick = (e) => {
    e.stopPropagation();
    console.log('domTaskColumn ->', e.target);
    const domTaskElement = e.target;
    console.log("domTaskElement -> ", domTaskElement)
    const taskBtn = domTaskElement.dataset.btn;
    console.log("Кнопка ? Что это такое", taskBtn )

    const isNotTaskBtn = !taskBtn;
    console.log('domTaskColumnBTN 1->', e.target);
    if (isNotTaskBtn) return;
    console.log('domTaskColumnBTN 2->', e.target);

    const allowedButtons = [
      DOM.Template.Task.BTN_EDIT,
      DOM.Template.Task.BTN_DELETE,
    ];
    if (!allowedButtons.includes(taskBtn)) return;

    let taskId;
    let domTask = domTaskElement;
    do {
      domTask = domTask.parentNode;
      taskId = domTask.dataset.id;
    } while (!taskId);

    const taskVO = tasks.find((task) => task.id === taskId);
    console.log('> taskVO:', taskVO);

    const taskOperation = taskOperations[taskBtn];
    if (taskOperation) {
      taskOperation(taskVO, domTask);
    }
  };
  function templatePopupCreateTask () {
    console.log("Кнопка addTask")
    renderTaskPopup(
      null,
      'Create task',
      'Create',
      (taskTitle, taskBody, taskDate, taskTag) => {
        console.log('> Create task -> On Confirm');
        const taskId = `task_${Date.now()}`;
        const taskVO = new TaskVO(taskId, taskTitle, taskBody, taskDate, taskTag);

        renderTask(taskVO);
        tasks.push(taskVO);

        saveTask();
      }
    );
  }

  getDOM(DOM.Button.ADD_TASK).onclick = () => {
    templatePopupCreateTask ()
  }

  getDOM(DOM.Button.CREATE_TASK).onclick = () => {
    templatePopupCreateTask ()
  };

  function renderTask(taskVO) {
    const domTaskClone = domTemplateTask.cloneNode(true);
    domTaskClone.dataset.id = taskVO.id;
    QUERY(domTaskClone, DOM.Template.Task.TITLE).innerText = taskVO.title;
    QUERY(domTaskClone, DOM.Template.Task.BODY).innerText = taskVO.body;
    domTaskColumn.prepend(domTaskClone);
    return domTaskClone;
  }

  async function renderTaskPopup(
    taskVO,
    popupTitle,
    confirmText,
    processDataCallback
  ) {
    const domPopupContainer = getDOM(DOM.Popup.CONTAINER);
    const domSpinner = domPopupContainer.querySelector('.spinner');

    domPopupContainer.classList.remove('hidden');

    const onClosePopup = () => {
      console.log("onClosePopup -> function run")
      domPopupContainer.children[0].remove();
      domPopupContainer.children[0].remove();
      domPopupContainer.append(domSpinner);
      domPopupContainer.classList.add('hidden');
    };

    const TaskPopup = (await import('./TaskPopup.js')).default;
    const taskPopupInstance = new TaskPopup(
      popupTitle,
      Tags,
      confirmText,
      (taskTitle, taskBody, taskDate, taskTags) => {
        console.log('Main -> renderTaskPopup: confirmCallback', {
          taskTitle,
          taskBody,
          taskDate,
          taskTags,
        });
        processDataCallback(taskTitle, taskBody, taskDate, taskTags);
        onClosePopup();
      },
      onClosePopup
    );

    if (taskVO) {
      taskPopupInstance.taskTitle = taskVO.title;
      taskPopupInstance.taskBody = taskVO.body;
    }

    // setTimeout(() => {
    // domSpinner.remove();
    document.onkeyup = (e) => {
      if (e.key === 'Escape') {
        onClosePopup();
      }
    };
    domPopupContainer.append(taskPopupInstance.render());
    // }, 1000);
  }

  function saveTask() {
    localStorage.setItem(KEY_LOCAL_TASKS, JSON.stringify(tasks));
  }
}
