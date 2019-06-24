//A named function is one where you declare and call a function by its given name.



function display() {
    console.log("Hello TypeScript!");
}

display(); //Output: Hello TypeScript 

//Function with Parameter and Return Types



function Add(x: number, y: number) : number {
    return x + y;
}

Add(2,3); // returns 5

// Anonymous Function

// An anonymous function is one which is defined as an expression. 
// This expression is stored in a variable. So, t
// he function itself does not have a name. 
// These functions are invoked using the variable name that 
// the function is stored in.





let greeting = function() {
    console.log("Hello TypeScript!");
};

greeting(); //Output: Hello TypeScript! 

//An anonymous function can also include parameter types and return type.

//Function with Paramter and Return Types



let Sum = function(x: number, y: number) : number
{
    return x + y;
}

Sum(2,3); // returns 5

