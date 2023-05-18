import { validateEmail } from "./functions.js";


// * Login Form validation
var loginForm = document.querySelector('#login-form');
loginForm.addEventListener('submit', e => {
    e.preventDefault();
    var errors = 0;
    const email = e.target['username_login'].value;
    const password = e.target['password_login'].value;
    // Validate form data
    if(!email || !password){
        errors += 1;
        alert('email or password are empty')
    }
    if(!validateEmail(email)){
        errors += 1;
        alert('Its not email!')
    }
    if(password.length <= 4){
        errors += 1;
        alert('password is too short');
    }
    // If there is no error, submit the form
    if (errors === 0){
        e.target.submit();
    }
})


// * Sign up Form validation
var signUpForm = document.querySelector('#sign-up-form');
signUpForm.addEventListener('submit', e => {
    e.preventDefault()
    var errors = 0;
    const email = e.target['username'].value;
    const password = e.target['password'].value;
    const passwordConfirm = e.target['password_confirm'].value;
    // Validate form data
    if(!email || !password){
        errors += 1;
        alert('email or password are empty')
    }
    if(!validateEmail(email)){
        errors += 1;
        alert('Its not email!')
    }
    if(password.length <= 4){
        errors += 1;
        alert('password is too short');
    }
    if(password.length > 0 && password !== passwordConfirm){
        errors += 1;
        alert('passwords are not match');
    }
    // If there is no error, submit the form
    if (errors === 0){
        e.target.submit();
    }
})