import readlineSync = require('readline-sync');
import { IPaymentSystem } from "./IPaymentSystem";

export class BankDraftPayment implements IPaymentSystem {
    private bankDraftName: string;
    private bankRoutingNumber: string;
    private bankAccountNumber: string;

    constructor() {
        this.bankDraftName = '';
        this.bankAccountNumber = "";
        this.bankRoutingNumber = "";

    }
    public getBankDraftName() { return this.bankDraftName }
    public getBankAccountNumber() { return this.bankAccountNumber }
    public getBankRoutingNumber() { return this.bankRoutingNumber }
    public setBankDraftName(bdName: string) { this.bankDraftName = bdName }
    public setBankAccountNumber(bAccNum: string) { this.bankAccountNumber = bAccNum }
    public setBankRoutingNumber(bRoutNum: string) { this.bankRoutingNumber = bRoutNum }

    getInput(): void {
        console.log("Enter bank information below.");
        this.setBankDraftName(readlineSync.question("Bank Draft Name: "));
        this.setBankAccountNumber(readlineSync.question("Bank Account Number: "));
        this.setBankRoutingNumber(readlineSync.question("Bank Routing Number: "));
    }

    validateInput(): boolean {//ripped all these from the UI, never seen the syntax before.
        let valid = /^[\w.' ]+$/.test(this.getBankDraftName()) && /\d{9}/.test(this.getBankAccountNumber()) && /\d{6,12}/.test(this.getBankRoutingNumber());
        return valid;
    }
}