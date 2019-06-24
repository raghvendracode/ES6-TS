class UserDetail{
//  fileds : is any variable declare in class
 private firstname :string;
 private lastname :string;
 private age :number;
//  optinal perameter by using ? like ages?: number
constructor(fname :string,Lname :string,ages :number){
this.firstname = fname;
this.lastname = Lname;
this.age = ages;

}

getDetalis()
{
console.log(this.firstname + this.lastname + " "+this.age);
}


}

let objUserDetail = new UserDetail("hemant","kumar",25);





