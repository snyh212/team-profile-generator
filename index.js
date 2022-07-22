const inquirer = require("inquirer");
const fs = require('fs');

const Employee = require("./lib/employee")
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const team = require("./src/index");

const path = require('path');
const OUTPUT_DIR = path.resolve(__dirname, "dist");
const outputPath = path.join(OUTPUT_DIR, "team.html")

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
                message: "What school are you enrolled in?",
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
};

async function promptQuestions() {
    await questions()

    const addEmployeeAns = await inquirer
    .prompt([
        {
            type: "list",
            message: "What would you like to do next?",
            choices: ['Add Employee', 'Create Team'],
            name: "addEmployee",
        }
    ])
    if (addEmployeeAns.addEmployee === 'Add Employee'){
        return promptQuestions();
    }
    return createTeam()
}

promptQuestions();

function createTeam() {
    console.log("new members", answerData)
    if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR)
    }
    fs.writeFileSync(outputPath, team(answerData), "utf-8")
};

module.exports = answerData;