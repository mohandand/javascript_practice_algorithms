let isPrime = (n) => {
    if(!Number.isInteger(n) || n<2)
    {
        return false;
    }
    if(n==2)
    {
        return true;
    }

    for(i=3 ; i<= n-1 ;i++)
    {
        if(n%i===0)
        {
            return false;
        }
    }

    return true;
}

for(let i=0;i<30;i++)
{
    if(isPrime(i)==true);
    {
        console.log(isPrime(i));
    }
}