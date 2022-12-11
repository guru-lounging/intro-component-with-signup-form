const claimButton = document.querySelector('.claim');

const formInput = document.querySelector('.form');

formInput.addEventListener('submit', e =>{
    e.preventDefault();
    const firstName = formInput['firstName'].value;
    const lastName = formInput['lastName'].value;
    const email = formInput['email'].value;
    const password = formInput['password'].value;

    if (firstName === ''){
        addError('firstName', 'First Name is required.')
    } else {
        removeError('firstName');
    }

    if (lastName === ''){
        addError('lastName', 'Last Name is required.')
    } else {
        removeError('lastName');
    }

    if (!validateEmail(email)){
        addError('email', 'That email does not look right.')
    } else {
        removeError('email');
    }

    if (password === ''){
        addError('password', 'Password is required.')
    } else {
        removeError('password');
    }

});

function addError(field, message){

    const small = formInput[field].parentNode.querySelector('small') 
    small.innerText = message;
    formInput['firstName'].style.borderColor = 'red';
}

function removeError(field){
    const small = formInput[field].parentNode.querySelector('small') 
    formInput[field].parentNode.querySelector('small').innerText = '';
    formInput[field].style.borderColor = 'black';
}

function validateEmail(email) 
    {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    }