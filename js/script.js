function CopyToClipboard(id){
    let r = document.createRange();
    r.selectNode(document.getElementById(id));
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(r);
    document.execCommand('copy');
    window.getSelection().removeAllRanges();
}

$(function () {
    $("#myEmail").tooltip();
})
let navMode="navbar-light";

let mode = document.getElementById("mode");
mode.onclick = function(){
    document.body.classList.toggle("darkMode");
    if(document.body.classList.contains("darkMode")){
        mode.src ="images/sun.png";
    }else{
        mode.src ="images/moon.png";
    }
}

