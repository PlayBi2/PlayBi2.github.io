var users = [{
  username: 'admin',
  password: 'abc123',
  fullname: 'Nguyễn Văn A',
  rights: 'admin',
  gender: 'null',
  birthday: '11/11/1991',
  email: 'gmail@admin.com'
}, {
  username: 'bientapvien1',
  password: 'bientapvien1',
  fullname: 'Nguyễn Văn Thắng',
  rights: 'editor',
  gender: 'Nam',
  birthday: '11/11/2002',
  email: 'nguyenvanthang@gmail.com'
},
{
  username: 'bientapvien2',
  password: 'bientapvien2',
  fullname: 'Đỗ Nguyên Phương',
  rights: 'editor',
  gender: 'Nam',
  birthday: '21/102002',
  email: 'donguyenphuong@gmail.com'
},
{
  username: '705105001',
  password: '705105001',
  fullname: 'Ngô Bá Khá',
  rights: 'user',
  gender: 'Nam',
  birthday: '11/11/1994',
  email: 'abc@gmail.com'
},
{
  username: '705105112',
  password: '705105112',
  fullname: 'Âm Thầm Bên Em',
  rights: 'user',
  gender: 'Nam',
  birthday: '12/01/2005',
  email: 'hackerlord@gmail.com'
},
{
  username: '705105089',
  password: '705105089',
  fullname: 'Đàm Vĩnh Hưng',
  rights: 'user',
  gender: 'Nam',
  birthday: '11/11/1975',
  email: 'dvhung@gmail.com'
},
{
  username: 'travisscott',
  password: 'iloveyou',
  fullname: 'Travis Scott',
  rights: 'user',
  gender: 'Nam',
  birthday: '10/11/1994',
  email: 'travis@gmail.com'
},
];




function login() {
  var us = document.getElementById("input-username").value
  var pd = document.getElementById("input-password").value
  check_login(us, pd)
  phanquyen(us)
}

function check_login(us, pd) {
  //bien value check xem da dang nhap thanh cong chua
  var value = false;
  var Member;
  for (var i = 0; i < users.length; i++) {
    if (users[i].username == us && users[i].password == pd) {
      value = true
      Member = users[i].fullname;
      break;
    }
  }
  console.log(value)
  if (value == true) {
    phanquyen(us)
    sessionStorage.setItem("usnm", us);
    sessionStorage.setItem("NameMember", Member);
  }
  else {
    alert('Username/Password incorrect')
  }
}

function getRights(us) {
  for (var i = 0; i < users.length; i++) {
    if (users[i].username == us) {
      return users[i].rights
    }
  }
}


function phanquyen(us) {
  var a = document.getElementById('quanly')
  if (getRights(us) == 'admin') {
    window.location.href = 'http://127.0.0.1:5500/web-item/Index2.html'
    // window.location.href = '../web-item/Index2.html'
   
  }
  else if (getRights(us) == 'editor') {
    window.location.href = 'http://127.0.0.1:5500/web-item/Index2.html'
    // window.location.href = '../web-item/Index2.html'
  }
  else {
    window.location.href = 'http://127.0.0.1:5500/web-item/index2_user.html'
    // window.open('http://127.0.0.1:5500/web-item/index2_user.html', '_self')
  }
}






































//   function saveTheCookie(value) {
//     var today = new Date(); // Actual date
//     var expire = new Date(); // Expiration of the cookie

//     var cookie_name = "username_form"; // Name for the cookie to be recognized
//     var number_of_days = 10; // Number of days for the cookie to be valid (10 in this case)

//     expire.setTime( today.getTime() + 60 * 60 * 1000 * 24 * number_of_days ); // Current time + (60 sec * 60 min * 1000 milisecs * 24 hours * number_of_days)

//     document.cookie = cookie_name + "=" + escape(value) + "; expires=" + expire.toGMTString();
// }

// function getTheCookie() {
//     var cookie_name = "username_form";
//     var return_value = null;

//     var pos_start = document.cookie.indexOf(" " + cookie_name + "=");
//     if (pos_start == -1) document.cookie.indexOf(cookie_name + "=");

//     if (pos_start != -1) { // Cookie already set, read it
//         pos_start++; // Start reading 1 character after
//         var pos_end = document.cookie.indexOf(";", pos_start); // Find ";" after the start position

//         if (pos_end == -1) pos_end = document.cookie.length;
//         return_value = unescape( document.cookie.substring(pos_start, pos_end) );
//     }

//     return return_value; // null if cookie doesn't exist, string otherwise
// }

// /////////////////////////////////////////////////
// let cookies = document.cookie;
// console. log(cookies)
// function createCookie(name, value, expDay) {
//     let now = new Date()
//    now. setTime(now.getTime() + expDay * 24 * 60 * 60 * 1000);
//     document.cookie = name + "=" + value + ";expires=" + now.toUTCString() + ";path=/"
// }
// function deleteCookie(name) {
//     let now = new Date();
//    now. setTime(now.getTime() - 60 * 1000);
//     document.cookie = name + "=;expires=" + now.toUTCString() + ";path=/"
// }

// function getCokie(name) {
//     let cookiestr = document.cookie;
//    if (cookiestr) {
//         let cookieArray = cookieStr.split(";")
//         for (let i = 0; i < cookieArray. length; i++) {
//             let keyValueArr = cookieArray [i].split("=")
//             if (keyValueArr[0].trim() == name) {
//                 return cookieArray[i];
//             }
//         }
//     }
// }
// createCookie("trackingId", "123456")
// deleteCookie("username");