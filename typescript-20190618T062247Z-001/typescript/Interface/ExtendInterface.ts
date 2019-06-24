interface Father {
    name: string;
    gender: string;
}

interface Child extends Father {
    empCode: number;
}

let empObj:Child = {
    empCode:1,
    name:"Hemant",
    gender:"Male"
}

//the Child interface extends the Father interface. 
//So, objects of Child must include all the properties and methods
// of the Father interface otherwise, the compiler will show an error.