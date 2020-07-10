export default class User {
    constructor(name, email, birthday, id) {
        this.name = name;
        this.email = email;
        this.birthday = birthday;
        this.id = id;
    }

    calculateAge() {
        const actualDate = new Date();
        const birthdayDate = new Date(this.birthday);
        return actualDate.getFullYear() - birthdayDate.getFullYear();
    }
}