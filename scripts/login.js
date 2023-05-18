import { validateEmail } from "./functions.js";


// * Login Form validation
// ! Error variables
let loginEmailError = document.querySelector('#login-email-error');
let loginPasswordError = document.querySelector('#login-password-error');

var loginForm = document.querySelector('#login-form');
loginForm.addEventListener('submit', e => {
    e.preventDefault();
    var errors = 0;
    const email = e.target['username_login'].value;
    const password = e.target['password_login'].value;
    // Validate form data
    if(email.length < 1){
        errors += 1;
        loginEmailError.innerHTML = 'ایمیل خود را وارد کنید';
        loginEmailError.classList.remove('d-none');
        setTimeout(() => {
            loginEmailError.classList.add('d-none');
        }, 3000);
    }
    if(password.length < 1){
        errors += 1;
        loginPasswordError.innerHTML = 'رمز عبور خود را وارد کنید';
        loginPasswordError.classList.remove('d-none');
        setTimeout(() => {
            loginPasswordError.classList.add('d-none');
        }, 3000);
    }
    if(email.length >= 1 && !validateEmail(email)){
        errors += 1;
        loginEmailError.innerHTML = 'ایمیل خود را به درستی وارد کنید';
        loginEmailError.classList.remove('d-none');
        setTimeout(() => {
            loginEmailError.classList.add('d-none');
        }, 3000);
    }
    // If there is no error, submit the form
    if (errors === 0){
        e.target.submit();
    }
})


// * Sign up Form validation
// ! Error variables
let signUpEmailError = document.querySelector('#signup-email-error');
let signUpPasswordError = document.querySelector('#signup-password-error');
let signUpPasswordConfirmError = document.querySelector('#signup-password-confirm-error');

var signUpForm = document.querySelector('#sign-up-form');
signUpForm.addEventListener('submit', e => {
    e.preventDefault()
    var errors = 0;
    const email = e.target['username'].value;
    const password = e.target['password'].value;
    const passwordConfirm = e.target['password_confirm'].value;
    // Validate form data
    if(email.length < 1){
        errors += 1;
        errors += 1;
        signUpEmailError.innerHTML = 'ایمیل خود را وارد کنید';
        signUpEmailError.classList.remove('d-none');
        setTimeout(() => {
            signUpEmailError.classList.add('d-none');
        }, 3000);
    }
    if(email.length >= 1 && !validateEmail(email)){
        errors += 1;
        signUpEmailError.innerHTML = 'ایمیل خود را به درستی وارد کنید';
        signUpEmailError.classList.remove('d-none');
        setTimeout(() => {
            signUpEmailError.classList.add('d-none');
        }, 3000);
    }
    if(password.length < 1){
        errors += 1;
        signUpPasswordError.innerHTML = 'رمز عبور خود را وارد کنید';
        signUpPasswordError.classList.remove('d-none');
        setTimeout(() => {
            signUpPasswordError.classList.add('d-none');
        }, 3000);
    }
    if(passwordConfirm.length < 1){
        errors += 1;
        signUpPasswordConfirmError.innerHTML = 'تکرار رمز عبور را وارد کنید';
        signUpPasswordConfirmError.classList.remove('d-none');
        setTimeout(() => {
            signUpPasswordConfirmError.classList.add('d-none');
        }, 3000);
    }
    if(1 <= password.length && password.length <= 4){
        errors += 1;
        signUpPasswordError.innerHTML = 'رمز عبور باید بیش از 4 کاراکتر باشد';
        signUpPasswordError.classList.remove('d-none');
        setTimeout(() => {
            signUpPasswordError.classList.add('d-none');
        }, 3000);
    }
    if(password.length > 0 && passwordConfirm.length > 0 && password !== passwordConfirm){
        errors += 1;
        signUpPasswordConfirmError.innerHTML = 'تکرار رمز عبور اشتباه است';
        signUpPasswordConfirmError.classList.remove('d-none');
        setTimeout(() => {
            signUpPasswordConfirmError.classList.add('d-none');
        }, 3000);
    }
    // If there is no error, submit the form
    if (errors === 0){
        e.target.submit();
    }
})