
////////////Hanin Nouh

function youRock(name){
    return "You rock "+name;
}

youRock('Samar') // 'You rock Samar!'

/////////////////

function square (num){
    return num*num;
} 

square(2) // 4

////////////////

function cube (num) {
    return num*num*num;
}
cube(2); // 8

////////////////

function toTheFourth (num){
    return num*num*num*num;
}
toTheFourth(2) // 16

///////////////

function calculator(num1,num2,operation){
  
    var checkNum1 = isNaN(num1);
    var checkNum2 = isNaN(num2);

    if(checkNum1===true||checkNum2===true){
        return "calculator only accepts numbers";
    }

    else if(operation==="add"){
        return num1+num2;
    }
    else if(operation==="subtract"){
        return num1-num2;
    }
    else if(operation==="divide"){
        return num1/num2;
    }
    else if(operation==="multiply"){
        return num1*num2;
    }
    else if (operation==="something else"){
        return "calculator can only add, subtract, divide, or multiply";
    }
}

calculator(1, 2, "add"); // should return 3 
calculator(1, 2, "subtract"); // should return -1
calculator(1, 2, "divide") ;// should return .5
calculator(1, 2, "multiply"); // should return 2
calculator(1, 2, "something else"); // should return "calculator can only add, subtract, divide, or multiply
calculator("cat", 2, "add") ;// should return "calculator only accepts numbers"

////////////////

function fizzBuzz(num){
if ((num%3===0)&&(num%5===0)){
    return "FizzBuzz"; 
}
else if (num%3===0){
    return "Fizz" ;
}
else if (num%5===0){
    return "Buzz"; 
}
else 
{
    return num
}
}

fizzBuzz(3) // Fizz
fizzBuzz(15) // FizzBuzz
fizzBuzz(7) // 7

/////////////////

function rainDrop(num){
    var result="";
    if(num%3===0){
         result+='Pling';
    }
    if(num%5===0){
         result+='Plang';
    }
    if(num%7===0){
         result+='Plong';
    }
    else{
         result+=num;
    }
    return result;
}

rainDrop(28) // Plong
rainDrop(1755) // PlingPlang
rainDrop(34) // 34
