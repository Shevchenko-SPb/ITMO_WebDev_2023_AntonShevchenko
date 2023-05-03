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

let selectedInput;
let firstInputNumber;
let secondInputNumber;

selectedInput = domInpFirstNumber;

domInpFirstNumber.onclick = (e) => {
  console.log('domInpFirstNumber.click');
  selectedInput = domInpFirstNumber ;
}
domInpSecondNumber.onclick = (e) => {
  console.log('domInpSecondNumber.click');
  selectedInput = domInpSecondNumber ;
}

domContainerNumbers.onclick = (e) => {
  const isTargetButton = e.target.hasAttribute('value')
  if (!isTargetButton) return;

  const valueString = e.target.getAttribute('value');
  if ((valueString == '.') && selectedInput.value == "") {
  }
  else {
    if (((valueString == '0') || (valueString == '00')) && selectedInput.value == "") {
    selectedInput.value = "0."
      return;
    }
    if (valueString == '.') {
      if (selectedInput.value.includes(".")) {
      }
      else
      {
        selectedInput.value += "."
      }
    }
    else
    {
    let valueNumber = valueString;
    selectedInput.value += valueNumber;
    }
  }
  console.log('domContainerNumbers.onclick:', parseInt(e.target.getAttribute('value')));
}

domBtnResult.onclick = onBtnResult;
domBtnSummarize.onclick = onBtnSummarize;
domBtnSubtract.onclick = onBtnSubtract;
domBtnMultiply.onclick = onBtnMultiply;
domBtnDivide.onclick = onBtnDivide;
domBtnReset.onclick = onBtnReset;

function updateInputNumbers () {
   firstInputNumber = Number(domInpFirstNumber.value);
   secondInputNumber = Number(domInpSecondNumber.value);
}

function onBtnSummarize () {
  domActionSymbol.innerHTML = "+";
}
function onBtnSubtract () {
  domActionSymbol.innerHTML = "-";
}
function onBtnMultiply () {
  domActionSymbol.innerHTML = "*";
}
function onBtnDivide () {
  domActionSymbol.innerHTML = "/";
}
function onBtnResult () {
  updateInputNumbers();
  domResultSymbol.innerHTML = "=";
  console.log("actionSymbol ->",domActionSymbol.textContent)
  if(domActionSymbol.textContent == "+") {
    domResultCount.innerHTML = firstInputNumber + secondInputNumber;
  }
  if(domActionSymbol.textContent == "-") {
    domResultCount.innerHTML = firstInputNumber - secondInputNumber;
  }
  if(domActionSymbol.textContent == "/") {
    if (secondInputNumber == 0){
      domResultCount.innerHTML = "Fatal error"
    }
    else {
      domResultCount.innerHTML = firstInputNumber / secondInputNumber;
    }
  }
  if(domActionSymbol.textContent == "*") {
    domResultCount.innerHTML = firstInputNumber * secondInputNumber;
  }
}
function onBtnReset () {
  domInpFirstNumber.value = "";
  domInpSecondNumber.value = "";
  domResultCount.innerHTML = "";
}

