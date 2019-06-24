class Person {
    name: string;
    
    constructor(name: string) {
        this.name = name;
    }
}

class Employee1 extends Person {
    empCode: number;
    
    constructor(empcode: number, name:string) {
        super(name);
        this.empCode = empcode;
    }
    
    displayName():void {
        console.log("Name = " + this.name +  ", Employee Code = " + this.empCode);
    }
}

let emp = new Employee1(100, "Bill");
emp.displayName(); // Name = Bill, Employee Code = 100
