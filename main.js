
const DOM = document.getElementById.bind(document);

const domInpFirstNumber = DOM("inpFirstNumber");
const domInpSecondNumber = DOM("inpSecondNumber");
const domResultCount = DOM("ResultCount");
const domBtnResult = DOM("btnResult");
const domContainerNumbers = DOM("selectNumbers");
const domBtnSummarize = DOM("btnSummarize");
const domBtnSubtract = DOM("btnSubtract");
const domActionSymbol = DOM("actionSymbol");
const domResultSymbol = DOM("resultSymbol");
const domBtnMultiply = DOM("btnMultiply");
const domBtnDivide = DOM("btnDivide");
const domBtnReset = DOM("btnReset");

let domButtons = document.getElementsByClassName("btn");

domButtons.onclick = (e) => console.log(domButtons.value)

domContainerNumbers.onclick = (e) => {
  const isTargetButton = e.target.hasAttribute('value')
  if (!isTargetButton) return;

  const valueString = e.target.getAttribute('value');

  if (valueString == '00') {
  }
  else if (valueString == '.') {

  } else {
    let valueNumber = parseInt(valueString);
    selectedInput.value += valueNumber;
  }

  console.log('domContainerNumbers.onclick:', parseInt(e.target.getAttribute('value')));
}




let calResult = "";
let selectedInput;

domBtnResult.onclick = onBtnResult;
domBtnSummarize.onclick = onBtnSummarize;
domBtnSubtract.onclick = onBtnSubtract;
domBtnMultiply.onclick = onBtnMultiply;
domBtnDivide.onclick = onBtnDivide;
domBtnReset.onclick = onBtnReset;

selectedInput = domInpFirstNumber;

domInpFirstNumber.onclick = (e) => {
  console.log('domInpFirstNumber.click');
  selectedInput = domInpFirstNumber ;
}
domInpSecondNumber.onclick = (e) => {
  console.log('domInpSecondNumber.click');
  selectedInput = domInpSecondNumber ;
}



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

