"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentSystemContext = exports.PaymentSystemExecutor = void 0;
var BankDraft_1 = require("./BankDraft");
var CreditCard_1 = require("./CreditCard");
var OfflinePayment_1 = require("./OfflinePayment");
var OnlinePayment_1 = require("./OnlinePayment");
var PaymentSystemExecutor = /** @class */ (function () {
    //Did not include payment system executor because Didn't use the object like that.
    function PaymentSystemExecutor(payInter) {
        this.payInterface = payInter;
    }
    PaymentSystemExecutor.prototype.execute = function () {
        var payment = this.payInterface;
        payment.getInput();
        //let valid = this.validateInput(payment);     USE Interface!
        var valid = payment.validateInput();
        //update the UI
        if (valid) {
            console.log("Encrypting data.");
            console.log("Payment information is being processed");
        }
        else {
            console.log("Payment information is invalid.");
        }
    };
    return PaymentSystemExecutor;
}());
exports.PaymentSystemExecutor = PaymentSystemExecutor;
var PaymentSystemContext = /** @class */ (function () {
    function PaymentSystemContext(payType) {
        //Creates objects of classes and executes them through above checks and UI updates
        this.type = payType;
        if (this.type == "BankDraft") {
            (new PaymentSystemExecutor(new BankDraft_1.BankDraftPayment)).execute();
        }
        else if (this.type == "CreditCard") {
            (new PaymentSystemExecutor(new CreditCard_1.CreditCardPayment)).execute();
        }
        else if (this.type == "OnlinePayment") {
            (new PaymentSystemExecutor(new OnlinePayment_1.OnlinePayment)).execute();
        }
        else if (this.type == "OfflinePayment") {
            (new PaymentSystemExecutor(new OfflinePayment_1.OfflinePayment)).execute();
        }
    }
    PaymentSystemContext.prototype.getType = function () { return this.type; };
    PaymentSystemContext.prototype.setType = function (type) { this.type = type; };
    return PaymentSystemContext;
}());
exports.PaymentSystemContext = PaymentSystemContext;
