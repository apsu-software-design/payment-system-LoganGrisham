"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OfflinePayment = void 0;
var readlineSync = require("readline-sync");
var OfflinePayment = /** @class */ (function () {
    function OfflinePayment() {
        this.name = '';
        this.address = "";
    }
    OfflinePayment.prototype.getName = function () { return this.name; };
    OfflinePayment.prototype.getAddress = function () { return this.address; };
    OfflinePayment.prototype.setName = function (name) { this.name = name; };
    OfflinePayment.prototype.setAddress = function (addr) { this.address = addr; };
    OfflinePayment.prototype.getInput = function () {
        console.log("Enter User information below.");
        this.setName(readlineSync.question("User Name: "));
        this.setAddress(readlineSync.question("User Current Address: "));
    };
    OfflinePayment.prototype.validateInput = function () {
        var valid = /^[\w.' ]+$/.test(this.getName()) && /^[\w.' ]+$/.test(this.getAddress());
        return valid;
    };
    return OfflinePayment;
}());
exports.OfflinePayment = OfflinePayment;
