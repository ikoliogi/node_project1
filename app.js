let chalk = require("chalk");

console.log("-------------------------");
let name = 'George';
let a = 5;
let b = '3';

if(typeof a === typeof b){
    if (a == b){
        console.log("to a einai iso me to b");
    } else {
        console.log("to a einai diaforo tou b");
    }
} else {
    console.log("anomoioi typoi metavlhtwn");
}

let x = 'dummy';
switch (x) {
    case "dummy": console.log("i am a dummy variable");
    break;
    case "dummy x2": console.log("2x dummy var");
    break;
    default: console.log("no dummy");
}

console.log(name.toUpperCase());
console.log(name.toLowerCase());
console.log(name.length);
console.log(name[0]);

let myTable = [5,4,3,2];
console.log(myTable[1]);
console.log(myTable.length);

let names = ["George"];
console.log(names[0]);

names.push("Dhmos");
names.push("Annie");

for (let x of names){
    console.log(x);
}

names.splice(1,1);
console.log(names);

let languages = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "C",
  "C++"
];

languages.pop(); //afairei to teleutaio stoixeio tou pinaka
languages.shift(); // afairei to prwto stoixeio tou pinaka
languages.unshift("Python"); //pros8etei sthn prwth 8esh tou pinaka [0]
languages.forEach(lang => { //arrow function idio me languages.forEach(function(lang) { ... });
    console.log("languages:"+lang);
});

let personA = [
    'Dhmos',
    'Karadhmos',
    'dhmos@gmail.com',
    'Thessaloniki',
    'Greece'
];

let personB = {
    name:'Dhmos',
    surname:'Karadhmos',
    email:'dhmos@gmail.com',
    city:'Thessaloniki',
    country:'Greece'
}

console.log('To onoma mou einai '+chalk.bgBlue(personB.name)+
    ' to epwnymo mou einai '+chalk.red(personB.surname)+
    ' to email mou einai '+chalk.yellow(personB.email)+
    ' menw sthn '+chalk.cyan(personB.city)+
    ' sthn '+chalk.bgMagenta(personB.country));

