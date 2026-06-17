let n = 5 
let copy = n
let count = 0;
let sq = n*n
while(n>0){
    count++
    n = Math.floor(n/10)

}
if(sq%Math.pow(10,count)==copy){
    console.log('automorphic number')
}else{
    console.log('not a automorphic number')
}