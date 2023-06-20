let numberInput = document.getElementById("number");
let fromInput = document.getElementById("from");
let toInput = document.getElementById("to");
let resultTextarea = document.getElementById("result");

function convert() {
  let number = numberInput.value.trim();
  let fromBase = parseInt(fromInput.value);
  let toBase = parseInt(toInput.value);
  if (!isValidNumber(number, fromBase)) {
    resultTextarea.value = "Invalid input number or base.";
    return;
  }
  let decimalValue = parseInt(number, fromBase);
  let convertedValue = decimalValue.toString(toBase);
  resultTextarea.value = convertedValue;
}

function isValidNumber(number, base) {
  if (isNaN(base) || base < 2 || base > 36) {
    return false;
  }
  if (base === 10) {
    return !isNaN(Number(number));
  }
  let validDigits = getValidDigits(base);
  let numberRegex = new RegExp("^[".concat(validDigits, "]+$"), "i");
  return numberRegex.test(number);
}

function getValidDigits(base) {
  let digits = "0123456789abcdefghijklmnopqrstuvwxyz";
  return digits.slice(0, base);
}
