var MenuBtn = document.querySelector('.header__menu'); // Icon menu trên thanh header
var SubNav = document.querySelector('#sub-nav__modal'); // toàn bộ phần sub-nav khi nhấn vào menu-icon
var IconCloseSubNav = document.querySelector('.sub-nav__title i'); // Icon close của sub-nav
var Bar = document.querySelector('.sub-nav__section');
var ListProduct = document.querySelectorAll('.product-hot.row');
var ControlLefts = document.querySelectorAll('.control-left');
var ControlRights = document.querySelectorAll('.control-right');
var CurrentItem = [0];
var FeedBackBlock = document.querySelector('.feed-back__section .row');
// tạo một mảng chứa địa chỉ từng list-product để khi click sang trái phải k bị loạn địa
// chỉ giữa các list-product


function MenuOption() {
    function OpenSubNav() {
        SubNav.style.display = 'block';
    }
    function CloseSubNavP1() {
        SubNav.style.display = 'none';
    }
    SubNav.onclick = function () {
        SubNav.style.display = 'none';
    }
    Bar.onclick = function (ex) {
        ex.stopPropagation();
    }
    MenuBtn.addEventListener('click', OpenSubNav);
    IconCloseSubNav.addEventListener('click', CloseSubNavP1);
}

let slider = document.querySelector('#slider');
let GoToTopIcon = document.querySelector('.go-to-top');
window.addEventListener('scroll', function () {
    if (slider.getClientRects()[0].bottom < 661) {

        GoToTopIcon.classList.add('unhide');
    }
    else {
        GoToTopIcon.classList.remove('unhide')
    }
})


function ListScroll(list, index) {
    let isMouseDown = false;
    let startX, scrollLeftX;
    list.addEventListener('mousedown', function (e) {
        isMouseDown = true;
        startX = e.pageX - list.offsetLeft;
        scrollLeftX = list.scrollLeft;
    })

    list.addEventListener('mouseleave', function () {
        isMouseDown = false;
    })

    list.addEventListener('mouseup', function () {
        isMouseDown = false;
    })

    list.addEventListener('mousemove', function (e) {
        if (!isMouseDown) {
            return;
        }
        let x = e.pageX - list.offsetLeft;
        let walk = x - startX;
        list.scrollLeft = scrollLeftX - walk;
        CurrentItem[index] = list.scrollLeft;
    })
}

function FeedBackOption() {
    let PreBtn = document.querySelector('#previous');
    let NextBtn = document.querySelector('#next');
    let ListFeedBack = document.querySelector('.feed-back__section .row');
    PreBtn.addEventListener('change', function () {
        let x = ListFeedBack.scrollLeft;
        ListFeedBack.scrollLeft = x - 400
    })
    NextBtn.addEventListener('change', function () {
        let x = ListFeedBack.scrollLeft;
        ListFeedBack.scrollLeft = x + 400
    })
}

function Control(list, index) {
    ControlLefts[index].addEventListener('click', function () {
        if (list.scrollLeft == 0) {
            return;
        }

        let x = list.scrollLeft;
        list.scrollLeft = x - 260;
    })
    ControlRights[index].addEventListener('click', function () {
        let x = list.scrollLeft;
        list.scrollLeft = x + 260;
    })
}

// Điều hướng trái phải 
ListProduct.forEach(function (list, index) {
    Control(list,index)
})

// Scroll list 
ListProduct.forEach(function (list) {
    ListScroll(list)
})

// Scroll FeedBack
ListScroll(FeedBackBlock)


MenuOption() // Chức năng khi nhấn vào icon menu
FeedBackOption() // Chức năng trong feed back


