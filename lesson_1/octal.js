function octalToDecimal(numberString) {
  // break string to an array
  // transform values into base 8s
  // reduce
  let octalDigits = numberString.split('').reverse();
  const transformBase8Digit = (digit, power) => digit * (8**power);

  let decimalDigits = octalDigits.map(transformBase8Digit);
  return decimalDigits.reduce((sum, digit) => sum += digit);
}

console.log(octalToDecimal('1'));           // 1
console.log(octalToDecimal('10'));          // 8
console.log(octalToDecimal('130'));         // 88
console.log(octalToDecimal('17'));          // 15
console.log(octalToDecimal('2047'));        // 1063
console.log(octalToDecimal('011'));         // 9