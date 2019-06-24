

class Employee2 {
    public empName: string;
    protected empCode: number;

    constructor(name: string, code: number){
        this.empName = name;
        this.empCode = code;
    }
}

class SalesEmployee extends Employee2{
    private department: string;
    
    constructor(name: string, code: number, department: string) {
        super(name, code);
        this.department = department;
       
    }
    
}

let emp3 = new SalesEmployee("Hemant kumar", 123, "MeanStack");


emp3.empCode //Compile error try to access the protected member from outside the class


