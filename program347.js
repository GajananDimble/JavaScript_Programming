
function CheckPerfect(no)
{
    let iCnt=0;
    let iSum=0;
    
    for(iFact=1;iFact<=(no/2);iCnt++)
    {
        if((no%iCnt)==0)
        {
            iSum=iSum+iCnt;        
        }
        if(iSum==no)
        {
            return true;
        }
        else
        {
            return false;
        }
    }
    return iFact;
}
function main()
{
    let iValue=20;
    let bRet=false;

    bRet=CheckPerfect(iValue)

    if (bRet==true)
    {
        
    }
    
    DispalyFactors(iValue);
    
}

main();