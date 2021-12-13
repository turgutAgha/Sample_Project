
document.getElementById('submit').addEventListener("click", ()=>{
    fetch("https://api.nytimes.com/svc/books/v3/lists/series-books.json?api-key=gVmG2dOV9U0KZ7duLy3Eu5XKru6mn7jV")
    .then(data => data.json())
    .then(data => console.log(data.results.books))
})