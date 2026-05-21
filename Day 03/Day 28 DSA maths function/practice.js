let unit = 190
let amt = 0;
if(unit>=0 && unit<=100){
    amt = unit*4.2

}else if(unit>100&& unit<200){
    amt = (100*4.2) + (unit-100)*6.2
}else if(unit>200 && unit < 400){
    amt = (100*4.2) + (100*6.2) + (unit -200)*8
}
console.log(amt)
