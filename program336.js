function Addition(iNo1,iNo2)
{
    let iAns=0;
    iAns=iNo1+iNo2;
    return iAns;
}


function main()
{
    let ivalue1=10,ivalue2=11;
    let iRet=0;
    
    iRet=Addition(ivalue1,ivalue2);

    console.log("Addition is:",iRet);
}

main();    //OS