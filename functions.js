 
function youRock(name)
{
    return name; 
}

x=youRock("Samar"); 
youRock("Sara"); 
console.log(x)


function square (num1)
{
    return num1 * num1 ; 
}

square(2); 
square(3); 


function cube(pwerThree)
{
    return pwerThree ^ 3;
}
cube(2);
cube(3); 



function toTheFourth(numPower4)
{
    return numPower4 ^ 4;
}
toTheFourth(2);
toTheFourth(3);



// console.log(x); 

// Write a function that will add, subtract, multiply or divide two numbers and return the answer 
// ```js

// let opr = ["*", "/", "+", "-"]

function add (num1, num2, operator)
{
   
  if(typeof(num1) !== Number || typeof (num2) != Number)
  {
         return "calculator only accepts numbers";

     }

    
    else if  (operator == "*")
    {
    return num1 * num2 ; 
    }
    else if (operator == "/")
    {
        return num1 / num2;
    }
    else if (operator == "+")
    {
        return num1 + num2;
    }
    else if (operator == "-")
    {
        return num1 - num2 ; 
    }
    else if (operator == "*" || operator !== "/" || operator !== "-" !== operator !== "+")
    {
        return "calculator can only add, subtract, divide, or multiply"; 
    }
    
    
}


// calculator(1, 2, "add") // should return 3
add(1,2,"+"); 
// calculator(1, 2, "subtract") // should return -1
add(1,2,"-");
// calculator(1, 2, "divide") // should return .5
add(1,2,"/")
// calculator(1, 2, "multiply") // should return 2
add(1,2,"*")
// calculator(1, 2, "something else") // should return "calculator can only add, subtract, divide, or multiply
add(1,2,"sadaskd")
// calculator("cat", 2, "add") // should return "calculator only accepts numbers"




function fizzBuzz(num)
{
     if (num %3 == 0 && num %5 == 0)
    {
        return "FizzBuzz"; 
    }
    else if(num %3 ==0)
    {
        return "Fizz";

    }
    else if (num %5 ==0)
    {
        return "Buzz"
    }
    
    else {
        return num; 
    }
}
    c=fizzBuzz(15); 


  


    function rainDrop(num4)
{
    let x = "";

    if(num4 %3 == 0)
    {
    x +=  "Pling" 
    // return x;  
    }

    if(num4 %5 == 0)
    {
        x += "Plang"
        // return x; 
    }

    if(num4 %7 ==0)
    {
        x += "Plong"
        // return x;
    }
    if(num4%7 !== 0 || num4 %3 !==0 || num4%5 ==0 )
    {
        x += num4
    }
    return x; 

}



fun1=rainDrop(28) // Plong
fun2=rainDrop(1755) // PlingPlang
fun3=rainDrop(34) // 34

// I DONT KNOW WHY ITS PRINTTING THE INPUT
console.log(fun1 + "----" + fun2 + "----" + fun3)
  
