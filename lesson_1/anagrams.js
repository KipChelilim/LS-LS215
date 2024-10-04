function areAnagrams(word, testWord) {
  wordChars = word.split('');
  return word.length === testWord.length
    && wordChars.every((char) => testWord.includes(char));
}

function anagram(word, list) {
  return list.filter((testWord) => areAnagrams(word, testWord));
}

console.log(anagram('listen', ['enlists', 'google', 'inlets', 'banana']));  // [ "inlets" ]
console.log(anagram('listen', ['enlist', 'google', 'inlets', 'banana']));   // [ "enlist", "inlets" ]
console.log(anagram('listen', ['llllll'])); // []