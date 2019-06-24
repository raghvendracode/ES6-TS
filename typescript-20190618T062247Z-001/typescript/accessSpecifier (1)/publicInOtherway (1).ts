class student{

    constructor(public fname :string,public Lname :string,public ages :number){
   
   
   }
   
   getDetalis()
   {
   console.log(this.fname + this.Lname + " "+this.ages);
   }
   
  
   
   }
   
   let studentobj = new student("hemant","kumar",25);


   studentobj.fname; // now can access public property outside of the class
   
   
   
   