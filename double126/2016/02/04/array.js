var fruits = ["Apple", "Banana"];

console.log(fruits.length);
var first = fruits[0];
// Apple

var last = fruits[fruits.length - 1];
// Banana

console.log("index");
console.log(first);
console.log(last);

fruits.forEach(function (item, index, array) {
  console.log(item, index);
});
