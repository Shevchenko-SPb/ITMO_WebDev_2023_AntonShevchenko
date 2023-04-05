
const DOM = document.getElementById.bind(document);

const domInpFirstNumber = DOM("inpFirstNumber");
const domInpSecondNumber = DOM("inpSecondNumber");
const domResultCount = DOM("ResultCount");
const domBtnResult = DOM("btnResult");
const domBtnSummarize = DOM("btnSummarize");
const domBtnSubtract = DOM("btnSubtract");
const domActionSymbol = DOM("actionSymbol");
const domResultSymbol = DOM("resultSymbol");
const domBtnMultiply = DOM("btnMultiply");
const domBtnDivide = DOM("btnDivide");
const domBtnReset = DOM("btnReset");

let domButtons = document.getElementsByClassName("btn");

domButtons.click = (e) => console.log(domButtons.value)







let calResult = "";
let selectedInput;

domBtnResult.onclick = onBtnResult;
domBtnSummarize.onclick = onBtnSummarize;
domBtnSubtract.onclick = onBtnSubtract;
domBtnMultiply.onclick = onBtnMultiply;
domBtnDivide.onclick = onBtnDivide;
domBtnReset.onclick = onBtnReset;


domInpFirstNumber.click = (e) => selectedInput = domInpFirstNumber ;
domInpSecondNumber.click = (e) => selectedInput = domInpSecondNumber ;



function onBtnSummarize () {
  let num1 = Number(domInpFirstNumber.value);
  let num2 = Number(domInpSecondNumber.value);
  domActionSymbol.innerHTML = "+";
  calResult = num1 + num2;
}
function onBtnSubtract () {
  let num1 = Number(domInpFirstNumber.value);
  let num2 = Number(domInpSecondNumber.value);
  domActionSymbol.innerHTML = "-";
  calResult = num1 - num2;
}
function onBtnMultiply () {
  let num1 = Number(domInpFirstNumber.value);
  let num2 = Number(domInpSecondNumber.value);
  domActionSymbol.innerHTML = "*";
  calResult = num1 * num2;
}
function onBtnDivide () {
  let num1 = Number(domInpFirstNumber.value);
  let num2 = Number(domInpSecondNumber.value);
  domActionSymbol.innerHTML = "/";
  calResult = num1/num2;
}
function onBtnResult () {
  domResultSymbol.innerHTML = "=";
  domResultCount.innerHTML = calResult;
}
function onBtnReset () {
  domInpFirstNumber.value = "";
  domInpSecondNumber.value = "";
  domResultCount.innerHTML = "";
}

