function myfun(greeting: string, name: string ) : string {
    return greeting + ' ' + name + '!';
}

myfun('Hello','Hemant');//OK, returns "Hello Steve!"
myfun('Hi'); // OK, returns "Hi undefined!".
myfun('Hi','Hemant','Saini'); //Compiler Error: Expected 2 arguments, but got