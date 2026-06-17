let prompt = require("prompt-sync")()
let size = Number(prompt("enter arrays size"))
let arr = new Array(size)//mana humne array ka size 4 liye

for(let i=0; i<arr.length;i++){//ye array ke length tak chalega agar array ka length 4 hai to 0 se 3 tak chalega
arr[i] = Number(prompt("enter element "))//hum user se value lenge let suppose starting me hum array ka size ddefie kiye let supoose 4
//3rd line se kya hoga jitna array ka size define kiye rhenge wo isme aa jayega kyunki let suppose new Array(4) liya to iska matlab array with size of 4
//aur yaha per new Array(size ) hai to jo size hoga wo aa jayega phir 4th line me loop chalge array ke length tak
//phir 5th line se user input lega array ka size define kiye the na ab ussme value dalenge

}
console.log(arr)