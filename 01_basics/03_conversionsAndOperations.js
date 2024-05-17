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

