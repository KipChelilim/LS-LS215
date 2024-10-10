"use string";

const rlSync = require('readline-sync');

const getUserName = function requestNameFromUser(prompt) {
  return rlSync.question(`${prompt} `);
}

const greet = function greetingForUserName(name) {
  let greeting = 'Hello';
  const SCREAMING_GREETING = 'WHY ARE WE SCREAMING?';

  if (name.endsWith('!')) {
    let updatedName = name.slice(0, -1).toUpperCase();
    greeting = greeting.toUpperCase();
    console.log(`${greeting} ${updatedName}. ${SCREAMING_GREETING}`);
  } else {
    console.log(`${greeting} ${name}.`);
  }

}

let userName = getUserName('What is your name?');
greet(userName);