// What does the following print to the console?
console.log(1);

setTimeout(function() {
  console.log(2);
}, 0);

setTimeout(function() {
  console.log(3);
}, 10);

console.log(4);
