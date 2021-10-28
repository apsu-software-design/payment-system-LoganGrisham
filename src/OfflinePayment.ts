import readlineSync = require('readline-sync');
import { IPaymentSystem } from "./IPaymentSystem";

export class OfflinePayment implements IPaymentSystem {
    private name: string;
    private address: string;

    constructor() {
        this.name = '';
        this.address = "";

    }
    public getName() { return this.name }
    public getAddress() { return this.address }
    public setName(name: string) { this.name = name }
    public setAddress(addr: string) { this.address = addr }

    getInput(): void {
        console.log("Enter User information below.");
        this.setName(readlineSync.question("User Name: "));
        this.setAddress(readlineSync.question("User Current Address: "));

    }

    validateInput(): boolean { //ripped all these from the UI, never seen the syntax before.
        let valid = /^[\w.' ]+$/.test(this.getName()) && /^[\w.' ]+$/.test(this.getAddress());
        return valid;
    }
}