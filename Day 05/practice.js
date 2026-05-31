let n = 1;
let count = 0
if(n ===1){
    console.log('nor a prime')
    return
}

for(let i = 2;i<n;i++){
    if(n%i==0){
        count++
        
        
    }
    
}

if(count===0){
        console.log(' a prime')
    }else
    console.log('not prime')
