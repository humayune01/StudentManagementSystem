import Person from "./Person.js";
class Student extends Person {
    studentID;
    courses;
    balance;
    constructor(name) {
        super();
        this.name = name;
        this.courses = [];
        this.balance = 0;
        this.studentID = this.generateStudentID();
    }
    generateStudentID() {
        return Math.floor(10000 + Math.random() * 90000).toString();
    }
    enroll(course) {
        this.courses.push(course);
        console.log(`${this.name} is now enrolled in ${course}.`);
    }
    viewBalance() {
        console.log(`${this.name} remaining balance is ${this.balance}.`);
    }
    payTuitionFees(fees) {
        this.balance -= fees;
        console.log(`${this.name} fee is paid $${fees}.`);
    }
    showStatus() {
        console.log(`Student Name: ${this.name}`);
        console.log(`Student ID: ${this.studentID}`);
        console.log(`Student Balance: ${this.balance}`);
        console.log(`Student Courses:`);
        for (let course of this.courses) {
            console.log(`-- ${course}`);
        }
    }
    getBalance() {
        return this.balance;
    }
    setBalanace(amount) {
        this.balance += amount;
        console.log(`${this.name}'s amount deposited to his/her balance.`);
    }
}
export default Student;
