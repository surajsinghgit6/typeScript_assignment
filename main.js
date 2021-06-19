"use strict";
exports.__esModule = true;
var customer_1 = require("./customer");
var Main = /** @class */ (function () {
    function Main() {
        this.customer = [];
        this.ticket = [];
    }
    Main.prototype.addCustomer = function () {
        this.customer.push(new customer_1.Customer(1, "suraj", 25, new Date("October 06, 1996"), 1234567890, "Ranchi"));
        var customerObj = new customer_1.Customer();
        customerObj.setCustomerId(2);
        customerObj.setCustomerName("Gajre");
        customerObj.setCustomerAge(25);
        customerObj.setCustomerDOB(new Date("July 05,1996"));
        customerObj.setCustomerMobileNo(6567727283);
        customerObj.setCustomerAdress("Pune");
        this.customer.push(customerObj);
        //   console.table(this.customer);
    };
    Main.prototype.getCustomerByCity = function (city) {
        var result = this.customer.filter(function (data) { return data.getCustomerAdress() === city; });
        if (result.length) {
            console.table(result);
        }
        else {
            console.log("Result not found");
        }
    };
    Main.prototype.getCustomerById = function (id) {
        var result = this.customer.filter(function (data) { return data.getCustomerId() === id; });
        if (result.length) {
            console.table(result);
        }
        else {
            console.log("Result not found");
        }
    };
    Main.prototype.insertionSort = function (inputArr) {
        var n = inputArr.length;
        for (var i = 1; i < n; i++) {
            var current = inputArr[i];
            var j = i - 1;
            while (j > -1 &&
                current.getCustomerName() < inputArr[j].getCustomerName()) {
                inputArr[j + 1] = inputArr[j];
                j--;
            }
            inputArr[j + 1] = current;
        }
        return inputArr;
    };
    Main.prototype.checkCustomerValid = function (id, phNo) {
        var filterCustomer = this.customer.filter(function (customer) {
            return customer.getCustomerId() === id &&
                customer.getCustomerMobileNo() === phNo;
        });
        return filterCustomer.length;
    };
    Main.prototype.checkAddressValid = function (source, destination) {
        return source !== destination;
    };
    Main.prototype.checkDateValid = function (date) {
        var currentDate = new Date();
        var maxFutureDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, currentDate.getDate());
        var userinputDate = new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1);
        // console.log(currentDate)
        // console.log(maxFutureDate)
        // console.log(userinputDate)
        return userinputDate > currentDate && userinputDate <= maxFutureDate;
    };
    Main.prototype.bookTicket = function (id, phNo, source, destination, date) {
        var isCustomerValid = this.checkCustomerValid(id, phNo);
        if (isCustomerValid) {
            var isAddressValid = this.checkAddressValid(source, destination);
            if (isAddressValid) {
                var isDateValid = this.checkDateValid(date);
                if (isDateValid) {
                    console.log("ticket confirmed");
                }
                else {
                    console.log("Date is invalid");
                }
            }
            else {
                console.log("Source and Destination can not be same");
            }
        }
        else {
            console.log("Customer Not found");
        }
    };
    Main.prototype.getAllCustomer = function () {
        var result = this.insertionSort(this.customer);
        console.table(result);
    };
    return Main;
}());
var main = new Main();
main.addCustomer();
// main.getCustomerByCity('Ranchi');
// main.getCustomerById(2);
// main.getAllCustomer();
main.bookTicket(1, 1234567890, "Ranchi", "Pune", new Date("December, 25, 2020"));
