const DOM = document.getElementById.bind(document);

const domFirstNumber = DOM("inpFirstNumber");
const domInpSecondNumber = DOM("inpSecondNumber");
const domResultCount = DOM("ResultCount");
const domBtn1 = DOM("bt1");

domBtn1.onclick = button1(15,4)
  function button1 (a, b) {
  const result = a + b;
  console.log('sum:', { a, b, result });
}

function sum(a, b) {
  const result = a + b;
  console.log('sum:', { a, b, result });

}


domFirstNumber.oninput = sum(3,4)
domInpSecondNumber.oninput = sum(5,55)




















// domInpName.oninput = function (event) {
//   console.log("onInpNameInput:", { event });
//   renderFullName();
// };
//
// domInpSurname.oninput = function (event) {
//   console.log("onInpNameInput:", { event });
//   renderFullName();
// };
//
// const getFullName = () => `${domInpName.value} ${domInpSurname.value}`;
//
// function renderFullName() {
//   const fullName = getFullName();
//   console.log("renderFullName:", { fullName });
//   domConResult.textContent = fullName;
// }
//
// console.log(domInpName, domInpSurname);
