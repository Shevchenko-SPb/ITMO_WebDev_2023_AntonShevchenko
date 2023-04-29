import TaskVO from "../model/VO/TaskVO.js";

class TasksController {
  #model;
  constructor(model) {
    this.#model = model;
  }

  async retrieveTasks() {
    this.#model.tasks = await fetch("http://localhost:3000/tasks")
      .then((response) => response.ok && response.json())
      .then((rawTasks) => {
        if (rawTasks && rawTasks instanceof Array) {
          console.log("json", rawTasks);
          return rawTasks.map((json) => TaskVO.fromJSON(json));
        } else {
          window.alert("Problem with data parsing, try refresh later");
          return [];
        }
      })
      .catch((e) => {
        window.alert("Server error:" + e.toString());
        return [];
      });
  }

  deleteTask(taskID) {
    console.log("> TaskController -> ");
    return fetch(`http://localhost:3000/tasks/${taskId}`, {
      method: "DELETE",
    })
      .then((response) => {
        console.log(">TaskController -> deleteTask: = ", response.ok);
        if (response.ok) {
          this.#model.deleteTaskById(taskId);
        }
      })
      .catch((e) => {
        console.error(">TaskController -> deleteTask: error = ", e);
        throw new Error(e.toString());
      });
  }

  createTask(taskTitle, taskDate, taskTags) {
    console.log("> Create task -> On Confirm");
    return fetch("http://localhost:3000/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: taskTitle,
        date: taskDate,
        tags: taskTags,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(">TaskController -> createTask: data = ", data);
        const taskVO = TaskVO.fromJSON(data);
        this.#model.addTask(taskVO);
        return taskVO;
      })
      .catch((e) => {
        console.log(">TaskController -> createTask: error = ", e);
        throw new Error(e.toString());
      });
  }
}

export default TasksController;
