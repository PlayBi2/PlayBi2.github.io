var MenuBtn = document.querySelector('.header__menu'); // Icon menu trên thanh header
var SubNav = document.querySelector('#sub-nav__modal'); // toàn bộ phần sub-nav khi nhấn vào menu-icon
var IconCloseSubNav = document.querySelector('.sub-nav__title i'); // Icon close của sub-nav
var Bar = document.querySelector('.sub-nav__section');
var ListProduct = document.querySelectorAll('.product-hot.row');
var ControlLefts = document.querySelectorAll('.control-left');
var ControlRights = document.querySelectorAll('.control-right');
var CurrentItem = [0];
var SearchIcon = document.querySelector('.search-box i');

// tạo một mảng chứa địa chỉ từng list-product để khi click sang trái phải k bị loạn địa
// chỉ giữa các list-product
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


ControlLefts.forEach(function(control,index){
    
    control.onclick = function () {

        if (CurrentItem[index] < 0) {
            CurrentItem[index] += 240;
            ListProduct[index].style.transform = `translate3d(${CurrentItem[index]}px,0px,0px)`
        }
    }
})
ControlRights.forEach(function(control,index){
    control.onclick = function () {
        // kiểm tra xem vị trí mà ta nhấp sang trái-phải đã tồn tại trong mảng lưu địa chỉ chưa
        // nếu chưa có thì thêm phần tử 0 tại vị trí đó rồi làm như bthg
        if(index>CurrentItem.length-1){
            CurrentItem.push(0);
        }  
        if (CurrentItem[index] > -720) {
            CurrentItem[index] -= 240;
            let x = CurrentItem[index] + 'px';
            ListProduct[index].style.transform = `translate3d(${x},0px,0px)`
        }

    }
})

function ListScroll(list){
    let isMouseDown = false;
    let startX, scrollLeft;
    list.addEventListener('mousedown',function(e){
        isMouseDown = true;
        startX = e.pageX - list.offsetLeft;
        scrollLeft = list.scrollLeft;
    })

    list.addEventListener('mouseleave',function(){
        isMouseDown = false;
    })
    
    list.addEventListener('mouseup',function(){
        isMouseDown = false;
    })

    list.addEventListener('mousemove',function(e){
        if(!isMouseDown){
            return;
        }
        let x = e.pageX - list.offsetLeft;
        let walk = x - startX;
        list.scrollLeft = scrollLeft - walk;
    })
}

function FeedBackOption(){
    let PreBtn = document.querySelector('#previous');
    let NextBtn = document.querySelector('#next');
    let CurrentFeedBack = 0;
    
    PreBtn.addEventListener('change',function(){
        let ListFeedBack = document.querySelector('.feed-back__section .row');
        CurrentFeedBack += 400;
        let x = CurrentFeedBack + 'px'
        ListFeedBack.style.transform = `translateX(${x})`;
    })
    NextBtn.addEventListener('change',function(){
        let ListFeedBack = document.querySelector('.feed-back__section .row');
        CurrentFeedBack -= 400;
        let x = CurrentFeedBack + 'px'
        ListFeedBack.style.transform = `translateX(${x})`;
    })
}


FeedBackOption()

MenuBtn.addEventListener('click', OpenSubNav);
IconCloseSubNav.addEventListener('click', CloseSubNavP1);

ListProduct.forEach(function(list){
    ListScroll(list)
})
