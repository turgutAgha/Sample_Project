document.getElementById('button1').addEventListener('click', getText)
document.getElementById('button2').addEventListener('click', getJson)
// document.getElementById('button3').addEventListener('click', getApi)

// pulling text
function getText(){
    fetch('text.txt')
    .then(function(res){
        console.log(res);
        return res.text()
    })
    .then(function(data){
        console.log(data);
        document.getElementById('output').innerHTML = data;
    })
    .catch((err)=>{
        console.log(err)
    })
}

// pulling json data
function getJson(){
    fetch('post.json')
    .then(function(res){
        console.log(res);
        return res.json()
    })
    .then(function(data){
        console.log(data);
        jsonData = ""
        data.forEach(element => {
            jsonData += `<li><b>${element.title}</b> ${element.body}</li>`;
        });
        document.getElementById('output').innerHTML = jsonData;
    })
    .catch((err)=>{
        console.log(err)
    })
}