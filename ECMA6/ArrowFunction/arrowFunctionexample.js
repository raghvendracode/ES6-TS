// ES5 
function printName(name) {
    console.log('Hello ' + name);
}

printName('Hemant'); // Hello Hemant 



// NormalFunction
var sum = function (x, y) {
    return x + y;
}
// Convert In arrowFunction
var sum = (x, y) => {
    console.log(x + y)
}
sum(10, 20);