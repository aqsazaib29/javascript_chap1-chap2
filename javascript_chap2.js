// *******************************************************************************************************************************************

// Practice Exercise 2.1

// let str1 = 'Laurence'; 
// let str2 = "Svekis"; 
// let val1 = undefined;
// let val2 = null;
// let myNum = 1000;

// console.log(`str1 : ${typeof str1}`);
// console.log(`str2 : ${typeof str2}`);
// console.log(`val1 : ${typeof val1}`);
// console.log(`val2 : ${typeof val2}`);
// console.log(`myNum :  ${typeof myNum}`);

// *******************************************************************************************************************************************

// Practice Exercise 2.2

// let name="AQSA ZAIB";
// let age= 30;
// let can_code= true;

// console.log(`Hello, my name is ${name}, I am ${age} years old and I can code JavaScript: 
// ${can_code}.`)

// *******************************************************************************************************************************************

// Practice Exercise 2.3

// a = prompt("Give value for a");
// b = prompt("Give value for b");

// c = (a**2 + b**2)**0.5;
// console.log (c);

// *******************************************************************************************************************************************

// Practice Exercise 2.4

// let a = 4;
// let b = 6;
// let c = 10;

// a+=b ;  
// a/=c ;  
// c%=b ; 

// console.log(a);
// console.log(b);
// console.log(c);

// *******************************************************************************************************************************************

// Chapter project


// 1-  Miles-to-kilometers converter

// let miles = prompt("Give the distance in miles");
// let kilometer = miles/1.609;

// console.log(`The distance of ${kilometer} kms is equal to ${miles} miles`);


// 2- BMI calculator

// let weight_pound = prompt(`Give value of weight in pounds`);
// let height_inch = prompt(`Give value of height in inches`);

// let weight_kilo = weight_pound/2.204;
// let height_centimeter = height_inch*2.54;
// let height_meter = height_centimeter/100;

// let BMI= (weight_kilo / (height_meter**2));

// console.log(`${height_inch} inch is equal to ${height_centimeter} cm. \n${weight_pound} pounds is equal to ${Math.floor(weight_kilo)} kilo`);
// console.log (`BMI is ${BMI}`);

// *******************************************************************************************************************************************

// Self-check quiz

// 1. What data type is the following variable? 
// const c = "5"; 
// String

// 2. What data type is the following variable? 
// const c = 91; 
// Number

// 3. Which one is generally better, line 1 or line 2?
// let empty1 = undefined; //line 1
// let empty2 = null; //line 2
// Line 2

// 4. What is the console output for the following? 
// let a = "Hello";
// a = "world";
// console.log(a);
// world

// 5. What will be logged to the console?
// let a = "world";
// let b = `Hello ${a}!`;
// console.log(b);
// Hello world!

// 6. What is the value of a? 
// let a = "Hello";
// a = prompt("world");
// console.log(a);
// Whatever the user passes in the prompt is set as value of a;

// 7. What is the value of b output to the console? 
// let a = 5;
// let b = 70;
// let c = "5";
// b++;
// console.log(b);
// 71

// 8. What is the value of result?
// let result = 3 + 4 * 2 / 8; 
// 4

// 9. What is the value of total and total2?
// let firstNum = 5;
// let secondNum = 10;
// firstNum++; 6
// secondNum--; 9
// let total = ++firstNum + secondNum;  7+9 = 16
// console.log(total); 16
// let total2 = 500 + 100 / 5 + total--;  500+ 20 +16 =536
// console.log(total2);
// total = 16 and total2 = 536

// 10. What is logged to the console here?
// const a = 5;
// const b = 10;
// console.log(a > 0 && b > 0);      true
// console.log(a == 5 && b == 4);    false
// console.log(true ||false);        true
// console.log(a == 3 || b == 10);   true
// console.log(a == 3 || b == 7);    fasle
  
// *******************************************************************************************************************************************