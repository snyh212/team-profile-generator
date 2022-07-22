const inquirer = require("inquirer");
const fs = require('fs');


const Employee = require("./lib/employee");
const manager = require("/manager");
const engineer = require("/engineer");
const intern = require("/intern");

//variable to hold answer data
const answerData = [];

const questions = async () => {
    const answers = await inquirer
    .prompt([
        {
            type: "list",
            message: "what is your role?",
            name: "role",
            choices: ["Manager", "Engineer", "Intern"]
        },
        {
            type: "input",
            message: "what is your name?",
            name: "name",
        },
        {
            type: "input",
            message: "what is your employee ID numer?",
            name: "id",
        },
        {
            type: "input",
            message: "what is your E-mail address?",
            name: "email",
        },
    ])
    if (answers.role === "Manager") {
        const managerAnswers = await inquirer
        .prompt([
            {
                type: "input",
                message: "what is your office numer?",
                name: "office",
            },
        ])
    }
}

employee.create();