var signupName = document.getElementById('signupName');
var signupEmail = document.getElementById('signupEmail');
var signupPassword = document.getElementById('signupPassword');
var loginEmail = document.getElementById('loginEmail');
var loginPassword = document.getElementById('loginPassword');

var allData = [];



if (localStorage.getItem('allData')) {
    allData = JSON.parse(localStorage.getItem('allData'))


}



// SingUP function
function signUp() {
    var signupData = {
        name: signupName.value,
        email: signupEmail.value,
        password: signupPassword.value
    }

    if (inputValidate(signupEmail) & inputValidate(signupPassword)) {
        var signupData = {
            name: signupName.value,
            email: signupEmail.value,
            password: signupPassword.value
        }
        
    }
    allData.push(signupData);
        localStorage.setItem('allData', JSON.stringify(allData));
        alert("Sign up successful");
        window.location.href = "../index.html";

}





// Login function

function login() {

    if (loginEmail.value == "" || loginPassword.value == "") {
        alert("incorrect email or password");
    } else {

        var storedData = JSON.parse(localStorage.getItem('allData'));


        for (var i = 0; i < storedData.length; i++) {

            if (storedData[i].email.toLowerCase() == loginEmail.value.toLowerCase() && storedData[i].password == loginPassword.value) {

                localStorage.setItem("userName", storedData[i].name)

                window.location.href = "../Pages/home.html";


            } else {

                document.getElementById("incorrect").innerHTML = "Emai or Password is incorrect";


            }
        }
    }
}



// Logout function

function logout() {
    window.location.href = "../index.html";
}



// Input Validate function

function inputValidate(element) {

    var inputRegex = {
        signupEmail: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,63}$/g,
        loginEmail: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,63}$/g,
        signupPassword: /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9])(?=\S*?(?:\W|_)).{8,})$/g,
        loginPassword: /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9])(?=\S*?(?:\W|_)).{8,})$/g
    }

    if (inputRegex[element.id].test(element.value)) {

        element.classList.add('is-valid')
        element.classList.remove('is-invalid')
        element.nextElementSibling.classList.add('d-none')
    } else {

        element.classList.remove('is-valid')
        element.classList.add('is-invalid')
        element.nextElementSibling.classList.remove('d-none')

    }

}


