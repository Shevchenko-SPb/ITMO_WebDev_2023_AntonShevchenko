const DOM = document.getElementById.bind(document);

const domInpName = DOM("inpName");
const domInpSurname = DOM("inpSurname");
const domConResult = DOM("conResult");

domInpName.oninput = function (event) {
  console.log("onInpNameInput:", { event });
  renderFullName();
};

domInpSurname.oninput = function (event) {
  console.log("onInpNameInput:", { event });
  renderFullName();
};

const getFullName = () => `${domInpName.value} ${domInpSurname.value}`;

function renderFullName() {
  const fullName = getFullName();
  console.log("renderFullName:", { fullName });
  domConResult.textContent = fullName;
}

console.log(domInpName, domInpSurname);
