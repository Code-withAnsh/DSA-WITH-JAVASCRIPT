let arr = new Array(4)//0 to 3
arr[0] = 1;
arr[1]= 20;
arr[2] = 30;
arr[3] = 40;
//lekin what happend agar maine 6th index per kuch rakh diya jabki define 4 index tak hi kiya hai
///to hoga ye ki 4th 5th index ke jagah per empty items aa jayega aur 6th per element print ho jaye
arr[6] = 40;
console.log(arr)