import { BankDraftPayment } from "./BankDraft";
import {CreditCardPayment } from "./CreditCard"
import { IPaymentSystem } from "./IPaymentSystem";
import { OfflinePayment } from "./OfflinePayment";
import { OnlinePayment } from "./OnlinePayment";

export class PaymentSystemExecutor {   //factory class
    //validate it 
    //encrypt (console.log)
    //process it

    private payInterface: IPaymentSystem;
    //Did not include payment system executor because Didn't use the object like that.
    constructor(payInter: IPaymentSystem) {
        this.payInterface = payInter;
    }
    public execute(): void {

        let payment = this.payInterface;
        payment.getInput();

        //let valid = this.validateInput(payment);     USE Interface!
        let valid = payment.validateInput();
        //update the UI
        if (valid) {
            console.log("Encrypting data.")
            console.log("Payment information is being processed");
        }
        else {
            console.log("Payment information is invalid.")

        }
    
    }
   
}

export class PaymentSystemContext {  //Left both functions in payment_systems since the UI pulls it from here already.
    private type: string;

    constructor(payType: string) { //this is my strategy pattern per the instructions.  Notably, not get executor. It works without one so I didn't use it. 
                                   //Creates objects of classes and executes them through above checks and UI updates
        this.type = payType;

        if (this.type == "BankDraft") { 
            (new PaymentSystemExecutor(new BankDraftPayment)).execute();
        }
        else if (this.type == "CreditCard") {
            (new PaymentSystemExecutor(new CreditCardPayment)).execute();
        }
        else if (this.type == "OnlinePayment") {
            (new PaymentSystemExecutor(new OnlinePayment)).execute();
        }
        else if (this.type == "OfflinePayment"){
            (new PaymentSystemExecutor(new OfflinePayment)).execute();
        }
    }
    public getType() { return this.type }
    public setType(type: string) { this.type = type }
}

