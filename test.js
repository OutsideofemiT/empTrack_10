const inquirer = require('inquirer');

async function testPrompt() {
    const { name } = await inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?'
        }
    ]);
    console.log(`Hello, ${name}!`);
}

testPrompt();
