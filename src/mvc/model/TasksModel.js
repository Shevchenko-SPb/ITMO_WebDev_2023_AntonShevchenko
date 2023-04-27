class TasksModel {
  #tasks = [];
  #upDateCallBacks = [];
  constructor() {}
  set tasks(value) {
    this.#tasks = value;
    this.#upDateCallBacks.forEach(c => c(this.#tasks));
  }
  addUpdateCallback(upDateCallback) {
    if (!upDateCallback || !(upDateCallback instanceof Function))
    throw new Error('Wrong callback:' `${upDateCallback}`);
    this.#upDateCallBacks.push((upDateCallback));
  }
}


export default TasksModel;