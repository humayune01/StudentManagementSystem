import Person from "./Person.js";

class Student extends Person {
    private studentID : string;
    private courses : string[];
    private balance : number;

    constructor(name : string) {
        super();
        this.name = name;
        this.courses = [];
        this.balance = 0;
        this.studentID = this.generateStudentID();
    }

    private generateStudentID () : string {
        return Math.floor(10000 + Math.random() * 90000).toString();
    }

    public enroll (course : string) : void {
        this.courses.push(course);
        console.log(`${this.name} is now enrolled in ${course}.`);
    }

    public viewBalance () : void {
        console.log(`${this.name} remaining balance is ${this.balance}.`);
    }

    public payTuitionFees (fees : number) : void {
        this.balance -= fees;
        console.log(`${this.name} fee is paid $${fees}.`);
    }

    public showStatus () : void {
        console.log(`Student Name: ${this.name}`);
        console.log(`Student ID: ${this.studentID}`);
        console.log(`Student Balance: $${this.balance}`);
        console.log(`Student Courses:`);
        for (let course of this.courses) {
            console.log(`-- ${course}`);
        }
    }

    getBalance () : number {
        return this.balance;
    }

    setBalanace (amount : number) : void {
        this.balance += amount;
        console.log(`${this.name}'s amount deposited to his/her balance.`);
    }
}

export default Student;