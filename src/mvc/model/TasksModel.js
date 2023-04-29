class TasksModel {
  #tasks = [];
  #upDateCallBacks = [];
  constructor() {}
  set tasks(value) {
    this.#tasks = value;
    this.#update();
  }

  #update() {
    this.#upDateCallBacks.forEach((c) => c(this.#tasks));
  }
  addUpdateCallback(upDateCallback) {
    if (!upDateCallback || !(upDateCallback instanceof Function))
      throw new Error("Wrong callback:"`${upDateCallback}`);
    this.#upDateCallBacks.push(upDateCallback);
  }
  getTaskById(id) {
    const taskId = parseInt(id);
    const taskVO = this.#tasks.find((task) => task.id === taskId);
    console.log("> TaskModel -> taskVO:", taskVO);
    return taskVO;
  }

  deleteTaskById(taskId) {
    console.log(">TaskModel -> deleteTaskById", taskId);
    const index = this.#tasks.filter((taskVO) => taskVO.id !== taskId);
    this.#tasks.splice(index, 1);
    this.#update();
  }

  addTask(taskVO) {
    console.log(">TaskModel -> addTask:", taskVO);
    this.#tasks.push(taskVO);
    this.#update();
  }
}

export default TasksModel;
