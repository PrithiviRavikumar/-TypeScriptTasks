var Product = /** @class */ (function () {
    function Product(productId) {
        this.productId = 0;
        this.productName = "";
        this.unitPrice = 0;
        this.qty = 0;
        this.productId = productId;
    }
    Object.defineProperty(Product.prototype, "ProductId", {
        get: function () {
            return this.productId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "ProductName", {
        get: function () {
            return this.productName;
        },
        set: function (value) {
            this.productName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "UnitPrice", {
        get: function () {
            return this.unitPrice;
        },
        set: function (value) {
            this.unitPrice = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "Quantity", {
        get: function () {
            return this.qty;
        },
        set: function (value) {
            this.qty = value;
        },
        enumerable: false,
        configurable: true
    });
    return Product;
}());
var productObj = new Product(60);
productObj.ProductName = "chocolate"; //set 
productObj.Quantity = 5;
productObj.UnitPrice = 400;
console.log("Product Id: " + productObj.ProductId); // get
console.log("Product Name: " + productObj.ProductName); // get
console.log("Product Quantity: " + productObj.Quantity); // get
console.log("Product UnitPrice: " + productObj.UnitPrice); // get
