var AtributeBTNs = document.getElementsByClassName('selection-item-link');

for(var i = 0 ;i < AtributeBTNs.length-1; i++){
    AtributeBTNs[i].onclick = function(){
        AtributeBTNs[i].style.background = "green";
        AtributeBTNs[i].style.color = "#fff";
    } 
}