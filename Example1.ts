class Product 
{
    public customerno:number = 0;
    public cname:string  = "";
    public clocation:string  = "";

    constructor(customerno:number = 0, cname:string = "",clocation:string ="")
    {
        this.customerno = customerno;
        this.cname = cname;
        this.clocation = clocation;
    }

    public showDetails():void
    {
        
        console.log(`Customer Details  ::   Id : ${this.customerno}, Name : ${this.cname}, City : ${this.clocation}`);
      
    }   
}


let p1:Product = new Product();
let p2:Product = new Product(10256);
let p3:Product = new Product(10256, "Sam");
 
p1.showDetails();
p2.showDetails();
p3.showDetails();
