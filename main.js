const DOM = document.getElementById.bind(document)

const domInpName = DOM('inpName');
const domInpSurname = DOM('inpSurname');
const domConResult = DOM('conResult');

let fullname = "";

domInpName.oninput = function(event) {
  console.log("omInpNameChange:", { event });
  renderFullname()
}
domInpSurname.oninput = onInpSurnameInput;

function renderFullname () {
  fullname = domInpName.value + " " + domInpSurname.value;
  domConResult.textContent = fullname;
}
function onInpNameInput(event) {
  console.log("omInpNameChange:", { event });
  renderFullname()
}
function onInpSurnameInput(event) {
  console.log("omInpSurnameChange:", { event });
  renderFullname()
}

console.log(domInpName, domInpSurname);