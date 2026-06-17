//strong no. is a positive number where the sum of
//the factorials of its digits equals the original
//number itself
let prompt = require("prompt-sync")()
let n = Number(prompt("enter a number: "))
let ans =0;
let copy = n;
while(n>0){
    let digit = n%10
    let fact =1 
    for(let i = 1;i<=digit;i++){
        fact = fact*i
    }
    ans = ans+fact 
    n = Math.floor(n/10)
}
if(copy==ans){
    console.log('strong number');
    
}else{
    console.log('not a strong number')
}