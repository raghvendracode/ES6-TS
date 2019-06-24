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


class  Member extends User{
constructor(name,email,mobile,age,MemberPackage){
    super(name,email,mobile,age);
    this.MemberPackage=MemberPackage; 
}
getPackage(){
    console.log(this.name+"package is" +this.MemberPackage);
}

}


let teacher = new Member("Hemant","hemantbly.kumar@gmail.com","9205262451","30","57000");
teacher.getPackage();
//call getUser method
teacher.getUser();