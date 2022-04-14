var UserBTN = document.getElementsByClassName('log-in');
var UserModal = document.getElementsByClassName('header__user-modal');
UserBTN[0].onclick = function(){
    
    UserModal[0].style.display="block";
}
// if(UserBTN[0].style.display === "block"){
//     UserModal[0].onclick = function(){
//         UserModal[0].classList.add("open");
//     }
// }

