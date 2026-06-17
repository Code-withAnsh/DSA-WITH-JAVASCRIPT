// put all zeroes to the left and all 1 to the right
let arr = [1,1,0,1,1,0,0]
//use two pointer
let i = 0,j=0
while(i<arr.length){
    if(arr[i] ==0){
        let temp = arr[i]
        arr[i] = arr[j]
        arr[j]= temp
        j++
    }
    i++ 
}
console.log(arr);
