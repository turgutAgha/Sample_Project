// Normal function

// let func1 = function(arg1, arg2) {
//     return "Hello World";
// }

// // Arrow function

// let func2 = (arg1, arg2) => {
//     return "Hello World";
// }

// let summ1 = function(a, b) {
//     return a + b;
// }

// const c1 = summ1(123, 2341);
// console.log(c1);

// let summ2 = (a, b) => {
//     return a + b;
// }

// const c2 = summ2(123, 2341);
// console.log(c2);

// task1

// let age = prompt("enter your age: ", 22);       // prompt is used for input. 
//                                                 // first is message, second is default

// let welcome_message = (age) => {return (age < 21) ? "You are young" : "You are older";}

// console.log(welcome_message(age));

// task2

// function ask(question, yes, no){
//     if (confirm(question)) yes();
//     else no();
// }

// ask(
//     "are you a student?",
//     function(){ console.log("you confirm")},
//     function(){ console.log("you deny")}
// );

// let ask = (question) => {
//     return (confirm(question)
//     ? "you confirm"
//     : "you deny"
//     )
// } 


// let ask = (question, yes, no) => {
//     confirm(question) ? yes() : no();
// }

// ask(
//     "are you a student?",
//     () => { console.log("you confirm that you are student")},
//     () => { console.log("you deny that you are student")}
// )


// task 3

let countries = [
    {
        name: "Azerbaijan",
        population: 9100000,
        cities: ['Baku', 'Sumgait', 'Shusha']
    },
    {
        name: "Turkey",
        population: 82000000,
        cities: ['Istanbul', 'Ankara', 'Izmir']
    },
    {
        name: "Uzbekistan",
        population: 22000000,
        cities: ['Bukhara', 'Samarkant', 'Khiva']
    }
]

// countries.forEach((country) => {
//     console.warn(country.name);
//     // for(c in country.cities){
//     //     console.log(country.cities[c])
//     // }
//     country.cities.forEach((city) => {
//         console.log(city)
//     })

// })

// task 2

// const newcities = countries
//     .map( (country) => {                    // for getting cities of all
//         return country.cities               // countries in different arrays
//     })
//     .flat()                                 // for merging these arrays
//     .filter( (city) => {                    // for getting only city names
//         return city.length == 5;            // with the length 5
//     })

// console.log(newcities)

// task 3

const teams = {
    "A": [
        {team: "Argentina", points: 9, ave: +4, position: 1},
        {team: "Algeria", points: 4, ave: +2, position: 2},
        {team: "Gibraltar", points: 2, ave: -4, position: 3},
        {team: "Mongolia", points: 0, ave: -14, position: 4}
    ],
    "B": [
        {team: "Equador", points: 9, ave: +4, position: 1},
        {team: "Tanzania", points: 4, ave: +2, position: 2},
        {team: "Brazil", points: 2, ave: -4, position: 3},
        {team: "Belguim", points: 10, ave: +14, position: 1}
    ]
}

for(group in teams){
    group.forEach((tm) => {
        console.log(tm.team, tm.points)
    })
}
