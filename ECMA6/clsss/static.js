"use strict"
class User{
    constructor(name,email,mobile,age){
        this.name = name;
        this.email = email;
        this.mobile=mobile;
        this.age=age;

    }

static getUser(){
    var a ={name:"hemant",mobile:"5556757"}
        console.log(a.name+" "+"Mobile no is" +a.mobile);
       
    }
    
}

User.getUser();

