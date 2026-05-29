class Demo
{
    
    constructor()
    {
        this.No1=0;
        this.No2=0;
        console.log("Inside constructor");
    }
}
function main()
{
    let Obj=new Demo();

    console.log(Obj.No1);
    console.log(Obj.No2);

}

main();