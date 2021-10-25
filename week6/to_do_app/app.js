var data = ['Task 1', 'Task 2', 'Task 3']

disp();

document.querySelector('button').addEventListener('click', () => {
    let inpRes = document.getElementById('task').value
    data.push(inpRes)
    disp()
})

function remove(index_no){
    let myInput = data.splice(index_no, 1)
    disp()
}

function disp(){
    var str = ''
    str = `<h4> Total Tasks: ${data.length}</h4>`
    // loop array
    for(i=0; i < data.length; i++){
        str += `<p>${i+1}. ${data[i]} <span><a href=# onClick="remove( ${i})"> del</a></span></p>`
    }

    document.getElementById('myRes').innerHTML = str
}
