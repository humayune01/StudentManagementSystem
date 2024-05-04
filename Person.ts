class Person {
    protected name: string;
    protected age: number;

    constructor() {
        this.name = '';
        this.age = 0;
    }

    getName () {
        return this.name;
    }

    setName (name: string) {
        this.name = name;
    }

    getAge () {
        return this.age;
    }

    setAge (age: number) {
        this.age = age;
    }
}

export default Person;