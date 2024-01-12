/*WAP in Javascript to check whether the number is prime or not using break statement. 
Also do the same program using function as well. */
/*
var num, i, check=0;
num=10;
for(i=2; i<num; i++)
{
  if(num%2==0)
  {
    check++;
    break;
  }
}
if(check==0)
  console.log(num + " is a Prime Number");
else
  console.log(num + " is not a Prime Number");*/

/*using function */

function checkForPrime(n){

    if(n==1){
        return false;

    }else if(n==2){
        return true;
    }else{
        for(var x = 2; x<n; x++)
        {
            if(n%x==0){
                return false;
            }
        }
        return true;
    }

}
console.log(checkForPrime(9));