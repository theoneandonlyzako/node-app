// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return `${data.license}`;

  // if (!data.license){
  //   return '';
  
  // }else {return `${data.license}`;}
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
// return `${data.license}`;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  // if return `${data.license}`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  [![GitHub license](https://img.shields.io/badge/License-${data.license}.svg)]
  (https://github.com/${data.userName}/${data.title})
  
  # Description
  ${data.description}
  
  # Table of Contents 
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
  # Installation
  The following necessary dependencies must be installed to run the application properly: ${data.install}
  
  # Usage
  ​This application is used for ${data.usage}
 
  # License
  This project is license under the ${data.license} license.
  
  # Contributing
  ​Contributors: ${data.contributors}
  
  # Tests
  To run tests, you need to run the following command: ${data.test}
  
  # Questions
  If you have any questions about the repo, open an issue or contact ${data.userName} directly ${data.email}.
`;
}

module.exports = generateMarkdown;
