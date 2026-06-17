let prompt = require("prompt-sync")()
let size = Number(prompt("enter arrays size"))
let arr = new Array(size)
let sum =0;

for(let i=0; i<arr.length;i++){
    arr[i]=Number(prompt("enter element"));
    sum = sum+arr[i]
}
console.log("sum of array="+ sum)