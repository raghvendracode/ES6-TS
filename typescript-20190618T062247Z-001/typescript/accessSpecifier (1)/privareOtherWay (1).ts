class studentdetais{

     constructor(private fname :string,private Lname :string,private ages :number){
    
    
    }
    
    getDetalis()
    {
    console.log(this.fname + this.Lname + " "+this.ages);
    }
    
    
    }
    
    let studentdetai = new studentdetais("hemant","kumar",25);
    
    
    
    