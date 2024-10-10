/*
Objective
  check whether an email is valid and return boolean
Rules
  valid email:
    has local part
      contains on or more letters/digits but no other characters
    has domain
      mail server name
        one or more letters only
      and top level domain
        one or more letters only
      dot separating them
    local and domain separated by @
Algorithm
  check if regex pattern is met
  return boolean if met
  regex pattern
    letterOrDigit @ letter . letter
*/

function isValidEmail(email) {
  return !!email.match(/^[a-z0-9]+@([a-z]+\.)+[a-z]+$/i)
}

console.log(isValidEmail('Foo@baz.com.ph'));          // returns true
console.log(isValidEmail('Foo@mx.baz.com.ph'));       // returns true
console.log(isValidEmail('foo@baz.com'));             // returns true
console.log(isValidEmail('foo@baz.ph'));              // returns true
console.log(isValidEmail('HELLO123@baz'));            // returns false
console.log(isValidEmail('foo.bar@baz.to'));          // returns false
console.log(isValidEmail('foo@baz.'));                // returns false
console.log(isValidEmail('foo_bat@baz'));             // returns false
console.log(isValidEmail('foo@bar.a12'));             // returns false
console.log(isValidEmail('foo_bar@baz.com'));         // returns false
console.log(isValidEmail('foo@bar.....com'));         // returns false