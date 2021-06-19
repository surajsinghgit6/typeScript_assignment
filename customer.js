"use strict";
exports.__esModule = true;
exports.Customer = void 0;
var Customer = /** @class */ (function () {
    function Customer(customerId, customerName, customerAge, customerDOB, customerMobileNo, customerAdress) {
        this._customerId = customerId;
        this._customerName = customerName;
        this._customerAge = customerAge;
        this._customerDOB = customerDOB;
        this._customerMobileNo = customerMobileNo;
        this._customerAdress = customerAdress;
    }
    Customer.prototype.getCustomerId = function () {
        return this._customerId;
    };
    Customer.prototype.setCustomerId = function (value) {
        this._customerId = value;
    };
    Customer.prototype.getCustomerName = function () {
        return this._customerName;
    };
    Customer.prototype.setCustomerName = function (value) {
        this._customerName = value;
    };
    Customer.prototype.getCustomerAge = function () {
        return this._customerAge;
    };
    Customer.prototype.setCustomerAge = function (value) {
        this._customerAge = value;
    };
    Customer.prototype.getCustomerMobileNo = function () {
        return this._customerMobileNo;
    };
    Customer.prototype.setCustomerMobileNo = function (value) {
        this._customerMobileNo = value;
    };
    Customer.prototype.getCustomerDOB = function () {
        return this._customerDOB;
    };
    Customer.prototype.setCustomerDOB = function (value) {
        this._customerDOB = value;
    };
    Customer.prototype.getCustomerAdress = function () {
        return this._customerAdress;
    };
    Customer.prototype.setCustomerAdress = function (value) {
        this._customerAdress = value;
    };
    return Customer;
}());
exports.Customer = Customer;
