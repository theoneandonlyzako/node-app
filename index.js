// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: "What is your projects name?",
        validate: nameInput => {
            if (nameInput) {
              return true;
            } else {
              console.log('Please enter your projects name!');
              return false;
            }
        }
    },
    {
        type:'input',
        name: 'userName',
        message: 'Enter your GitHub user name.'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please enter a brief descritption of your project.'
    },
    {
        type: 'input',
        name: 'install',
        message: 'Please include installation instructions'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please add usage information.'
    },
    {
        type: 'input',
        name: 'contributors',
        message: 'Please include and contributers.'
    },
    {
        type: 'input',
        name :'test',
        message: 'Please enter test instructions.'
    }, 
    {
        type: 'checkbox',
        name: 'license',
        message: 'Please select a license.',
        choices: [
            'GNU General Public License v3.0', 
            'MIT License',
            'Unlicense',
            'Apache License 2.0'
        ]
    }, 
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address.'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

    fs.writeFile("./dist/"+fileName, data, function(err) {
      if (err) {
        return console.log(err);
      }
      console.log ("Successfully wrote: " + fileName);
    })
    
    }

// Function call to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function(data) {
      writeToFile("generatedREADME.md", generateMarkdown(data));
    })
  }


init();
