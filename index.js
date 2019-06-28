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

  /*************************************************************************************
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



///////////////////////booleans as the same
/*let firstName = 'John';
let job = 'motorist';

if(job === 'mechanic'){
        console.log(firstName + ' teaches kids how to repair.');
  } else if (job === 'driver' || job === 'motorist') {
        console.log(firstName + ' drives an uber in Lisbon.');
  } else if (job === 'designer'){
        console.log(firstName + ' designs beautiful web side.');
  } else {
        console.log(firstName + ' does something else');
  }*/

  /////////////////////switch statement

/*let firstName = 'John';
var job = 'instructor';

switch (job){
    case 'teacher':
    case 'instructor'://you can add here another function or job for example
        console.log(firstName + ' teaches kids how to code.');
        break;
    case 'driver':
        console.log(firstName + ' drives an uber in Lisbon');
        break;
    case 'designer':
        console.log(firstName + ' designs beautiful web side');
        break;
    default:
        console.log(firstName + ' does something else');
}

let age = 25;

switch(true){
    case age < 13:
        console.log(firstName + ' is a boy.');
        break;
    case age >= 13 && age < 20:
        console.log(firstName + ' is a teenager.');
        break;
    case age >= 20 && age < 30:
        console.log( firstName + ' is a young man.');
        break;
    default:
        console.log(firstName + ' is a man.');
}*/



/*******************************************
 * truthy and falsy values and equality operator
 */

 // falsy values: undefined, null, '', 0, NaN
 // truthy values: not falsy values

 /*var height;
 height = 23;
 if(height || height === 0){
    console.log('Variable is defined');
 } else {
     console.log('Variable has not been defined');
 }

 //EQUALITY OPERATORS
if(height == '23'){//when the java use the == operator convert the string to the number.
    //because it's not strictly the same value when you use === operator.
    console.log('The == operator does type coercion!.');
}*/



/******************************************
 * examples examples examples examples examples examples
 */
// let citys = [' London', ' habana', ' bogota', ' lima',' madrid'];

// let capitals = '';
// capitals += citys[0] + '<br/>';
// capitals += citys[1] + '<br/>';
// capitals += citys[2] + '<br/>';
// capitals += citys[3] + '<br/>';
// capitals += citys[4] + '<br/>';
// for(i=0; i<citys.length; i++){
//     capitals += citys[i] + '<br/>';
// }
// console.log(capitals);

//////for statement/////////////////////////
/*var peoples = [{name: 'Eva',age: 25},{name: 'Noy',age: 42},{name: 'Ani',age: 18},{name: 'Hayk',age: 25}]

var avgAge = 0;

for (var iter = 0; iter < peoples.length; iter++){
	avgAge += peoples[iter].age;
}

avgAge = avgAge / peoples.length;

console.log(avgAge);*/

//////for/in////////////////////////////

/*var peoples = [{name: 'Eva',age: 25},{name: 'Noy',age: 42},{name: 'Ani',age: 18},{name: 'Hayk',age: 25}]

var avgAge = 0;

for (var e in peoples){
	avgAge += peoples[e].age;
}

avgAge = avgAge / peoples.length;
console.log(avgAge);*/

///for each/////////////////////////////////

/*var peoples = [{name: 'Eva',age: 25},{name: 'Noy',age: 42},{name: 'Ani',age: 18},{name: 'Hayk',age: 25}]

var avgAge = 0;

peoples.forEach((e)=>{
    avgAge += e.age;
})
avgAge = avgAge / peoples.length;
console.log(avgAge);*/

////////while/////////////////////////////
/*var arr = [12, 17.5, 69, 112, -12, 10, -6];
var sum = 0;
var i = 0;

while (arr[i] > 0){
    sum += arr[i];
    i++;
}
console.log(sum);*/

///////do while////////////////////////
/*var i = 0;
var test = '';

do {
    test = '1th iteration';
    i++;
}
while(i < 0)
console.log(i);*/

/*var result = "";
var i = 0;

do {
  i = i + 1;
  result = result + i;
} while (i < 34);

console.log(result);*/
///////////////////////////////////////////////////////////

//////****************CODING CHALLENGE 2 */


