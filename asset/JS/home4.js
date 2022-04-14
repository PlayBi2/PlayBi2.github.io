var AtributeBTNs = document.getElementsByClassName('selection-item-link');

for(var i = 0 ;i < AtributeBTNs.length-1; i++){
        AtributeBTNs[0].onclick = function(){
        AtributeBTNs[0].style.background = "green";
        AtributeBTNs[0].style.color = "#fff";
    } 
}