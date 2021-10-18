console.log("fkawkbaj");
console.log([1,2,3]);
console.table({a:1, b:293});

console.error('this is error message')
console.warn('this is warning message')

// single line comment

/*
multiline
comment
*/

// Variables declaration
// var, let, const

var namee = "John";
    surname = "Terry";

console.log(namee, surname)

const nameee = "ISrafil"
console.log(nameee)
// nameee = "sfnkneslf"        //illegal
// console.log(nameee)

let person = {
    namee:"Kaflesnf",
    age: 33
}

console.table(person);

// variable types
const sp = "IS";
const age = 321;
const flag = false;
const car = null;

const arr = [1, 2, 3]       // array
const dict = {
    city: "Balkan",
    address: "Fidel Castro str 21"
}                           // object literal

// -------------------------------------------------
//  TYPE conversions

let val;
console.log(val);       // returns undefined

// 1
val = String(55);
console.log(val)

val.toString;
console.log(val)

val = Number('33');
console.log(typeof val);            // or typeof(val)

// Template literals

const nameeee= "Ali";
const agee = 21;
const job = "nototo";

let html

// html = '<ul><li>' + nameeee + '</li><li>'+ agee +'</li><li>'+ job +'</li></ul>';
// console.log(html);
// document.write(html)

html = `
    <ul>
        <li>Name: ${nameeee}</li>
        <li>Age: ${agee}</li>
        <li>Job: ${job}</li>
    </ul>
`

document.write(html)

// Conditional statements

const a = prompt();

if(a > 50){
    console.log("U r great");
} else if(a > 25) {
    console.log("young");
} else {
    console.log("bababy");
}

