let rectangles = [[3, 4], [6, 6], [1, 8], [9, 9], [2, 2]];

function totalSquareArea(rectangles) {
  // filter
  // map
  // sum
  let squares = rectangles.filter(([height, width]) => height === width);
  return squares.map(([height, width]) => height * width).reduce((sum, area) => sum + area);
}


console.log(totalSquareArea(rectangles));    // 121