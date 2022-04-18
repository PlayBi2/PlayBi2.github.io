var LogOut = document.getElementById('log-out');
LogOut.onclick = function logout(){
    var logout = document.getElementById('logout')
    sessionStorage.clear();
    window.open('http://127.0.0.1:5500/index.html', '_self')
}