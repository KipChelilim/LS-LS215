  // get array of parens in order
  // return false if first is closing or last is opening or parens length is odd
  // set opening paren to true
  // iterate
    // if i have an opening paren, increase open paren count
    // if i have a closing paren
      // return false if open paren is < 1
      // else reduce open paren count

const isValidParensSet = function isValidSetOfParens(parensArray) {
  let openingParen = parensArray[0]
  let closingParen = parensArray[parensArray.length - 1]

  return (openingParen === '('
    && closingParen === ')'
    && parensArray.length % 2 === 0);
}


const isBalanced = function isBalancedSetOfParens(string) {
  let parens = string.match(/[()]/g);
  if (parens === null) return true;
  if (!isValidParensSet(parens)) return false;

  let parensCount = 0;
  for (let idx = 0; idx < parens.length; idx += 1) {
    let paren = parens[idx];
    if (paren === '(') {
      parensCount += 1;
    } else {
      if (parensCount === 0) return false;
      parensCount -= 1;
    }
  }

  return true;
}

console.log(isBalanced('What (is) this?'));        // true
console.log(isBalanced('What is) this?'));         // false
console.log(isBalanced('What (is this?'));         // false
console.log(isBalanced('((What) (is this))?'));    // true
console.log(isBalanced('((What)) (is this))?'));   // false
console.log(isBalanced('Hey!'));                   // true
console.log(isBalanced(')Hey!('));                 // false
console.log(isBalanced('What ((is))) up('));       // false