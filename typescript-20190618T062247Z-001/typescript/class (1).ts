class StudentsDetails{
//  fileds : is any variable declare in class
firstname :string;
lastname :string;
age :number;
getDetails()
{
 console.log(this.firstname + " " + this.lastname + " "+ this.age);
}

}
 
 let obj1 = new StudentsDetails();

 obj1.firstname = "hemant";
 obj1.lastname = "kumar";
 obj1.age = 30;

 obj1.getDetails();













//objstudent.getFirstname();

