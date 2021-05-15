const fs = require('fs');
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data) {
  const selectLice = data.license[0];
  let thisLice = " "
  if (selectLice === 'MIT') {
    thisLice = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  };
   if (selectLice === 'GNU General Public License') {
    thisLice = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
  };
  if (selectLice === 'Apache') {
    thisLice = `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  };
  if (selectLice === 'Unlicense') {
    thisLice = `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`
  };
  if (selectLice === ' ') {
    thisLice = `" "`
  };
 return thisLice;
};


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
  Direct Link: https://github.com/${data.github}/${data.title}
  <br/>
  Repo Link: https://github.com/${data.github}
  <br/>
  ${renderLicenseBadge(data)}

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
