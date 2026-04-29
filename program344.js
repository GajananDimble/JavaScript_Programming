
function DispalyFactors(no)
{
    let iCnt=0;
    
    for(iFact=1;iFact<=(no/2);iCnt++)
    {
        if((no%iCnt)==0)
        {
            console.log(iCnt)
        }
    }
    return iFact;
}
function main()
{
    let iValue=20;
    
    DispalyFactors(iValue);
    
}

main();