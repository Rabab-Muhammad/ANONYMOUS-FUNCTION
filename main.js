"use strict";
//                            Task 6
Object.defineProperty(exports, "__esModule", { value: true });
//6) Anonymous functions:
//• Assign a function expression to a variable, with one parameter that outputs the provided 
//  argument to the console.
//• Pass an argument into the function.
//• Create the same function as a normal function declaration
// Anonymous function assigned to a variable
let myFunction = function (str) {
    console.log(str);
};
// Calling the anonymous function with an argument
myFunction("Hello!");
// Normal function declaration
function myFunction1(str) {
    console.log(str);
}
// Calling the normal function with an argument
myFunction1("Hello, world!");
