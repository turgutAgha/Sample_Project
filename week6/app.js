// read elements

const form = document.querySelector('form')
const username = document.querySelector('#username')
const password = document.querySelector('#password')

form.addEventListener('submit', (e)=>{
    checkInputs();
    e.preventDefault();
})

function checkInputs(){
    // read elements
    const usernameValue = username.value.trim();
    const passwordValue = password.value.trim();

    // check username
    if(username === '' || usernameValue.length < 5) {
        // set error function
        setError(username, 'Username error!')
    } else {
        setSuccess(username);
    }

    if(password === '' || passwordValue.length < 5) {
        // set error function
        setError(password, 'Password error!')
    } else {
        setSuccess(password);
    }

}

// setError function
function setError(input, message){
    const formElement = input.parentElement;
    const small = formElement.querySelector('small')
    small.innerText = message;
}

// setSuccess function
function setSuccess(input){
    const formElement = input.parentElement;
    const small = formElement.querySelector('small')
    small.innerText = '';
}