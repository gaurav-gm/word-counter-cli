const fs = require("fs")
const path = require("path")
const  chalk = require("chalk")
const { Command } = require('commander');

// Creating the commander - program to handle user argument and provide it as 'userInput'
const program = new Command();
let userInput;

program
  .name('Word Counter')
  .description('CLI to do file based tasks')
  .version('1.0.1');

program
  .argument('<input>', 'path to file')
  .action(input => {
    userInput = input;
  })
  program.parse();

  const completePath = path.join(userInput);

  fs.readFile(completePath, "utf-8", (err, data) => {
    const dataArray = data.split(" ");
    const numberOfWords = chalk.hex("#d1949e")(dataArray.length);
    const finalString = "You have " + chalk.bgGreen(numberOfWords) + " words " + chalk.blue("in this") + " file";
    console.log(finalString);
  })