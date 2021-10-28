"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreditCardPayment = void 0;
var readlineSync = require("readline-sync");
var CreditCardPayment = /** @class */ (function () {
    function CreditCardPayment() {
        this.creditCardName = '';
        this.creditCardExpiration = "";
        this.creditCardNumber = "";
    }
    CreditCardPayment.prototype.getcreditCardName = function () { return this.creditCardName; };
    CreditCardPayment.prototype.getcreditCardExpiration = function () { return this.creditCardExpiration; };
    CreditCardPayment.prototype.getcreditCardNumber = function () { return this.creditCardNumber; };
    CreditCardPayment.prototype.setcreditCardName = function (ccName) { this.creditCardName = ccName; };
    CreditCardPayment.prototype.setcreditCardExpiration = function (ccExp) { this.creditCardExpiration = ccExp; };
    CreditCardPayment.prototype.setcreditCardNumber = function (ccNum) { this.creditCardNumber = ccNum; };
    CreditCardPayment.prototype.getInput = function () {
        console.log("Enter Credit Card information below.");
        this.setcreditCardName(readlineSync.question("Credit Card Name: "));
        this.setcreditCardNumber(readlineSync.question("Credit Card Number: "));
        this.setcreditCardExpiration(readlineSync.question("Credit Card Expiration: "));
    };
    CreditCardPayment.prototype.validateInput = function () {
        var valid = /^[\w.' ]+$/.test(this.getcreditCardName()) && /\d{15,16}/.test(this.getcreditCardNumber()) && /\d\d\/\d\d/.test(this.getcreditCardExpiration());
        return valid;
    };
    return CreditCardPayment;
}());
exports.CreditCardPayment = CreditCardPayment;
