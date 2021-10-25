let text = document.getElementById('myText').innerHTML

document.getElementById('1').addEventListener('click', ()=>{
    document.getElementById('myText').innerHTML = text.toLowerCase()
})

document.getElementById('2').addEventListener('click', ()=>{
    document.getElementById('myText').innerHTML = text.toUpperCase()
})

document.getElementById('3').addEventListener('click', ()=>{
    let arr = text.split(" ")
    let end = ""
    arr.forEach(el => {
        end += el[0].toUpperCase() + el.substring(1) +  " "
    })
    document.getElementById('myText').innerHTML = end
})