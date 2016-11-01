export interface IUser {
    username: string;
    email: string;
    password: string;
    confirmPassword?: string;
}
export class User implements IUser {
    username: string;
    email: string;
    password: string;
    confirmPassword: string;

    constructor() {

    } 
}