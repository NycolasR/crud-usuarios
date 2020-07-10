import User from './user';

export default class ControllerUsuario {
    constructor() {
        this.users = [];
        this.counter = 0;
    }

    addUser(name, email, birthday) {
        const user = new User(name, email, birthday, this.counter);
        this.counter++;
        this.users.push(user);
    }

    removeUser(position) {
        this.users.splice(position, 1);
    }

    findUser(id) {
        var fist = 0;
        var last = this.users.length - 1;
        
        while(fist <= last) {
            let middle = Math.floor((fist + last) / 2);
            
            if(this.users[middle].id == id) {
                return this.users[middle];
            } else {
                if(id > middle) {
                    fist = middle + 1;
                } else {
                    last = middle - 1;
                }
            }
        }
        return false;
    }

    updateUserData(user, name=null, email=null, birthday=null) {
        if(name.length !== 0) {
            user.name = name;
        }
        if(email.length !== 0) {
            user.email = email;
        }
        if(birthday.length !== 0) {
            user.birthday = birthday;
        }
    }
}