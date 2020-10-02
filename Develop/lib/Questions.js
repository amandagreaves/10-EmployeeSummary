const inquirer = require("inquirer");

class Questions {
    constructor() {
        this.manager =  [
            {
                type: "input",
                name: "name",
                message: "What is your manager's name?"
            },
            {
                type: "input",
                name: "id",
                message: "What is your manager's employee id?"
            },
            {
                type: "input",
                name: "email",
                message: "What is your manager's email?"
            },
            {
                type: "input",
                name: "officeNumber",
                message: "What is your manager's office number?"
            }
        ];
        this.intern = [
            {
                type: "input",
                name: "name",
                message: "What is your intern's name?"
            },
            {
                type: "input",
                name: "id",
                message: "What is your intern's employee id?"
            },
            {
                type: "input",
                name: "email",
                message: "What is your intern's email?"
            },
            {
                type: "input",
                name: "school",
                message: "What school does your intern attend?"
            }
        ];
        this.engineer = [
            {
                type: "input",
                name: "name",
                message: "What is your engineer's name?"
            },
            {
                type: "input",
                name: "id",
                message: "What is your engineer's employee id?"
            },
            {
                type: "input",
                name: "email",
                message: "What is your engineer's email?"
            },
            {
                type: "input",
                name: "github",
                message: "What is your engineer's GitHub username?"
            }
        ];
    }

    inqRole() {
        const questions = {
            type: "list",
            name: "role",
            message: "What is the role of the employee?",
            choices: ["Manager", "Intern", "Engineer"],
            filter: function (val) {
            return val.toLowerCase();
            }
        }
        return inquirer.prompt(questions);
    }

    inqQuestions(role) {
        let questions = this[role];
        return inquirer.prompt(questions);
    }

    inqAddMore() {
        const questions = {
            type: "confirm",
            name: "more",
            message: "Continue adding employees?"
        }
        return inquirer.prompt(questions);
    }
}

module.exports = Questions;