var Product = /** @class */ (function () {
    function Product(customerno, cname, clocation) {
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
    Product.prototype.showDetails = function () {
        console.log("Customer Details  ::   Id : ".concat(this.customerno, ", Name : ").concat(this.cname, ", City : ").concat(this.clocation));
    };
    return Product;
}());
var p1 = new Product();
var p2 = new Product(10256);
var p3 = new Product(10256, "Sam");
p1.showDetails();
p2.showDetails();
p3.showDetails();
