import { randomString } from '../../utils/stringUtils.js';

class ItemPopup {
  #title;
  #confirmCallback;
  #closeCallback;
  constructor(title, itemDescription, confirmCallback, closeCallback) {
    this.#title = title;
    this.#confirmCallback = confirmCallback;
    this.#closeCallback = closeCallback;
  }

  #itemTitle = '';
  #itemDescription = '';
  #itemQty = '';
  #itemCost = '';


  render() {
    const div = document.createElement('div');
    div.innerHTML = `
    <div class="flex  relative flex-col w-screen h-70 bg-neutral-100 max-w-screen-lg">
      <div class="flex mt-3 flex-col h-full">
        <div class="flex flex-row mx-7 justify-between h-12">
          <button data-id="btnDelete" 
                  class="text-neutral-400 hover:text-neutral-500">Delete</button>
          <button data-id="btnClose" 
                  class="text-neutral-400 hover:text-neutral-500">Close</button>
        </div>
        <div class="flex flex-col mx-7 h-full my-3">
          <div class="flex flex-row font-bold">
            <div class="flex flex-row w-1/2 justify-between">
              <div class="text-4xl">${this.#title}</div>
              <div class="flex flex-row gap-x-1">
                <div class="flex flex-col justify-between">
                  <div></div>
                  <div>Qty:</div>
                </div>
                <div class="flex flex-col justify-between">
                  <div></div>
                  <input class="h-6 w-16  bg-neutral-100 border-b-2" 
                         style="outline:none"
                         data-id="inpQty"
                         type="number"
                         value="${this.#itemQty}"
                         >
                </div>
              </div>
              <div class="flex"></div>
            </div>
            <div class="flex flex-row w-1/2 justify-between">
              <div class="flex flex-row gap-x-1">
                <div class="flex flex-col justify-between">
                  <div></div>
                  <div>Cost: $</div>
                </div>
                <div class="flex flex-col justify-between">
                  <div></div>
                  <input class="h-6 w-16  bg-neutral-100 border-b-2" 
                         style="outline:none"
                         data-id="inpCost"
                         type="number"
                         value="${this.#itemCost}">
                </div>
              </div>
              <div class="flex flex-row">
                <div class="flex flex-col justify-between">
                  <div></div>
                  <div>Total: $</div>
                </div>
                <span class="flex flex-col justify-between">
                  <div></div>
                  <span></span>
              </div>
              <button data-id=btnConfirm
                      class="flex h-full w-18 bg-black/30 rounded-md items-center
               justify-center text-neutral-100 hover:bg-black/40">Create</button>
            </div>
          </div>
          <div class="flex flex-col h-full gap-y-3 mt-3">
            <div>
              <div class="text-xs font-bold">Work item:</div>
              <div class="flex w-full h-8">
                <input
                  class="w-full h-full border-2 indent-2 bg-gray-400/10 border-gray-400/20 active:border-black"
                  placeholder="Enter title of the work item"
                  data-id="inpTitle"
                  type="text"
                  value="${this.#itemTitle}"
                >
              </div>
            </div>
            <div>
              <div class="text-xs font-bold">Description:</div>
              <div class="flex w-full h-16">
                <input
                  class="flex w-full h-full place-content-start border-2 align-text-top indent-2 bg-gray-400/10 border-gray-400/20 active:border-black"
                  placeholder="Write what this work item about"
                  data-id="inpDescription"
                  type="text"
                  value="${this.#itemDescription}"
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    `;

    const popup = div.children[0];

    const domBtnClose = popup.querySelector('[data-id="btnClose"]');
    const domBtnDelete = popup.querySelector('[data-id="btnDelete"]');
    const domBtnConfirm = popup.querySelector('[data-id="btnConfirm"]');
    const domInpTitle = popup.querySelector('[data-id="inpTitle"]');
    const domInpDescription = popup.querySelector('[data-id="inpDescription"]');
    const domInpQty = popup.querySelector('[data-id="inpQty"]');
    const domInpCost = popup.querySelector('[data-id="inpCost"]');

    domBtnClose.onclick = () => {
      domBtnClose.onclick = null;
      domBtnConfirm.onclick = null;
      this.#closeCallback();
    };

    domBtnConfirm.onclick = () => {
      const itemQty = domInpQty.value;
      const itemCost = domInpCost.value;
      const itemTitle = domInpTitle.value;
      const itemDescription = domInpDescription.value;
      this.#confirmCallback(itemQty, itemCost, itemTitle, itemDescription);
    };

    return div.children[0];
  }
}

export default ItemPopup;
