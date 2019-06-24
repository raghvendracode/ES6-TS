

function Greet(greeting: string, name: string ) : string {
    return greeting + ' ' + name + '!';
}

Greet('Hello','Hemant');//OK, returns "Hello Steve!"
Greet('Hello'); // Compiler Error: Expected 2 arguments, but got 1.
Greet('Hello','Hemant','Kumar'); //Compiler Error: Expected 2 arguments, but got 3.

