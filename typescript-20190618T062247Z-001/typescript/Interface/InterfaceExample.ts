interface Employee {
    empCode: number;
    empName: string;
    Salary: (number) => number; // arrow function

    
    getManagerName(number): string; 
}