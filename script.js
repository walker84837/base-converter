let number_input = document.getElementById("number");
let from_input = document.getElementById("from");
let to_input = document.getElementById("to");
let result_textarea = document.getElementById("result");

/**
 * convert - Converts the numbers from the user-given input.
 */
function convert()
{
	let number = number_input.value.trim();
	let from_base = parseInt(from_input.value);
	let to_base = parseInt(to_input.value);
	if (!is_valid_number(number, from_base)) {
		result_textarea.value = "Invalid input number or base.";
		return;
	}
	let decimal_value = parseInt(number, from_base);
	let converted_value = decimal_value.toString(to_base);
	result_textarea.value = converted_value;
}

/**
 * is_valid_number - Checks if the number its base are correct.
 *
 * @param {number} number - The number to be validated.
 * @param {number} base - The base of the number system (between 2 and 36, inclusive).
 * @returns {boolean} base - True if the number is valid, false otherwise.
 *
 */
function is_valid_number(number, base)
{
	if (isNaN(base) || base < 2 || base > 36) {
		return false;
	}
	if (base === 10) {
		return !isNaN(Number(number));
	}
	let valid_digits = get_valid_digits(base);
	let number_regex = new RegExp("^[".concat(valid_digits, "]+$"), "i");
	return number_regex.test(number);
}

/**
 * get_valid_digits - Gets the digits of the user-given base.
 *
 * @param {number} base - The base of the number.
 * @returns {string} digits - The base's digits.
 *
 */
function get_valid_digits(base)
{
	let digits = "0123456789abcdefghijklmnopqrstuvwxyz";
	return digits.slice(0, base);
}
