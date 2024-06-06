const name = "Ayush"
const repoCount = 50

console.log(name + repoCount + " Value")

console.log(`Hello my name is ${name} and repoCount ${repoCount}`)

const gameName = new String('Ayushkrl9')

console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());

console.log(gameName.charAt(2));
console.log(gameName.indexOf('s'));

const newString = gameName.substring(2, 4); // start and end before (non negative)
console.log(newString);

const anotherString = gameName.slice(-8, 4); // start and end before
console.log(anotherString);

const newStringOne = "     Ayush     "; //trimStart(), trimEnd()
console.log(newStringOne);
console.log(newStringOne.trim()); //removes spaces on front and back both 
// white space and also newline

const url = "htpps://ayush.com/ayush%20kumar"
console.log(url.replace('%20', '-'));

console.log(url.includes('ayush')); //include karta hai ya nahi

console.log(url.split('-'))




