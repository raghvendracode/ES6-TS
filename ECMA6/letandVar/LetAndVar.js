"use strict"
function testvar(){
var a= 30;
if(true){
    var a =20;
   // let a= 20;
    console.log(a);
}
console.log(a);
}
testvar();