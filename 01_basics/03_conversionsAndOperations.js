let score = "33"

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score);

console.log(typeof valueInNumber);
console.log(valueInNumber);




score = "b33a"

console.log(typeof score);
console.log(typeof(score));

valueInNumber = Number(score);

console.log(typeof valueInNumber);
console.log(valueInNumber);




score = null

console.log(typeof score);
console.log(typeof(score));

valueInNumber = Number(score);

console.log(typeof valueInNumber);
console.log(valueInNumber);




score = true

console.log(typeof score);
console.log(typeof(score));

valueInNumber = Number(score);

console.log(typeof valueInNumber);
console.log(valueInNumber);


// "33" => 33
// "ayu1121" => NaN
// true/false => 1/0
// null -> 0
// undefined -> NaN

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn)

isLoggedIn = "" //false
booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn)

// 1 => true; 0 => false;
// "" => false
// "ans" => true

let someNumber = 455

let stringNumber = String(someNumber);
console.log(stringNumber);
console.log(typeof stringNumber);

// ------------------- operations --------------------- 

let value = 3
let negValue = -value
console.log(negValue);

// console.log(2**2) [+ - * / ** %]

let str1 = "ayush"
let str2 = " haha"

let str3 = str1 + str2
// console.log(str3)

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + "2");

// console.log("1" + 2 + 2);
// console.log((1 + 2) + "2");

// conersion 30 min vid

console.log(+true);
// console.log(true+);  error
console.log(+"");

let num1, num2, num3;

num1 = num2 = num3 = 2 + 2

let gameCounter = 100;
++gameCounter; // prefix / postfix operator
console.log(gameCounter);

// type conversion - https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion


