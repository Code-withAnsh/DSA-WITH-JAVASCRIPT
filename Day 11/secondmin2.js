let arr= [10,30,20,45,15]
let min = Infinity
let secondMin = Infinity
for(let i = 0;i<arr.length;i++){
    if(arr[i]<min){
        secondMin = min
        min = arr[i]
    }else if(arr[i]<secondMin && arr[i]!==min){
        secondMin = arr[i]
    }
}
console.log(secondMin)