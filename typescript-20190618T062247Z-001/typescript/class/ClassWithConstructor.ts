class Company {

    cmpReg: number;
    cmpName: string;
    
    constructor(cmpreg: number, Cname: string ) {
        this.cmpReg = cmpreg;
        this.cmpName = Cname;
    }
}

let emp = new Company(12345,"Foundlay");