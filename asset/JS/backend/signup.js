function signup(){
    var us = String(document.getElementById('signup-us'));
    var ps1 = String(document.getElementById('signup-ps1'));
    var ps2 = String(document.getElementById('signup-ps2'));
    console.log(typeof us);
    console.log(check_us(us));
    if(check_us(us) == true){
        alert('Tài khoản đã có người đăng kí trước. Hãy thử lại.')
    }
    else{
        if(ps1 != ps2){
            alert('Các mật khẩu đã nhập không khớp. Hãy thử lại.')
        }
        else{
            var table = document.getElementById('account');
            var row = table.insertRow();
            var cell1 = row.insertCell();
            cell1.innerHTML = us;
            var cell2 = row.insertCell();
            cell2.innerHTML = ps;
        }
    }
}

function check_us(us){
    var value = false;
    var table = document.getElementById('account');
    var n = table.rows.length
    for(var i = 0; i<n; i++){
        if(us === table.rows[i].cells[0].innerHTML){
            value=true
            console.log(table.rows[i].cells[0].innerHTML)
            break;
        }
    }
    return value;
}

