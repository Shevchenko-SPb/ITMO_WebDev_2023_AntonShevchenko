
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
const domBtn1 = DOM("btn1");
const domBtn2 = DOM("btn2");
const domBtn3 = DOM("btn3");
const domBtn4 = DOM("btn4");
const domBtn5 = DOM("btn5");
const domBtn6 = DOM("btn6");
const domBtn7 = DOM("btn7");
const domBtn8 = DOM("btn8");
const domBtn9 = DOM("btn9");
const domRadioBtn1 = DOM("RadioBtn1")

let calResult = "";
let selectedInput = domInpFirstNumber;

domBtnResult.onclick = onBtnResult;
domBtnSummarize.onclick = onBtnSummarize;
domBtnSubtract.onclick = onBtnSubtract;
domBtnMultiply.onclick = onBtnMultiply;
domBtnDivide.onclick = onBtnDivide;
domBtnReset.onclick = onBtnReset;
domBtn1.onclick = onbtn1;
domBtn2.onclick = onBtn2;
domBtn3.onclick = onbtn3;
domBtn4.onclick = onbtn4;
domBtn5.onclick = onbtn5;
domBtn6.onclick = onbtn6;
domBtn7.onclick = onbtn7;
domBtn8.onclick = onbtn8;
domBtn9.onclick = onbtn9;
domInpFirstNumber.click = (e) => selectedInput = domInpFirstNumber;
domInpSecondNumber.click = (e) => selectedInput = domInpSecondNumber;

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
function onbtn1 () {
  if (domRadioBtn1.value = "option1"){
  domInpFirstNumber.value += 1 }
  else {
  domInpSecondNumber.value += 1 }
}


