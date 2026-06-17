//method 1 = with extra arr
let arr = [10,12,15,20]
let temp = new Array(arr.length)
let i =0
for(let j = arr.length-1;j>=0;j--){
 temp[i] = arr[j]
 i++
}
console.log(temp);
  //method 2-- without extra temp

let arrr = [1,2,3,4,5,6,7]
let k = 0, l = arrr.length-1
while(k<l){
    let temp = arrr[k]
    arrr[k] = arrr[l]
    arrr[l] = temp//simple swaping with third variable
    k++
    l--
}
console.log(arrr)
//this is two pointer method/algorithm