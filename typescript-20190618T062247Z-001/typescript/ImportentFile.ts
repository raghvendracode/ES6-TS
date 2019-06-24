//Class without Constructor
class Client {
    empCode: number;
    empName: string;
}


// Constructor  -The constructor is a special type of method which is called when creating an object. In TypeScript, the constructor method is always defined with the name "constructor".

class Employee {

    empCode: number;
    empName: string;
    
    constructor(empcode: number, name: string ) {
        this.empCode = empcode;
        this.empName = name;
    }
    getSalary() : number {
        return 10000;
    }
}

//Creating an Object of Class
class User {
    empCode: number;
    empName: string;
}

let emp = new User();




