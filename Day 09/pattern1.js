//ASCI VALUE
//A - 65, B- 66, c- 67
//a=97, b=98, c=99
// 0 = 48, 1=49, 2-50
const prompt = require('prompt-sync')()
let n = prompt('enetr the number')
for(let i =1;i<=n;i++){
let temp = 65;
for(let j = 1;j<=i;j++){
    process.stdout.write(String.fromCharCode( temp +' '))
    temp++

}
console.log();

}