// calculate the score of the team
//compare de score of the all teams
//print in the console who is the winner for point
// add another player
// and print in the console whom is the winner when you compare the average of score.
/*let scoreJohn = 89 + 120 + 103;
let scoreMark = 116 + 94 + 123;
let scoreMary = 97 + 134 + 105;

var aveJohn = scoreJohn / 3;
var aveMark = scoreMark / 3;
var aveMary = scoreMary / 3;

console.log(aveJohn, aveMark, aveMary);

if(aveJohn > aveMark & aveJohn > aveMary){
    console.log('John are the winner with ' + aveJohn + ' point of the game');
} else if (aveMark > aveJohn & aveMark > aveMary){
    console.log('Mark are the winner with ' + aveMark + ' point of the game');
} else if (aveMary > aveMark & aveMary > aveJohn){
    console.log('Mary are the winner with ' + aveMary + ' point of the game');
} else {
    console.log('There is a draw');
}*/


/***************************************************************
 ******************** FUNCTIONS
 */
//declare function
//declare name of the function
//declare the argument to pass into the function
// to declare the function block



/** how to calculate the age of the person*/
//you can declare function after add how many persons as you want
/*function calcualteAge(birthYear){
    return 2019 - birthYear;
}
let ageJohn = calcualteAge(1986);
let ageMike = calcualteAge(1978);
let ageJane = calcualteAge(1987);
console.log(ageJohn, ageMike, ageJane);

function yearsUntilRetirement(birthYear, firstName){
    var age = calcualteAge(birthYear);
    var retirement = 65 - age;
    console.log(firstName + ' retires in ' + retirement + ' years');
}
yearsUntilRetirement(1986, 'Yusniel');//Yusniel retires in 32 years.
yearsUntilRetirement(1978, ' John');//John retires in 24 years.
yearsUntilRetirement(1987, ' Mike');//Mike retires in 33 years.*/

//////////////////*************FUNCTIONS STATEMENT AND EXPRESSIONS

//*************FUNCTION DECLARATION
//function whatDoYouDo(job, firstName){}

//*************fUNCTION EXPRESSION//this is a peace of code that produce value
/*var whatDoYouDo = function(job, firstName){
    switch(job){
        case 'teacher':
            return firstName + ' teaches kids how to code.';
        case 'driver':
            return firstName + ' drives a cab in Lisbon.';
        case 'designer':
            return firstName + ' designs beautiful websites';
        default:
            return firstName + ' does something else.';
    }
}
console.log(whatDoYouDo('teacher', 'John'));
console.log(whatDoYouDo('designer', 'Jane'));
console.log(whatDoYouDo('teacher', 'John'));
console.log(whatDoYouDo('retirer', 'Mark'));*/
// console.log(whatDoYouDo)


/********************************
 * DIFFERENT DATA TYPES
 * 
 */

 /*let john = ['John', 'Smith', 1990, 'teacher', 'designer'];
 john.push('blue');//add element to the end of the array.
 john.unshift('Mr.');// add element to the start of the array.
 john.pop();//delete or remove the element to the end of the array;
 john.shift();//delete or remove the first element from array.
 john.indexOf(1990);//They show the position of the element into the array
 console.log(john.indexOf(1990));

 var isTeacher = john.indexOf('designer') === -1 ? 'John is not a designer' : 'John is a designer';
 //is a designer beacuse in into the array 
 console.log(isTeacher);
 console.log(john.indexOf('designer'));//3*/



 /**********************************CODING CHALLENGE 3
  * PRACTICES
  */
            //this is the function for calculate the tips bills
/*function tipCalculator(bill){
    var percentage;
    if(bill < 50){
        percentage = .2;
    }else if (bill >= 50 & bill <=200){
        percentage = .15;

    }else{
        percentage = .1;
    }
    return percentage * bill;
}

            // this is how you get the all tips values at the same time
var bills = [124, 48, 268];//all bills 
var tips = [tipCalculator(bills[0]), //all percentage tips depend of the bills
            tipCalculator(bills[1]), 
            tipCalculator(bills[2])];
            //this is the sum of the all values tips and bills 
var finalValues = [
            bills[0] + tips[0],
            bills[1] + tips[1],
            bills[2] + tips[2],
]
console.log(tips, finalValues);*/

////ternary operator
/*tipCalculator = (bill) => {
    let percentage;
    bill <= 400 ? percentage = .18 : percentage = .2;
    return percentage * bill;
}
console.log(tipCalculator(450));*/
//this was an example...

// tipCalculator = (bill) =>{
//     var percentage;
//     switch(bill < 400){
//         case percentage = .18:
//         return percentage * bill;
//         break;
//         default:
//         return percentage * bill;
//     }
// }
// console.log(tipCalculator(350));


