class TaskPopup {
  #title;
  #tags;
  #confirmText;
  #confirmCallback;
  #closeCallback;
  constructor(title, tags, confirmText, confirmCallback, closeCallback) {
    this.#title = title;
    this.#tags = tags;
    this.#confirmText = confirmText;
    this.#confirmCallback = confirmCallback;
    this.#closeCallback = closeCallback;
  }

  #taskTitle = '';
  #taskBody = '';

  set taskTitle(value) {
    this.#taskTitle = value;
  }
  set taskBody(value) {
    this.#taskBody = value;
  }

  render() {
    const div = document.createElement('div');
    div.innerHTML = `
    <div  data-test-id="task-popup"
          style="position: fixed; height: 100%; background:rgba(66,66,66,0.7); background-size: 100%; z-index:99999999;"
          class="h-screen w-100">

      <div class="rounded-xl"
           style="position: fixed;
      width: 400px;
      height: fit-content;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      margin: auto;
      background: rgba(229,233,236)">

        <div style="margin: 25px;">
          <div>
            <div for="inpDate" style="font-size: xx-large; font-weight: bold;">${this.#title}
              <button data-id="btnClose" style="background: rgba(229,233,236); float: right">
                <svg data-id="btnClose" xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24">
                  <path fill="currentColor"
                        d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6L6.4 19Z"/>
                </svg>
              </button>
            </div>
          </div>
          <div style="margin-top: 20px;">
            <input placeholder="Title"
                   data-id="inpTitle"
                   type="text"
                   value="${this.#taskTitle}"
                   style="width: 100%; border-color: #888888; border-style: solid; border-width: 1px;">
            <br>
            <textarea style="margin-top: 10px; width: 100%; border-color: #888888; border-style: solid;min-height: 100px; max-height: 150px"
                     placeholder="Task"
                     data-id="inpBody"
                     >${this.#taskBody}</textarea>
          </div>
          <div style="margin-top: 10px">End date:</div>
          <input type="date" for="inpDate" id="inpDate" name="trip-start"
                 style="width: 100%; border: 1px solid #BDBDBD">
          <div style="margin-top: 10px">Select tag:</div>
          <select id="countries" style="width: 100%;  border: 1px solid #BDBDBD">
            <option selected>Choose a tag</option>
            <option value="web">Web</option>
            <option value="update">Update</option>
            <option value="design">Design</option>
            <option value="content">Content</option>
          </select>
          <div style="margin-top: 10px">Select label:</div>
          <select style="width: 100%;  border: 1px solid #BDBDBD">
            <option selected>Choose a label</option>
            <option value="High Priority">High Priority</option>
            <option value="Medium Priority">Medium Priority</option>
            <option value="Low Priority">Low Priority</option>
            <option value="On Standby">On Standby</option>
          </select>
        <button color=teal-darken-3 data-id="btnConfirm" style="width: 100%;
        background: #00695C;
        color: #E0E0E0;
        border-radius: 8px;
        margin-top: 20px;
        height: 40px;
        ">${this.#confirmText}</button>
      </div>
      </div>
    </div>
    `;
    console.log('div.firstChild', div.children);

    const popup = div.children[0];

    const domBtnClose = popup.querySelector('[data-id="btnClose"]');
    const domBtnConfirm = popup.querySelector('[data-id="btnConfirm"]');
    const domInpTitle = popup.querySelector('[data-id="inpTitle"]');
    const domInpBody = popup.querySelector('[data-id="inpBody"]');

    domBtnClose.onclick = () => {
      console.log("Кнопка закрыть")
      domBtnClose.onclick = null;
      domBtnConfirm.onclick = null;
      this.#closeCallback();
    };

    domBtnConfirm.onclick = () => {
      const taskTitle = domInpTitle.value;
      const taskBody = domInpBody.value;
      const taskDate = Date.now();
      const taskTags = this.#tags[0];
      this.#confirmCallback(taskTitle, taskBody, taskDate, taskTags);
    };

    return div.children[0];
  }
}

export default TaskPopup;
