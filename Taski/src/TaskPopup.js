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

  set taskTitle(value) {
    this.#taskTitle = value;
  }

  render() {
    const div = document.createElement('div');
    div.innerHTML = `
     <div  data-test-id="task-popup" style="position: absolute; background:rgba(66,66,66,0.7); z-index:99999999">

      <v-container class=" rounded-xl align-self-center " style="width: 400px; height: 420px; background: rgba(229,233,236)">

        <v-row class="mr-2 my-2">
          <v-col class="text-h5 font-weight-bold" for="inpDate">${this.#title}</v-col>
          <v-spacer></v-spacer>
          <v-btn icon="close" data-id="btnClose" style="background: rgba(229,233,236)"></v-btn>
        </v-row>
        <div class="mt-4">
          <v-text-field
            value="${this.#taskTitle}"
            data-id="inpTitle"
            label="Title"
            :rules="rules"
            hide-details="auto"
          ></v-text-field>
          <v-text-field label="Task"></v-text-field>
        </div>
        <v-row class="mb-2 ml-0 text-h7">End date:</v-row>
        <input type="date" for="inpDate" id="inpDate" style="width: 368px; border: 1px solid #BDBDBD">
        <v-row class="my-2 ml-0 text-h7">Select tag:</v-row>
        <select id="countries" style="width: 368px;  border: 1px solid #BDBDBD">
          <option selected>Choose a tag</option>
          <option value="web">Web</option>
          <option value="update">Update</option>
          <option value="design">Design</option>
          <option value="content">Content</option>
        </select>
        <v-btn color=teal-darken-3 data-id="btnConfirm" class="mt-4" style="width: 368px">${this.#confirmText}</v-btn>
      </v-container>
    </div>
    `;
    console.log('div.firstChild', div.children);

    const popup = div.children[0];

    const domBtnClose = popup.querySelector('[data-id="btnClose"]');
    const domBtnConfirm = popup.querySelector('[data-id="btnConfirm"]');
    const domInpTitle = popup.querySelector('[data-id="inpTitle"]');

    domBtnClose.onclick = () => {
      domBtnClose.onclick = null;
      domBtnConfirm.onclick = null;
      this.#closeCallback();
    };

    domBtnConfirm.onclick = () => {
      const taskTitle = domInpTitle.value;
      const taskDate = Date.now();
      const taskTags = this.#tags[0];
      this.#confirmCallback(taskTitle, taskDate, taskTags);
    };

    return div.children[0];
  }
}

export default TaskPopup;
