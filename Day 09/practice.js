// let prompt = require("prompt-sync")();
// let n = Number(prompt("enter the size"))
// let arr = [10,15,30,75,40,61]
// let blank = []
// for(let i = 0;i<arr.length;i++){
//     if(arr[i]>40){
//         blank.push(arr[i])
//     }
// }
// console.log(blank)

//method 2
let arr = [10,15,30,'c','d',5,40,61]
let element = arr.filter(function(t){
    return t>40
})
console.log(element);


