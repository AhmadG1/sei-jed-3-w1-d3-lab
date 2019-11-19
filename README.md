### Lab: Functions

Create a file named `functions.js`.

1.  Define a `youRock` function that accepts a string argument of a name and returns a string using that name.
```js

function youRock(name){
    return name;
}
console.log(youRock('Samar')); // 'You rock Samar!'
console.log(youRock('Sara')); //'You rock Sara!'
```

2.  Define a `square` function that accepts a number argument and returns that number multipled by itself.
```js

function square(number){
    return number*number;
}
console.log(square(2)); // 4
console.log(square(3)) // 9
```

3.  Define a `cube` function that accepts a number argument and returns that number raised to the third power.
```js
function cube(number){
    return Math.pow(number, 3);
}
console.log(cube(2)); // 8
console.log(cube(3)); // 27
```

4.  Define a `toTheFourth` function that accepts a number argument and returns that number raised to the fourth power.
```js

function toTheFourth(number){
    return Math.pow(number, 4);
}
console.log(toTheFourth(2)); // 16
console.log(toTheFourth(3)); // 81
```

#### Extra Practice

If you finish the Lab, try this challenge.

Write a function that will add, subtract, multiply or divide two numbers and return the answer 
```js

function calculator(num1,num2,math){
    if (isNaN(num1) || isNaN(num2)){
        return "calculator only accepts numbers";
    }else if (math === "add"){
        return num1 + num2;
    }else if (math === "subtract"){
        return num1 - num2;
    }else if (math === "multiply"){
        return num1 * num2;
    }else if (math === "divide"){
        return num1/num2;
    }else if (math === "something else"){
        return "calculator can only add, subtract, divide, or multiply";
    }
}
console.log(calculator(1, 2, "add")); // should return 3
console.log(calculator(1, 2, "subtract")) // should return -1
console.log(calculator(1, 2, "divide")) // should return .5
console.log(calculator(1, 2, "multiply")) // should return 2
console.log(calculator(1, 2, "something else")) // should return "calculator can only add, subtract, divide, or multiply
console.log(calculator("cat", 2, "add")) // should return "calculator only accepts numbers"
```

### Lab: FizzBuzz Function

Write a function that accepts an argument of a number

If it is a multiple of 3, return “Fizz” instead of the number.

If it is a multiple of 5, return “Buzz” instead of the number.

If it is a multiple of both 3 and 5, return “FizzBuzz” instead of the number.

Otherwise, return the number

```js

function fizzBuzz(number){
    var a = ""; 
    if (number % 3 === 0 && number % 5 === 0 ){
        a = "FizzBuzz"; 
    }else if (number % 3 === 0){
        a = "Fizz";
    }else if (number % 5 === 0){
        a = "Buzz";
    }else {
        a = number;
    }
    return a;
}
console.log(fizzBuzz(3)); // Fizz
console.log(fizzBuzz(15)); // FizzBuzz
console.log(fizzBuzz(7)); // 7
```

### Lab: RainDrop Function

Write a function that accepts an argument of a number

If the number contains 3 as a factor, output 'Pling'.

If the number contains 5 as a factor, output 'Plang'.

If the number contains 7 as a factor, output 'Plong'.

If the number does not contain 3, 5, or 7 as a factor, output the number as a string.

```js
function rainDrop(number){
    var a = "";
    if (number % 3 == 0){
        a += "Pling";
    }
    if (number % 5 == 0){
        a += "Plang";
    }
    if (number % 7 == 0){
        a += "Plong"
    }
    /*if ((number % 7 != 0) || (number % 5 != 0) || (number % 3 != 0)){
        a = "The Number as a string"
    }*/
    return a;
}

console.log(rainDrop(28)); // Plong
console.log(rainDrop(1755)); // PlingPlang
console.log(rainDrop(34)); // 34
```
