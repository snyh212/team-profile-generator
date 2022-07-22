const inquirer = require("inquirer");
const fs = require('fs');

const manager = require("/manager");
const engineer = require("/engineer");
const intern = require("/intern");

//variable to hold answer data
const answerData = [];

const questions = async () => {
    const answers = await inquirer
    .prompt([
        {
            type: "input",
            message: "What is your name?",
            name: "name",
        },
        {
            type: "input",
            message: "What is your employee ID number?",
            name: "id",
        },
        {
            type: "input",
            message: "What is your E-mail address?",
            name: "email",
        },
        {
            type: "list",
            message: "What is your role?",
            name: "role",
            choices: ["Manager", "Engineer", "Intern"]
        },
    ])
    if (answers.role === "Manager") {
        const managerAnswers = await inquirer
        .prompt([
            {
                type: "input",
                message: "What is your office number?",
                name: "office",
            },
        ])
        const newManager = new Manager(
            answers.name,
            answers.id,
            answers.email,
            managerAnswers.office,
        );
        answerData.push(newManager);

    }else if (answers.role === "Engineer") {
        const engineerAnswers = await inquirer
        .prompt([
            {
                type: "input",
                message: "What is your GitHub username?",
                name: "github",
            },
        ])
        const newEngineer = new Engineer(
            answers.name,
            answers.id,
            answers.email,
            engineerAnswers.github,
        );
        answerData.push(newEngineer);

    }else if (answers.role === "Intern") {
        const internAnswers = await inquirer
        .prompt([
            {
                type: "input",
                message: "What is yschool are you enrolled in?",
                name: "school",
            },
        ])
        const newIntern = new Intern(
            answers.name,
            answers.id,
            answers.email,
            internAnswers.school,
        );
        answerData.push(newIntern);
    }
}

employee.create();