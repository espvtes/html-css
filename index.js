// let sample = 7;
// console.log(typeof sample);
//espected number

// if you want to output the rounded number or entire
//or integer number 
// number you have to do this:

// let sample = 7.77;
// console.log(parseInt(sample));

//espected 7 instead 8 or 7.77

// for get a float number do this:

// let sample = 7.77;
// console.log(parseFloat(sample));

//espected 7.77 actually if you write '7.77' the number like
// this is gonna be 7.77 the same number


// if you want to return the 5 decimals for the number 7.77 do this

// let sample = 7.77;
// console.log(sample.toFixed(5));
//expected 7.77000

// let example = 7.77;
// console.log(example.toFixed(0));
//expected 8

// function myFuncton(a, b){
//     return a * b;
// }
// console.log(myFuncton(5, 7));
//expected 35;

//booleans values

// let example = false;
// console.log(boolean(example));
//expected false

//but
// let example = 888;
// console.log(Boolean(example));
//expected true because he has a value

//ARRAYS JAVASCRIPT 

// let example = [5, 5, 6];
// console.log(example.length)
// expected 3

// let example = [5, 6, 7, 8, 9];
// console.log(example);

//forEach
// let example = [4, 5, 7, 8]
// example.forEach((e)=>{
//     console.log(e);
// })
//expected the entire array


//this is when you apply the same value to other variable
//on array, but for both variables is gonna be the same 
//value if you want to keep the last array en get the value of
//the new array at the same time do this
// let example = ['Dylan', 5, true];
// let example2 = [...example];

// example2.push(11);

// console.log(example);
// console.log(example2);

// //expected 
// ["Dylan", 5, true]
// ["Dylan", 5, true, 11]

//IT'S GONNA BE THE SAME OUTPUT OF THE LAST ONE

// let example =['Dylan', 5, true];

// let example2 = example.map((item)=>{
//     return item;
// })

// example2.push(11);

// console.log(example);
// console.log(example2);

// expected the same value of the last one.

/**********************COMPLETE COURSE OF JAVASCRIPT************************************* */

//FUNDAMENTAL VARIABLES AND DATA TYPES **************************////////////////////////////


var firstName = 'John';
var lastName = 'Smith';
var age = 38;
console.log(firstName + ' ' + lastName + ' '+ 'has ' +' ' + age + ' ' + 'years old');//concatenate the firstName and lastName.
