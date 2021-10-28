import readlineSync = require('readline-sync');
import { IPaymentSystem } from "./IPaymentSystem";

export class OnlinePayment implements IPaymentSystem {
    private emailName: string;
    private emailPassword: string;

    constructor() {
        this.emailName = '';
        this.emailPassword = "";

    }
    public getemailName() { return this.emailName }
    public getemailPassword() { return this.emailPassword }
    public setemailName(emName: string) { this.emailName = emName }
    public setemailPassword(emPass: string) { this.emailPassword = emPass }

    getInput(): void {
        console.log("Enter Email information below.");
        this.setemailName(readlineSync.question("Email Account Name: "));
        this.setemailPassword(readlineSync.question("Email Account Password: "));
  
    }

    validateInput(): boolean { //ripped all these from the UI, never seen the syntax before.
        let valid = /^[\w@.]+$/.test(this.getemailName()) && /\w+/.test(this.getemailPassword());
        return valid;
    }
}