function calculator(operator)
{
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2= parseFloat(document.getElementById("num2").value);
    let result;
    // if(isNaN(num1)||isNaN(num2))
    // {
    //     alert("pLease Enter the Valid number!!!");
    //     return result;
    // }
        if(operator==="+")
        {
            result = num1+num2;
            // alert("the result is: "+ result);
        }
         else if(operator==="-")
        {
            result = num1-num2;
            // alert("the result is: "+ result);
        }
        else if(operator==="*")
        {
            result = num1*num2;
            // alert("the result is: "+ result);
        }
        else if(operator==="/")
        {
            result = num1/num2;
            // alert("the result is: "+ result);
        }
        return result;



        
        
              
}