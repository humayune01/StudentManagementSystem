class Person {
    name;
    age;
    constructor() {
        this.name = '';
        this.age = 0;
    }
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }
    getAge() {
        return this.age;
    }
    setAge(age) {
        this.age = age;
    }
}
export default Person;
