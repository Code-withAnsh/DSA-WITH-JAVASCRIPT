//array left roation by 1
 let arr = [2,3,5,4]
 let tp = arr[0]
 for(let i =0; i<arr.length-1;i++){
    arr[i] = arr[i+1]
    
 }
 arr[arr.length-1] = tp
 console.log(arr)