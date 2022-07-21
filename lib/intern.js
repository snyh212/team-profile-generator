const Employee = require("/employee");

class Intern extends Employee{
    constructor(name, id, email, school){
        super(name, id, email)
        const school = school;
    }
    getSchool()
    getRole()
}