class Customer 
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


let Customerobj1:Customer = new Customer();
let Customerobj2:Customer = new Customer(10256,"Scott");
let Customerobj3:Customer = new Customer(10256, "Scott","Hyd");
 
Customerobj1.showDetails();
Customerobj2.showDetails();
Customerobj3.showDetails();
