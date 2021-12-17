class Product 
{
    private readonly productId:number = 0;
    private productName:string  = "";
    private unitPrice:number = 0;
    private qty:number = 0;

    public get ProductId():number
    {
        return this.productId;
    }
   
    public get ProductName():string
    {
        return this.productName;
    }

    public set ProductName(value:string)
    {
        this.productName = value;
    }
    public get UnitPrice():number
    {
        return this.unitPrice;
    }

    public set UnitPrice(value:number)
    {
        this.unitPrice = value;
    }
    public get Quantity():number
    {
        return this.qty;
    }

    public set Quantity(value:number)
    {
        this.qty = value;
    }

    constructor(productId:number)
    {
        this.productId =productId;
    }
}

let productObj:Product = new Product(60);

productObj.ProductName = "chocolate"; //set 
productObj.Quantity=5;
productObj.UnitPrice=400;
console.log("Product Id: " + productObj.ProductId);  // get
console.log("Product Name: " + productObj.ProductName) ;  // get
console.log("Product Quantity: " + productObj.Quantity) ;  // get
console.log("Product UnitPrice: " + productObj.UnitPrice) ;  // get