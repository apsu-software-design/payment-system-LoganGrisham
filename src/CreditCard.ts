import readlineSync = require('readline-sync');
import { IPaymentSystem } from "./IPaymentSystem";

export class CreditCardPayment implements IPaymentSystem {
    private creditCardName: string;
    private creditCardNumber: string;
    private creditCardExpiration: string;

    constructor() {
        this.creditCardName = '';
        this.creditCardExpiration = "";
        this.creditCardNumber = "";

    }
    public getcreditCardName() { return this.creditCardName }
    public getcreditCardExpiration() { return this.creditCardExpiration }
    public getcreditCardNumber() { return this.creditCardNumber }
    public setcreditCardName(ccName: string) { this.creditCardName = ccName }
    public setcreditCardExpiration(ccExp: string) { this.creditCardExpiration = ccExp }
    public setcreditCardNumber(ccNum: string) { this.creditCardNumber = ccNum }

    getInput(): void {
        console.log("Enter Credit Card information below.");
        this.setcreditCardName(readlineSync.question("Credit Card Name: "));
        this.setcreditCardNumber(readlineSync.question("Credit Card Number: "));
        this.setcreditCardExpiration(readlineSync.question("Credit Card Expiration: "));
        
    }

    validateInput(): boolean { //ripped all these from the UI, never seen the syntax before.
        let valid = /^[\w.' ]+$/.test(this.getcreditCardName()) && /\d{15,16}/.test(this.getcreditCardNumber()) && /\d\d\/\d\d/.test(this.getcreditCardExpiration());
        return valid;
    }
}