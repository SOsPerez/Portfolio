

    function darkMode() {
        let element = document.body;
        element.classList.toggle("dark-mode");
    }
    
    
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



