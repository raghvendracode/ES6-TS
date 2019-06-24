let myarray =[11,12,13,14,12,15];
//create set of this array
let myset = new Set(myarray);
//add new value in array
myset.add('100');
//add object
myset.add({a:"Hemantkumar",b:"saini"});
//delete a value from an array
//myset.delete(12);
//console.log(myset);

//prinft all value value from an array by foreach

myset.forEach(function(val){
    console.log(val);
})