 
function youRock(name)
{
    return name; 
}

youRock("Samar"); 
youRock("Sara"); 


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
    if(operator !== "*" || operator !== "/" || operator !== "-" !== operator !== "+")
    {
        return "calculator can only add, subtract, divide, or multiply"; 
    }
    else if(typeof num1 !== "Number" && typeof num2 !== "Number")
    {
        return "calculator only accepts numbers";

    }
    else if(operator == "*")
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


