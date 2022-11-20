//define global variables

let emailInput = document.querySelector("#email");
let loginInput = document.querySelector("#login");
let passInput = document.querySelector("#pass");
let pass2Input = document.querySelector("#pass2");
let newsletterInput = document.querySelector("#newsletter");
let termsInput = document.querySelector("#terms");




// create paragraph to display the error Msg returented by vaildateEmail() function 
// and assign this paragraph to the class warning to style the error MSg
let emailError = document.createElement('p');
emailError.setAttribute("class", "warning");
//append the created element to the parent of email div
document.querySelectorAll(".textfield")[0].append(emailError);


// // create paragraph to display the error Msg returented by vaildateEmail() function 
// // and assign this paragraph to the class warning to style the error MSg
let loginError = document.createElement('p');
loginError.setAttribute("class", "warning");
// //append the created element to the parent of login div
document.querySelectorAll(".textfield")[1].append(loginError);


// create paragraph to display the error Msg returented by vaildateEmail() function 
// and assign this paragraph to the class warning to style the error MSg
let passError = document.createElement('p');
passError.setAttribute("class", "warning");
//append the created element to the parent of email div
document.querySelectorAll(".textfield")[2].append(passError);


// create paragraph to display the error Msg returented by vaildateEmail() function 
// and assign this paragraph to the class warning to style the error MSg
let pass2Error = document.createElement('p');
pass2Error.setAttribute("class", "warning");
//append the created element to the parent of email div
document.querySelectorAll(".textfield")[3].append(pass2Error);



// create paragraph to display the error Msg returented by vaildateTerms() function 
// and assign this paragraph to the class warning to style the error MSg
let termsError = document.createElement('span');
termsError.setAttribute("class", "warning");
//append the created element to the parent of check div
document.querySelectorAll(".checkbox")[1].append(termsError);



// //define global variables to output message

let defaultMSg = "";
let emailErrorMsg = "x Email address should be non-empty with the format xyx@xyz.xyz.";
let loginErrorMsg = "x User name should be non-empty, and within 20 characters long.";
let passErrorMsg = "x Password should be at least 6 characters:1 uppercase, 1 lowercase.";
let pass2ErrorMsg = "x Please retype password.";
let termsErrorMsg = "x Please accept the terms and conditions.";


//method to validate email
function validateEmail() {
    let email = emailInput.value; // access the value of the email
    var regexp = /\S+@\S+\.\S+/; //reg. expression 

    if (regexp.test(email)) { //test is predefiend method to check if the entered email matches the regexp// document.querySelectorAll(".textfield")[0].setAttribute('border-color', 'red');

        error = defaultMSg;
    }
    else {
        //emailInput.setAttribute("class","redInput");
        error = emailErrorMsg;
    }
    return error;

}

//method to validate login name   

function validateLogin() {
    let login = loginInput.value; // access the value of the login name
    // var regexp=/^[A-Za-z0-9]{1,20}$/; //reg. expression 
    var regexp = /^[A-Za-z]{2,20}$/;

    if (regexp.test(login)) { //test is predefiend method to check if the entered longin name matches the regexp
      // loginInput.value= login.toLowerCase();
       
        error = defaultMSg;
    }
    else {
        error = loginErrorMsg;
    }
    return error;

}

function validatePass() {
    let pass = passInput.value;
    //var regexp=/\S+@\S+\.\S+/;
    //var regexp=/^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&]).{6,100}$/; number+abc+ special char

    var regexp = /^(?=.*[A-Z0-9])(?=.*[a-z]).{6,100}$/;
    if (regexp.test(pass)) { //test is predefiend method to check if the entered email matches the regexp
        error = defaultMSg;
    }
    else {
        error = passErrorMsg;
    }
    return error;

}



