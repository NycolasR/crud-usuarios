export default class User {
    constructor(name, email, age) {
        this.name = name;
        this.email = email;
        this.age = age;
        this.id = this.generateId();
    }

    generateId() {
        return "_" + Math.random().toString(36).substr(2, 9);
    }
}