
function max(a: number, b: number): number {
  return a > b ? a : b;
}

function sumDigits(number: number): number {
  let sum = 0;
  while (number > 0) {
    sum += number % 10;
    number = Math.floor(number / 10);
  }
  return sum;
}

function randomNumber(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function formatCurrency(number: number): string {
  return "$" + number.toFixed(2);
}

function findMissingInArithmeticSeq(arr: number[]): number {
  let n = arr.length;
  let d = arr[1] - arr[0];
  let missing = arr[0] + (n - 1) * d;
  return missing;
}

function integerToRoman(number: number): string {
  let romanNumerals = ["I", "V", "X", "L", "C", "D", "M"];
  let result = "";
  while (number > 0) {
    let place = Math.floor(number / 10);
    let remainder = number % 10;
    if (place == 4) {
      result += romanNumerals[place] + romanNumerals[place - 1];
    } else if (place == 9) {
      result += romanNumerals[place] + romanNumerals[place + 1];
    } else {
      for (let i = 0; i < place; i++) {
        result += romanNumerals[i];
      }
      if (remainder > 4) {
        result += romanNumerals[place + 1];
        remainder -= 5;
      }
      for (let i = 0; i < remainder; i++) {
        result += romanNumerals[place];
      }
    }
    number = remainder;
  }
  return result;
}

//==========================================================



