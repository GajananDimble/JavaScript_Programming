class Demo
{
    
    constructor(A,B)     //Parametrised
    {
        this.No1=A;
        this.No2=B;
        console.log("Inside constructor");
    }
}
function main()
{
    let Obj=new Demo(10,11);

    console.log(Obj.No1);
    console.log(Obj.No2);


}

main();