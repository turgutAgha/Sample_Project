// fetch

// document.getElementById('button1').addEventListener('click', getText)
// document.getElementById('button2').addEventListener('click', getJson)
// document.getElementById('button3').addEventListener('click', getApi)

// document.getElementById('addPost').addEventListener('submit', postApi)

// // pulling text
// function getText(){
//     fetch('text.txt')
//     .then(function(res){
//         console.log(res);
//         return res.text()
//     })
//     .then(function(data){
//         console.log(data);
//         document.getElementById('output').innerHTML = data;
//     })
//     .catch((err)=>{
//         console.log(err)
//     })
// }

// // pulling json data
// function getJson(){
//     fetch('post.json')
//     .then(function(res){
//         console.log(res);
//         return res.json()
//     })
//     .then(function(data){
//         console.log(data);
//         jsonData = ""
//         data.forEach(element => {
//             jsonData += `<li><b>${element.title}</b> ${element.body}</li>`;
//         });
//         document.getElementById('output').innerHTML = jsonData;
//     })
//     .catch((err)=>{
//         console.log(err)
//     })
// }

// // pulling api data
// function getApi(){
//     fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(function(res){
//         console.log(res);
//         return res.json()
//     })
//     .then(function(data){
//         console.log(data);
//         apiData = ""
//         data.forEach(element => {
//             apiData += `<li><b>${element.title}</b> ${element.body}</li>`;
//         });
//         document.getElementById('output').innerHTML = apiData;
//     })
//     .catch((err)=>{
//         console.log(err)
//     })
// }

// // post request
// function postApi(e){
//     e.preventDefault();

//     let title = document.getElementById('title').value;
//     let body = document.getElementById('body').value;
    
//     fetch('https://jsonplaceholder.typicode.com/posts', {
//         method: 'POST',
//         headers: {
//             'Accept': 'application/json, text/plain, */*',
//             'Content-type': 'application/json'
//         },
//         body: JSON.stringify({title: title, body: body})
//     })
//     .then((res)=> res.json())
//     .then((data)=> console.log(data))
//     .catch((err)=>{
//         console.log(err)
//     })
// }



// axios
// document.getElementById('button1').addEventListener('click', getTodos)
// document.getElementById('button2').addEventListener('click', addTodos)


// function getTodos(){
//     axios.get('https://jsonplaceholder.typicode.com/todos')
//     .then((response) => {
//         console.log(response)
//         return response.data
//     })
//     .then((allposts) => {
//         console.log(allposts)
//         output = "<tr><th>Title</th><th>Completed?</th></tr>"
//         allposts.forEach(element => {
//             output += `<tr><td><b>${element.title}</b></td> <td>${element.completed}</td></tr>`;
//         });

//         document.getElementById('output').innerHTML = output;
//     })
//     .catch((err)=>{
//         console.log(err)
//     })
// }

// async function getTodos() {
//     try {
//       const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
//       let allposts = response.data;
//       output = "<tr><th>Title</th><th>Completed?</th></tr>"
//         allposts.forEach(element => {
//             output += `<tr><td><b>${element.title}</b></td> <td>${element.completed}</td></tr>`;
//         });
//         document.getElementById('output').innerHTML = output;
//     } catch (error) {
//       console.error(error);
//     }
//   }

// function addTodos(){

// }

document.getElementById('button1').addEventListener('click', getPhotos)
// document.getElementById('button2').addEventListener('click', addTodos)

function getPhotos(){
    axios.get('https://jsonplaceholder.typicode.com/photos',
    {params: {_limit: 50}})
    .then((response) => {
        console.log(response)
        return response.data
    })
    .then((allphotos) => {
        // console.log(allposts)
        output = "<tr><th>Albumid</th><th>Title</th><th>Photo</th></tr>"
        
        allphotos.forEach(element => {
            output += `<tr><td>${element.id}</td> <td style="width:250px">${element.title}</td><td><img src="${element.url}" width=75px></td></tr>`;
        });

        // for(let i in allphotos){
        //     let element = allphotos[i]
        //     output += `<tr><td>${element.id}</td> <td style="width:250px">${element.title}</td><td><img src="${element.url}" width=75px></td></tr>`;
        // };

        document.getElementById('output').innerHTML = output;
    })
    .catch((err)=>{
        console.log(err)
    })
}

