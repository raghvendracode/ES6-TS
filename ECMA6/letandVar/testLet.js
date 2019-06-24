"use strict"
function testlet(){
let a= 30;
if(true){ 
   let a= 20;
    console.log(a);
}
console.log(a);
}
testlet();