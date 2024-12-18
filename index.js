// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';

const generateMarkdown = ({ title, description, tableOfContents, installation, usage, license, contributing, tests, github, email }) => 
    `# ${title}
    ## Description
    ${description}
    ## Table of Contents
    ${tableOfContents}
    ## Installation
    ${installation}
    ## Usage
    ${usage}
    ## License
    This project uses a ${license} license.
    ## Contributing
    ${contributing}
    ## Tests
    ${tests}
    ## Questions
    If you have any questions, please contact me at ${github} or ${email}.
`

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a description of your project.'
    },
    {
        type: 'input',
        name: 'tableOfContents',
        message: 'Please provide a table of contents for your project.'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please provide installation instructions for your project.'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide usage information for your project.'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please select a license for your project.',
        choices: ['MIT', 'Apache', 'GPL', 'BSD']
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Please provide contribution guidelines for your project.'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Please provide test instructions for your project.'
    },
    {
        type: 'input',
        name: 'github',
        message: 'Please provide your GitHub username.'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please provide your email address.'
    }    
]

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), (err) =>
        err ? console.error(err) : console.log('Success, README.md has been created!'));
}

//Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((data) => {
        writeToFile('README.md', data);
    });
}

init();


