  class studentdeta{

    constructor(protected fname :string,protected Lname :string,protected ages :number){
   
   
   }
   
   getDetalis()
   {
   console.log(this.fname + this.Lname + " "+this.ages);
   }
   
   
   }
   class child extends studentdeta{
    fisrtname : string;
    lastname :string;

    getStudentdetail(){
        console.log(this.fisrtname + this.lastname );
    }

   }

   let studentdet = new studentdeta("hemant","kumar",25);
   
   
   
   