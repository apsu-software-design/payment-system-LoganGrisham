"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OnlinePayment = void 0;
var readlineSync = require("readline-sync");
var OnlinePayment = /** @class */ (function () {
    function OnlinePayment() {
        this.emailName = '';
        this.emailPassword = "";
    }
    OnlinePayment.prototype.getemailName = function () { return this.emailName; };
    OnlinePayment.prototype.getemailPassword = function () { return this.emailPassword; };
    OnlinePayment.prototype.setemailName = function (emName) { this.emailName = emName; };
    OnlinePayment.prototype.setemailPassword = function (emPass) { this.emailPassword = emPass; };
    OnlinePayment.prototype.getInput = function () {
        console.log("Enter Email information below.");
        this.setemailName(readlineSync.question("Email Account Name: "));
        this.setemailPassword(readlineSync.question("Email Account Password: "));
    };
    OnlinePayment.prototype.validateInput = function () {
        var valid = /^[\w@.]+$/.test(this.getemailName()) && /\w+/.test(this.getemailPassword());
        return valid;
    };
    return OnlinePayment;
}());
exports.OnlinePayment = OnlinePayment;