/*******************************************************
 * OBJECT AND PROPERTIES 
 */

 //this is a john object
 /*var john = {
     firstName: 'John',//FIRSTNAME is the key and JOHN is the value.
     lastname: 'Smith',
     birthYear: 1990,
     family: ['Jane', 'Mark', 'Bob', 'Emily'],
     job: 'teacher',
     isMarried: false
 };
 console.log(john.firstName);//access to the specific value from the object
 console.log(john['lastname']);//get access to the object values
 var x = 'birthYear';
 console.log(john[x]);//access the values into the object 
 
 //you can mutate the data
 john.job = 'designer';
 john['isMarried'] = true;
 console.log(john);

//another form of object
//new Object
var jane = new Object();
jane.firstName = 'John';
jane.birthYear = 1990;
jane['lastName'] = 'Smith';
console.log(jane);*/



/***********************************************
 * object and methods
 */

 /*var john = {
     firstName: 'John',//FIRSTNAME is the key and JOHN is the value.
     lastname: 'Smith',
     birthYear: 1990,
     family: ['Jane', 'Mark', 'Bob', 'Emily'],
     job: 'teacher',
     isMarried: false,
     calcAge: function(birthYear){//calculate the age into the object
        return 2018 - birthYear;
     }
 }
 console.log(john.calcAge(1990));*/


 /*another form to calculate the age and get access to change the form to get the 
 birthYear of john*/
 /*var john = {
    firstName: 'John',
    lastname: 'Smith',
    birthYear: 1986,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false,
    calcAge: function(){
       return 2019 - this.birthYear;//this is ('john'= like 'john.birthYear) as an object access, this is the key word for no write into the function value or properties
    }
}
console.log(john.calcAge());//this is empty because you use the key word this.
john.age = john.calcAge();//add the properties to the john object*/

//another for to add the properties to the current object of the function
/*var john = {
    firstName: 'John',
    lastname: 'Smith',
    birthYear: 1986,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false,
    calcAge: function(){
     this.age = 2019 - this.birthYear;
}
}
john.calcAge();
console.log(john)*/

//other example for calculate the age
 /*var firstName = 'Yusniel';
 var birthYear = 1986;

 calcAge = (birthYear) =>{
    return 2019 - birthYear;
 }
 console.log(firstName + ' has ' + calcAge(1986) + ' years old.');*/




//////////***************** */CODING CHALLENGE 4****/////////////
//calculate the BMI in object data type
/*var john = {
    firstName: 'John',
    lastName: 'Smith',
    mass: 89,
    height: 1.75,
    calcBMI: function(){
        this.bmi = this.mass / (this.height * 2)
        return this.bmi;
    }
}

var mike = {
    firstName: 'Mike',
    lastName: 'Steve',
    mass: 99,
    height: 1.87,
    calcBMI: function(){
        this.bmi = this.mass / (this.height * 2);
        return this.bmi;
    }
}
//other form to calculate the bmi into the conditional operator 
if (john.calcBMI() > mike.calcBMI()) {
    console.log(john.firstName + ' ' + john.lastName + ' has a higher BMI of ' + john.bmi);
} else if (mike.bmi > john.bmi) { 
    console.log(mike.firstName + ' ' + mike.lastName + ' has a higher BMI of ' + mike.bmi);
} else{
    console.log('They have the same BMI');
}*/



/*********************************************
 * loop and iteration
 */
//i = 0; i < 10 true , log i console, i++
//i = 1; 1 < 10 true, log i console, i++
//...
//i = 9; 9 < 10 true, log i console, i++
//i = 10; 10 < 10 false, exit the loop


///////THE FOR LOOP
//count from 0 to 9 loop iteration
/*for (var i = 0; i<11; i++){
    console.log(i);
}*/
//expected 0,1,2,3,4,5,6,7,8,9

//for count from 1 to 10 do this
/*for (var i = 1; i <= 10; i++){
    console.log(i);
}*/
//expected 1,2,3,4,5,6,7,8,9,10

//increase the value by 2 
/*for (var i = 1; i <= 10; i+=2){
    console.log(i);
}*/
//expected 1,3,5,7,9



//print all the value to the console using the for loop 
/*var john = ['John', 'Smith', 1990, 'designer', false];
for(var i =0; i< john.length; i++){
    console.log(john[i]);
}*/



/////THE WHILE LOOP

//using while loop. The different between for and while loop is:
//in while loop we use the conditional part only
/*var i = 0;
while (i < john.length){
    console.log(john[i]);
    i++
}*/

//continue and break statements
// this is going to skip the numbers and booleans, everything that it's not a string
var john = ['John', 'Smith', 1990, 'designer', false, 'blue'];
for(var i =0; i< john.length; i++){
    if(typeof john[i] !== 'string') continue;
    console.log(john[i]);
}

