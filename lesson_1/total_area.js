let rectangles = [[3, 4], [6, 6], [1, 8], [9, 9], [2, 2]];

function totalArea(rectangles) {
  // find area of each rectangle - map
  // find sum of all areas - reduce
  return rectangles.map(([height, width]) => height * width).reduce((sum, area) => sum + area);
}

console.log(totalArea(rectangles));    // 141