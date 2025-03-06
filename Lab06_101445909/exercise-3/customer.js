var Customer2 = /** @class */ (function () {
    function Customer2(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Customer2.prototype.greeter = function () {
        console.log("Hello, ".concat(this.firstName, " ").concat(this.lastName, "!"));
    };
    return Customer2;
}());
var customer2 = new Customer2("Jessica", "Lee");
customer2.greeter();
