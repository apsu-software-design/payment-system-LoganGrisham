"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BankDraftPayment = void 0;
var readlineSync = require("readline-sync");
var BankDraftPayment = /** @class */ (function () {
    function BankDraftPayment() {
        this.bankDraftName = '';
        this.bankAccountNumber = "";
        this.bankRoutingNumber = "";
    }
    BankDraftPayment.prototype.getBankDraftName = function () { return this.bankDraftName; };
    BankDraftPayment.prototype.getBankAccountNumber = function () { return this.bankAccountNumber; };
    BankDraftPayment.prototype.getBankRoutingNumber = function () { return this.bankRoutingNumber; };
    BankDraftPayment.prototype.setBankDraftName = function (bdName) { this.bankDraftName = bdName; };
    BankDraftPayment.prototype.setBankAccountNumber = function (bAccNum) { this.bankAccountNumber = bAccNum; };
    BankDraftPayment.prototype.setBankRoutingNumber = function (bRoutNum) { this.bankRoutingNumber = bRoutNum; };
    BankDraftPayment.prototype.getInput = function () {
        console.log("Enter bank information below.");
        this.setBankDraftName(readlineSync.question("Bank Draft Name: "));
        this.setBankAccountNumber(readlineSync.question("Bank Account Number: "));
        this.setBankRoutingNumber(readlineSync.question("Bank Routing Number: "));
    };
    BankDraftPayment.prototype.validateInput = function () {
        var valid = /^[\w.' ]+$/.test(this.getBankDraftName()) && /\d{9}/.test(this.getBankAccountNumber()) && /\d{6,12}/.test(this.getBankRoutingNumber());
        return valid;
    };
    return BankDraftPayment;
}());
exports.BankDraftPayment = BankDraftPayment;
