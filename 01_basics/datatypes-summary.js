// primitive : call by value

// 7 types : String, Number, Boolean, null, undefined, Symbol(unique bnane ke liye), BigInt


// non-primitive : call by reference

// Array, Objects, Functions

// JS dynamically typed/ Statically typed -> dynamically typed cuz datatype is assigned
// dynanically at the time of compilation

const score = 100;
// const score:number = 100 (TYPESCRIPT)
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail; //undefined hogi by default

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id == anotherId); // values may be same par alag alg datatypes hai

const bigNumber = 346655148446644n //n laga do last mein


const heros = ["shaktiman", "naagraj", "doga"];

let myObj = {
    name: "Ayush",
    age: 22,
}

const myFunction = function(){
    console.log("Ayush");
}

console.log(typeof bigNumber);

// undeclared - undefined
// null - object
// non-primitive - object datatype -> (funtion ka object function hota hai e.g.)





