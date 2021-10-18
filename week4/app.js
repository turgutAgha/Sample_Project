
// 1. impure function
// let counter = 1
// const increaseCounter = (value) => counter = value + 1
// increaseCounter(counter)
// increaseCounter(counter)
// increaseCounter(counter)

// console.log(counter)


// 2. constructor function

// function Counter(){
//     let count = 0;

//     this.up = function() {
//         return ++count;
//     }

//     this.down = function() {
//         return --count;
//     }
// }

// let counter = new Counter();
// console.log(counter.up());
// console.log(counter.down());
// console.log(counter.down());


// 3. scope

// const myGlobal = 0;
// function func(){
//     const myVar1 = 1;
//     console.log("myVar1 is", myVar1);
    
//     function innerOfFunc(){
//         const myInnerVar = 2;
//         console.log("myInnerVar is", myInnerVar);
//         function innerOfInner(){
//             const myInnerInnerVar = 3;
//             console.log("myInnerInnerVar is", myInnerInnerVar);
//         }
//         innerOfInner();
//     }
//     innerOfFunc();
// }

// func();


// 4. closures in JS

// function outerFunc(){
//     let outerVar = 'I am outside';
//     function innerFunc(){
//         console.log(outerVar);
//     }
//     return innerFunc();
// }

// funcction exec(){
//     const myInnerFunc  = outerFunc();
//     myInnerFunc;
// }

// exec();


// 5. self-execution

// const outer = (function outerFunc(){
//     let outerVar = "Inside Outer";
//     function innerFunc(){
//         console.log(outerVar);
//     }
//     return innerFunc;
// })();

// outer()


// example 1

// let countClick = 0;
// let myButton = document.getElementById('myButton')
// let myText = document.getElementById('myText')
// myButton.addEventListener('click', function handleClick(){
//     countClick++;
//     myText.innerText = `you clicked ${countClick} times`;
// })

// example2

// const message = "Hello Students!";
// setInterval(function callback(){
//     console.log(message);
// }, 1);


// example3

// let countEven = 0;
// const items = [1, 23, 432, 421, 42114];

// items.forEach(function iterator(number){
//     if (number % 2 == 0){
//         countEven++;
//     }
// });

// console.log(countEven)

// example4

// setInterval(() => {console.log("hello")}, 1000)


// example5

// let timeint = setInterval( () => console.log('hello'), 2000);
// setTimeout(() => {clearInterval(timeint); console.log('stop')}, 5000);

// task


function inc(from, to){
    let count = from;
    let timeint = setInterval( () =>{console.log(count++);} , 1000)
    setTimeout( () => {clearInterval(timeint); console.log('finish')}, 1000*(to-from))
}

inc(10, 15)