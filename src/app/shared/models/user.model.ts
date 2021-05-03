export interface IUser{
    name: String;
    email: String;
    password: String;
    password_confirmation: String;
}

export class User implements IUser {
    name: String;
    email: String;
    password: String;
    password_confirmation: String;

    constructor() {
        this.name = '';
        this.email = '';
        this.password = '';
        this.password_confirmation = '';
    }
}