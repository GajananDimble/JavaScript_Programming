class Demo
{
    
    constructor(No1,No2)
    {
        this.No1=No2;
        this.No2=No1;
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