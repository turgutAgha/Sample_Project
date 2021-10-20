// let countClick = 0;
// let myButton = document.getElementById('myButton')
// let myText = document.getElementById('myText')
// myButton.addEventListener('click', function handleClick(){
//     countClick++;
//     myText.innerText = `you clicked ${countClick} times`;
// })

// DOM

// 1
// document.getElementById('myText').innerText = "New Result 1"

// 2
// document.getElementById('myText').innerHTML = "<h2>New Result 2</h2>"

// 3 - changing with function in button
// function change(){
//     document.getElementById("myText").innerHTML = "<h2>New Result 2</h2>"
// }

// 4 - same as 3
// document.getElementById('myButton').addEventListener("mouseover", function(){       // other types: "mouseover", "dblclick"
//     document.getElementById("myText").innerHTML = "<h2>New Result 2</h2>"
// })

// 5 - same as 4
// document.getElementById('myButton').addEventListener("mouseover", change)

// function change(){
//     document.getElementById("myText").innerHTML = "<h2>New Result 2</h2>"
// }

//----------------------

// example
// let counter = 0

// 1st way - with onclick - not secure

// function increase(){
//     ++counter;
//     document.getElementById("myText").innerHTML =  counter
// }

// function decrease(){
//     --counter;
//     document.getElementById("myText").innerHTML =  counter
// }


// 2nd way - with onclick - not secure

// function change(countering){
//     (countering == "+1") ? counter++ : counter--;
//         document.getElementById("myText").innerHTML =  counter
// }


// 3rd way - with addEventListener

// const myDiv = document.getElementById("myDiv")

// myDiv.addEventListener("click", (e) => {
//     // console.log(e.target.id)                       // for getting which button we click
//     (e.target.id == "decrease") ? --counter : ++counter;
//     document.getElementById("myText").innerText =  counter
// })

// style
// 1 - not recommended
// document.getElementById('myText').style.backgroundColor = "gray"


// add style : classList.add('styleName')
// remove style : classList.remove('styleName')


// selecting values
// 1 - with onchange=""

// function change(){
//     let val = document.getElementById('txt').value;
//     // console.log(val)
//     document.getElementById('myText').innerText = val
// }

// 2
let butt = document.getElementById('but')
butt.addEventListener('click', () => {
    // by class name
    // let val = document.getElementsByClassName('inp')[0].value;
    // by tag name
    // let val = document.getElementsByTagName('input')[0].value;
    // by name
    // let val = document.forms["frm"]["inpt"].value;
    // query selector
    // let val = document.querySelectorAll('.inp')[0].value

    let val = document.getElementsByClassName('inp')[0].value + "\n"
        + document.getElementsByClassName('inp')[1].value + "\n"
        + document.querySelector('option:checked').value + "\n"
        + document.querySelector('input[name=rad]:checked').value + "\n"
    
    document.getElementById('myText').innerText = val
})