let prompt = require('prompt-sync')()
let size = Number(prompt('enter a number'))
let arr = new Array(size)
for(let i = 0;i<size;i++){
arr[i]=Number(prompt('enter the number'))
}
let max = arr[0];

for(let i = 1;i<arr.length;i++){
if(arr[i]>max)
    max = arr[i]
}

console.log(max)