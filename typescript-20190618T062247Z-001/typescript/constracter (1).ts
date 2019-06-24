class UserDetails{
//  fileds : is any variable declare in class
firstname :string;
lastname :string;
age :number;
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

let objUserDetails = new UserDetails("hemant","kumar",25);

objUserDetails.getDetalis();


