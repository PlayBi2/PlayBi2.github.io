var NameValue = sessionStorage.getItem('NameMember');
var LoginUserName = document.getElementById('User-name');
LoginUserName.innerHTML = NameValue;

var manage = document.getElementById('quanly');
manage.onclick = function(){
    window.open('http://127.0.0.1:5500/web-item/QuanTri.html');
}