"use strict";
exports.__esModule = true;
exports.Ticket = void 0;
var Ticket = /** @class */ (function () {
    function Ticket(customer, source, destination, dateTime) {
        this._customer = customer;
        this._source = source;
        this._destination = destination;
        this._dateTime = dateTime;
    }
    Ticket.prototype.getCustomer = function () {
        return this._customer;
    };
    Ticket.prototype.setCustomer = function (value) {
        this._customer = value;
    };
    Ticket.prototype.getSource = function () {
        return this._source;
    };
    Ticket.prototype.setSource = function (value) {
        this._source = value;
    };
    Ticket.prototype.getDestination = function () {
        return this._destination;
    };
    Ticket.prototype.setDestination = function (value) {
        this._destination = value;
    };
    Ticket.prototype.getDateTime = function () {
        return this._dateTime;
    };
    Ticket.prototype.setDateTime = function (value) {
        this._dateTime = value;
    };
    return Ticket;
}());
exports.Ticket = Ticket;
