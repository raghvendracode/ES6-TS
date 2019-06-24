"use strict"
class User{
    constructor(name,email,mobile,age){
        this.name = name;
        this.email = email;
        this.mobile=mobile;
        this.age=age;

    }

    getUser(){
        console.log(this.name +this.email+this.mobile+this.age);
    }
}

let teacher = new User("Hemant","hemantbly.kumar@gmail.com","9205262451","30");
let teacher1 = new User("suraj","hemantbly.kumar@gmail.com","9205262451","30");
teacher.getUser();
teacher1.getUser();
