

class Employee {
    empCode: number;
    empName: string;
    empsall: number;
    constructor(code: number, name: string,sall:number) {
        this.empName = name;
        this.empCode = code;
        this.empsall = sall;
        
       
}

display = () => console.log(this.empCode +' ' + this.empName)
    
}


let emp = new Employee(1, 'Ram', 123);
emp.display();

