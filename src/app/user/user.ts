export class User{
    id: string;
    firstName: string;
    lastName: string;
    emailAddress: string;
    phonenumber: string;
    role: string;
    constructor(id: string, firstName: string, lastName: string,emailAddress: string,phonenumber: string,role: string){
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.emailAddress = emailAddress;
    this.phonenumber = phonenumber;
    this.role = role;
    }
    }