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


/*********************************************************************************************/
/**********************COMPLETE COURSE OF JAVASCRIPT************************************* */


/**************************
 * VARIABLES AND DATA TYPES*/
 
/*var firstName = 'John';
console.log(firstName);

var lastName = 'Smith';
var age = 28;

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

//variables naming rules
var _3year = 3;
var JohnMark = 'John and Mark';
var if = 23;*/


/************************************************** */
/*Varible mutation and type coercion*/

/*var firstName = 'John';
var age = 28;

//types coercion
console.log(firstName +' '+ age);

var job, isMarried;
job = 'teacher';
isMarried = false;
console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

// variable mutation//// we don't have to type var again because the variable was already declare.
age = 'twenty eight';
job = 'driver';
alert(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

var lastName = prompt('What is his last Name?');
console.log(firstName + ' ' + lastName);*/



/*********************************************
 * BASIC OPERATOR
 */
//you can declare a variable number just one time and then apply 
//the name of the variable to the data that ypoy want to assigment and
//if you want to change de value just change the first variable no the
 //all data type of that variable of the entire page.

/*var year, yearJonh, yearMark;
year = 2018;
ageJohn = 28;
ageMark = 33;

//math operators
yearJohn = year - ageJohn;
yearMark = year - ageMark;

console.log(yearJohn);
console.log(year + 2);
console.log(year * 2);
console.log(year / 10);

//logical operators
var johnOlder = ageJohn < ageMark;
console.log(johnOlder); 

//typeof operators
console.log(typeof johnOlder);//boolean
console.log(typeof ageJohn);//number
console.log(typeof 'Mark is older that John');//string
console.log(typeof x);//undefine because it's not apply any value;*/



/*********************************
 * operator precedence
 * 

Operator precedence determines the way in which operators are parsed with 
respect to each other. Operators with higher precedence become the operands 
of operators with lower precedence.
 */

 /*var now = 2019;
 var yearJohn = 1989;
 var fullAge = 18;

// multiple operators
 var isFullAge = now - yearJohn >= fullAge;
 console.log(isFullAge);//true

//grouping operator
 let ageJohn = now - yearJohn;
 let ageMark = 35;
 let average = (ageJohn + ageMark) / 2;
 console.log(average);

 //multiples assignments
 let x, y;
 x = y = (3 + 5) * 4 - 6; //8 * 4 - 6 // 32 - 6 // 26
 console.log(x, y); // 26 26

 //more operator
 x *= 2; //it's the same of this // x = x * 2; 
 console.log(x);//52 because the variable name x is already declared.

x += 10; // 62
console.log(x);
x++;// the same if this x = x + 1; x += 1;
console.log(x);// 63 because was delcared already*/



/****************
 * FIRST CODING CHALLENGE
 * calculate the BMI(Body mass index) of two persons
 */

 /*let massJohn = 80;//kg
 let heightJohn = 1.75;//meter
 
 let massMark = 90;
 let heightMark = 1.80;

 let BMIJohn = massJohn / (heightJohn * heightJohn);
 let BMIMark = massMark / (heightMark * heightMark);

 console.log(BMIJohn);
 console.log(BMIMark);

 let aveBMI = BMIJohn > BMIMark;
 
 console.log('Is Mar\'s BMI higher than John\'s? ' + aveBMI);*/



 /**********************************
  * if/else conditions
  */

/*let firstName = 'John';
let civilStatus = 'married';

if (civilStatus === 'married'){
    console.log(firstName + ' is married!!!');// is right because the values to compare are true
}*/

/*let firstName = 'John';
let civilStatus = 'Single';

if (civilStatus === 'married'){
    console.log(firstName + 'is married!!!');// is clear because the values to compare is false
} else {
    console.log(firstName + ' will hopefully marry soon :)');
}
    

var isMarried = true;
if (isMarried){
    console.log(firstName + ' is married!!!');
} else {
    console.log(firstName + ' will hopefully marry soon :)');
}*/


/*let massJohn = 80;//kg
 let heightJohn = 1.75;//meter
 
 let massMark = 120;
 let heightMark = 1.80;

 let BMIJohn = massJohn / (heightJohn * heightJohn);
 let BMIMark = massMark / (heightMark * heightMark);

 if(BMIJohn > BMIMark){
    console.log('Mar\'s BMI higher than John\'s');
 } else {
    console.log('John\'s BMI higher than Mark\'s');
 }*/

 /******************************************
  * booleans logic
  */

  /*let firstName = 'John';
  let age = 20;

  if(age <  13){
    console.log(firstName + ' is a boy.');
  } else if (age >= 13 && age < 20) {
    console.log(firstName + ' is a teenager.');
  } else if (age >= 20 && age < 30){
      console.log(firstName + ' is a young man.');
  } else {
      console.log(firstName + ' is a man.!!');
  }*/

  /********************************************
   * the ternary operator and switch statement
   */

   /*let firstName = 'John';
   let age = 22;

   //ternary operator
 age > 18 ? console.log(firstName + ' drinks beer')//first is the conditional, next is the using if and then else.
 : console.log(firstName + ' drinks juice');

 var drink = age >=18 ? 'beer' : 'juice';//this say is john grater than 18? if is yes the answer is beer then it not.
 console.log(drink);*/

/////////////alternative of the first operator////////////// is the same of the operator above
// if(age >= 18){
//     var drink = 'beer';
// } else {
//     var drink = 'juice';
// }

//switch statement

//    if(age <= 18){
//     console.log(firstName + ' you are apto for drink juice');
//    } else {
//        console.log('You can drink alcohol;');
//    }


//this is an example, this is work ternary operator
/*let firstName = 'John';
let age = 21;

var drink = age >= 18 ? firstName + ' drink beer' : firstName + ' drink juice';
console.log(drink);*/

/****************
 * THIS IS THE SWITCH STATEMENT IS THE SAME LIKE A BOOLEANS STATEMENT
 */

// let firstName = 'John';
// var job = 'instructor';

// switch (job){
//     case 'teacher':
//     case 'instructor'://you can add here another function or job for example
//         console.log(firstName + ' teaches kids how to code.');
//         break;
//     case 'driver':
//         console.log(firstName + ' drives an uber in Lisbon');
//         break;
//     case 'designer':
//         console.log(firstName + ' designs beautiful web side');
//         break;
//         default:
//         console.log(firstName + ' does something else');
// }

let firstName = 'John';
let job = 'motorist';

  if(job === 'mechanic'){
        console.log(firstName + ' teaches kids how to repair.');
  } else if (job === 'driver' || job === 'motorist') {
        console.log(firstName + ' drives an uber in Lisbon.');
  } else if (job === 'designer'){
        console.log(firstName + ' designs beautiful web side.');
  } else {
        console.log(firstName + ' does something else');
  }