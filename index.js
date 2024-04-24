#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
//Initializing user balance and pin code
let myBalance = 10000;
let myPin = 6543;
//printing welcome message
console.log(chalk.green("\n \tWelcome to Muhammad Khubaib-ATM MACHINE\n"));
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: chalk.yellow("Enter your pin code:")
    }
]);
if (pinAnswer.pin === myPin) {
    console.log(chalk.green("\n \tPin is correct, login successfull\n"));
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            type: "list",
            message: "Select an operation:",
            choices: ["WithDraw Amount", "Check balance"],
        }
    ]);
    if (operationAns.operation === "WithDraw Amount") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                type: "number",
                message: "Enter amount to Withdraw",
            }
        ]);
        if (amountAns > myBalance) {
            console.log(chalk.red("Insufficient Balance"));
        }
        else {
            myBalance -= amountAns.amount;
            console.log(`${amountAns.amount} Withdraw successfully`);
            console.log(`your remaining balance is:${myBalance}`);
        }
    }
    else if (operationAns.operation === "Check balance") {
        console.log(`your account balance is ${myBalance}`);
    }
}
else {
    console.log(chalk.red("\n \tPin is incorrect, Try again!\n"));
}
