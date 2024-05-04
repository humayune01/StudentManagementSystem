#! /usr/bin/env node
import Student from "./Student.js";
import inquirer from "inquirer";
// add student -- Done
// select student
// perform operations accordingly
let confirmAdd;
let confirmOp;
let students = [];
do {
    confirmAdd = await inquirer.prompt({
        message: "Do you want to add new student?",
        type: "confirm",
        name: "addStudent"
    });
    if (confirmAdd.addStudent) {
        let studentName = await inquirer.prompt({
            message: "Please type student name: ",
            type: "input",
            name: "name"
        });
        let student = new Student(studentName.name);
        students.push(student);
    }
} while (confirmAdd.addStudent);
do {
    confirmOp = await inquirer.prompt({
        message: "Do you want to perform any operations?",
        type: "confirm",
        name: "operation"
    });
    if (confirmOp.operation) {
        let selectStudent = await inquirer.prompt({
            message: "Please select any student: ",
            type: "list",
            choices: students.map(studentObject => studentObject.getName()),
            name: "select"
        });
        // selectStudent.select
        let student = students.find(studentObject => studentObject.getName() == selectStudent.select);
        let perform = await inquirer.prompt({
            message: "What do you want to perform:",
            type: "list",
            choices: ["Check Status", "Set Balance", "Pay Tuition Fee", "Enroll", "View Balance"],
            name: "operation"
        });
        switch (perform.operation) {
            case "Check Status":
                student?.showStatus();
                break;
            case "Set Balance":
                let amount = await inquirer.prompt({
                    message: "Please enter amount: ",
                    type: "number",
                    name: "balanceAmount"
                });
                student?.setBalanace(amount.balanceAmount);
                break;
            case "Pay Tuition Fee":
                let fee = await inquirer.prompt({
                    message: "Please enter fees: ",
                    type: "number",
                    name: "feeAmount"
                });
                student?.payTuitionFees(fee.feeAmount);
                break;
            case "Enroll":
                let course = await inquirer.prompt({
                    message: "Please select any course to enroll: ",
                    type: "list",
                    choices: ["Web Development", "Mastering Typescript", "AI Prompt Engineering"],
                    name: "selected"
                });
                student?.enroll(course.selected);
                break;
            case "View Balance":
                student?.viewBalance();
                break;
        }
    }
} while (confirmOp.operation);
