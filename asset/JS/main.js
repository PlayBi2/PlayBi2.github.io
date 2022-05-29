var MenuBtn = document.querySelector('.header__menu');
var SubNav = document.querySelector('#sub-nav__modal');
var IconCloseSubNav = document.querySelector('.sub-nav__title i');
var Bar = document.querySelector('.sub-nav__section');
var ListProduct = document.querySelectorAll('.product-hot.row');
let currentX = 0;
var ControlLefts = document.querySelector('.control-left');
var ControlRights = document.querySelector('.control-right');

var OpenSubNav = function () {
    SubNav.style.display = 'block';
}
var CloseSubNavP1 = function () {
    SubNav.style.display = 'none';
}
SubNav.onclick = function () {
    SubNav.style.display = 'none';
}
Bar.onclick = function (ex) {
    ex.stopPropagation();
}
ControlLefts.onclick = function () {

    if (currentX < 0) {
        currentX += 240;
        ListProduct[0].style.transform = `translate3d(${currentX}px,0px,0px)`
    }
}
ControlRights.onclick = function () {

    if (currentX > -720) {
        currentX -= 240;
        let x = currentX + 'px';
        ListProduct[0].style.transform = `translate3d(${x},0px,0px)`
    }
}
// ListProduct.forEach(function(list,index){
//         // ControlLefts[index].onclick = function(){
//         //     list.style.transform = 'translate3d(-240px,0px,0px)'
//         // }
//         // ControlRight[index].onclick = function(){
//         //     list.style.transform = 'translate3d(240px,0px,0px)'
//         // }

//     list.onmousedown = function(e){
//         // console.log(e.target.onscroll)
//         // list.style.transform = 'translate3d(-100px,0px,0px)'
//     }
// })

MenuBtn.addEventListener('click', OpenSubNav);
IconCloseSubNav.addEventListener('click', CloseSubNavP1);