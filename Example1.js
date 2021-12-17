var Customer = /** @class */ (function () {
    function Customer(customerno, cname, clocation) {
        if (customerno === void 0) { customerno = 0; }
        if (cname === void 0) { cname = ""; }
        if (clocation === void 0) { clocation = ""; }
        this.customerno = 0;
        this.cname = "";
        this.clocation = "";
        this.customerno = customerno;
        this.cname = cname;
        this.clocation = clocation;
    }
    Customer.prototype.showDetails = function () {
        console.log("Customer Details  ::   Id : ".concat(this.customerno, ", Name : ").concat(this.cname, ", City : ").concat(this.clocation));
    };
    return Customer;
}());
var Customerobj1 = new Customer();
var Customerobj2 = new Customer(10256, "Scott");
var Customerobj3 = new Customer(10256, "Scott", "Hyd");
Customerobj1.showDetails();
Customerobj2.showDetails();
Customerobj3.showDetails();
