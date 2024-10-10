const mysteryMath = function convertOperatorToMysteryMath(equation) {
  return equation.replace(/[+\-*\/]/, '?');
}

const mysteriousMath = function convertOperatorToMysteryMath(equation) {
  return equation.replace(/[+\-*\/]/g, '?');
}


console.log(mysteryMath('4 + 3 - 5 = 2'));
// '4 ? 3 - 5 = 2'

console.log(mysteryMath('(4 * 3 + 2) / 7 - 1 = 1'));
// '(4 ? 3 + 2) / 7 - 1 = 1'

console.log(mysteriousMath('4 + 3 - 5 = 2'));
// '4 ? 3 ? 5 = 2'
console.log(mysteriousMath('(4 * 3 + 2) / 7 - 1 = 1'));
// '(4 ? 3 ? 2) ? 7 ? 1 = 1'