function validatePass2() {
    let pass2 = pass2Input.value;
    // var regexp=/\S+@\S+\.\S+/;

    if ((pass2 === passInput.value) && (pass2 !== defaultMSg)) { //test is predefiend method to check if the entered email matches the regexp
        error = defaultMSg;
    }
    else {
        error = pass2ErrorMsg;
    }
    return error;

}



//method to validate the terms 
function validatTerms() {
    if (termsInput.checked)
        return defaultMSg;
    else
        return termsErrorMsg;

}






//event handler for submit event
function validate() {
    let valid = true;//global validation 
    let emailValidation = validateEmail();
    let loginValidation = validateLogin();
    let passValidation = validatePass();
    let pass2Validation = validatePass2();
    let termsValidation = validatTerms();

    let login = loginInput.value; 
    
    // loginInput.value= login.toLowerCase();

    if (emailValidation !== defaultMSg) {
        emailError.textContent = emailValidation;
        emailInput.setAttribute("class", "redInput");
        valid = false;
    }

    if (loginValidation !== defaultMSg) {
        loginError.textContent = loginValidation;
        loginInput.setAttribute("class", "redInput");
      
        valid = false;
    }



    if (passValidation !== defaultMSg) {
        passError.textContent = passValidation;
        passInput.setAttribute("class", "redInput");
        valid = false;

    }


    if (pass2Validation !== defaultMSg) {
        pass2Error.textContent = pass2Validation;
        pass2Input.setAttribute("class", "redInput");
        valid = false;

    }

    if (termsValidation !== defaultMSg) {
        termsError.textContent = termsValidation;
        valid = false;
    }

 if(valid){
    loginInput.value= login.toLowerCase()
 }



    return valid;
};

// if(newsletterInput.checked)
// {
//  alert("Please pay attention to the possible spam");
// }

newsletterInput.addEventListener("change", (e) => {
    if (e.target.checked) {
        alert("Please pay attention to the spam!");
    }
});

// event listner to empty the text inside the two paragraph when resent
function resetFormError() {
    emailError.textContent = defaultMSg;

    loginError.textContent = defaultMSg;
    passError.textContent = defaultMSg;
    pass2Error.textContent = defaultMSg;
    termsError.textContent = defaultMSg;

    emailInput.setAttribute("class", "textfield input");
    loginInput.setAttribute("class", "textfield input");
    passInput.setAttribute("class", "textfield input");
    pass2Input.setAttribute("class", "textfield input");

}
document.form.addEventListener("reset", resetFormError);



// // add event listner to the email if you entered correct email,the error paragraph with be empty

emailInput.addEventListener("blur", () => { // arrow function
    let x = validateEmail();
    if (x == defaultMSg) {
        emailError.textContent = defaultMSg;
        emailInput.setAttribute("class", "textfield input");
    }
});

// add event listner to the login if you entered correct login,the error paragraph with be empty

loginInput.addEventListener("blur", () => { // arrow function
    let x = validateLogin();
    if (x == defaultMSg) {
        loginError.textContent = defaultMSg;
        loginInput.setAttribute("class", "textfield input");
    }
});

// add event listner to the pass if you entered password,the error paragraph with be empty

passInput.addEventListener("blur", () => { // arrow function
    let x = validatePass();
    if (x == defaultMSg) {
        passError.textContent = defaultMSg;
        passInput.setAttribute("class", "textfield input");
    }
});

// add event listner to the pass2 if you entered password2,the error paragraph with be empty

pass2Input.addEventListener("blur", () => { // arrow function
    let x = validatePass2();
    if (x == defaultMSg) {
        pass2Error.textContent = defaultMSg;
        pass2Input.setAttribute("class", "textfield input");
    }
});


// add event listner to the checkbox -terms if you check the terms box,the error paragraph with be empty

termsInput.addEventListener("change", function () {// anonymous function
    if (this.checked) {
        termsError.textContent = defaultMSg;
    }
});

// var oldUrl = window.location.href;
// var newUrl = oldUrl.toLowerCase();
// location.href = newUrl;