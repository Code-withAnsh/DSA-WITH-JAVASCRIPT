const prompt = require("prompt-sync")();

let size = Number(prompt("Enter array size: "));
let arr = new Array(size);

for (let i = 0; i < arr.length; i++) {
  arr[i] = Number(prompt(`Enter element ${i + 1}: `));
}

let max = arr[0];
for (let i = 1; i < arr.length; i++) {
  if (arr[i] > max) {
    max = arr[i];
  }
}

console.log("Maximum element is: " + max);