const Employee = require("/employee");

class Manager extends Employee{
    constructor(name, id, email, officeNumber){
        super(name, id, email)
        const officeNumber = officeNumber;
    }
    getRole()
}