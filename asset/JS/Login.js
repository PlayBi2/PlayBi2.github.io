var submitBTNs = document.getElementsByClassName('sign-in__modal');

var LoginBTN = document.getElementsByClassName('log-in');
var CloseIcons = document.getElementsByClassName('icon-close');
var GoToSignUp = document.getElementsByClassName('goto__sign-up');
var GoToSignIn = document.getElementsByClassName('goto__sign-in');
LoginBTN[0].onclick = function () {
    submitBTNs[0].style.display = "flex";
}


for (var CloseIcon of CloseIcons) {
    CloseIcon.onclick = function () {
        submitBTNs[0].style.display = "none";
    }
}

GoToSignUp[0].onclick = function () {
    var SignIn = document.getElementsByClassName("sign-in__bg");
    SignIn[0].style.display = "none";
    var SignUp = document.getElementsByClassName("sign-up__bg");
    SignUp[0].style.display = "block";
}
GoToSignIn[0].onclick = function () {
    var SignUp = document.getElementsByClassName("sign-up__bg");
    SignUp[0].style.display = "none";
    var SignIn = document.getElementsByClassName("sign-in__bg");
    SignIn[0].style.display = "block";
}



