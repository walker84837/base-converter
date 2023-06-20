// Get the input elements
const numberInput = document.getElementById('number') as HTMLInputElement;
const fromInput = document.getElementById('from') as HTMLInputElement;
const toInput = document.getElementById('to') as HTMLInputElement;
const resultTextarea = document.getElementById('result') as HTMLTextAreaElement;

// Function to convert the number from one base to another
function convert() {
  const number = numberInput.value.trim();
  const fromBase = parseInt(fromInput.value);
  const toBase = parseInt(toInput.value);

  if (!isValidNumber(number, fromBase)) {
    resultTextarea.value = 'Invalid input number or base.';
    return;
  }

  const decimalValue = parseInt(number, fromBase);
  const convertedValue = decimalValue.toString(toBase);

  resultTextarea.value = convertedValue;
}

// Function to validate the input number and base
function isValidNumber(number: string, base: number): boolean {
  if (isNaN(base) || base < 2 || base > 36) {
    return false;
  }

  if (base === 10) {
    return !isNaN(Number(number));
  }

  const validDigits = getValidDigits(base);
  const numberRegex = new RegExp(`^[${validDigits}]+$`, 'i');

  return numberRegex.test(number);
}

// Function to get the valid digits for a given base
function getValidDigits(base: number): string {
  const digits = '0123456789abcdefghijklmnopqrstuvwxyz';

  return digits.slice(0, base);
}
