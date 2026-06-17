let arr = [28,6,74,48,84,79]
let max = Math.max(arr[0], arr[1])
let secondMax = Math.min(arr[0], arr[1]);
for(let i = 2; i<arr.length;i++){
    if(arr[i]>max){
        secondMax = max;
        max = arr[i]
    }else if(arr[i]>secondMax){
        secondMax = arr[i]
    }
}
console.log("second max" , secondMax)

//method 2
 let arr1 = [28,6,74,48,84,79]

 let maxx = -Infinity
 let secondMaxx = -Infinity
 for(let i = 0;i<arr1.length;i++){
    if(arr1[i]>maxx){
        secondMaxx= maxx
        maxx = arr1[i]
    }
    else if(arr1[i]>secondMaxx && arr1[i] !==maxx){
        secondMaxx = arr1[i]
    }
 }
 
console.log(secondMaxx)
