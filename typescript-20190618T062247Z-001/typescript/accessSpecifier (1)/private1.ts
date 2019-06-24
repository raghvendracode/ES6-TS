// The private access modifier ensures that class members are 
// only to that class and are not accessible outside the containing class.



class Users {
    private empCode: number;
    empName: string;
}

let User = new Users();

User.empName = "Hemant"
// User.empCode= 123 //Not accessible  it will give an error.