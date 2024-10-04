let bands = [
  { name: 'sunset rubdown', country: 'UK', active: false },
  { name: 'women', country: 'Germany', active: false },
  { name: 'a silver mt. zion', country: 'Spain', active: true },
];

function processBands(data) {
  return data.map(({ name, active, }) => {
    let capitalizedBandName = capitalizeWords(name)
    return { name: removeDots(capitalizedBandName), country: 'Canada', active, }
  });
}

const capitalizeWords = (string) => {
  let words = string.split(' ')
  return words.map((word) => word[0].toUpperCase() + word.slice(1)).join(' ');
}

const removeDots = (string) => string.replace('.', '');

console.log(processBands(bands));
console.log(bands);

// should return:
// [
//   { name: 'Sunset Rubdown', country: 'Canada', active: false },
//   { name: 'Women', country: 'Canada', active: false },
//   { name: 'A Silver Mt Zion', country: 'Canada', active: true },
// ]