const inquirer = require("inquirer");
const manager = require("/manager");
const engineer = require("/engineer");
const intern = require("/intern");

class Employee {
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getName()
    getId()
    getEmail()
    getRole()
}




module.exports = Employee;