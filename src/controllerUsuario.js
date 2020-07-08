import User from './user';

export default class ControllerUsuario {
    constructor() {
        this.users = [];
    }

    addUser(name, email, age) {
        const user = new User(name, email, age);
        this.users.push(user);
    }

    removeUser(position) {
        this.users.splice(position, 1);
    }

    render() {
        this.users.forEach(user => console.log(user));
    }
}