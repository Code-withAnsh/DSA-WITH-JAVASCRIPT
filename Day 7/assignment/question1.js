let ISBN = '0234567896'
if(ISBN.length!==10){
    console.log('invlaid ISBN')
}
let sum = 0;
for(let i = 0;i<ISBN.length;i++){
   if(  sum = sum+(sum*ISBN[i])%11==0){
    console.log('Valid ISBN')
   
}