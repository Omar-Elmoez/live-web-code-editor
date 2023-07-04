document.getElementById("htmlCode").value="<div>\n\n</div>";
document.getElementById("cssCode").value="<style>\n\n</style>";
document.getElementById("jsCode").value="<script>\n\n</script>";

if(localStorage.getItem('html') !== null || localStorage.getItem('css') !== null || localStorage.getItem('js') !== null) {
    document.getElementById("htmlCode").value = localStorage.getItem('html');
    document.getElementById("cssCode").value = localStorage.getItem('css');
    document.getElementById("jsCode").value = localStorage.getItem('js');
}

function showPreview(){
    let htmlCode = document.getElementById("htmlCode").value;
    localStorage.setItem('html', htmlCode);
    let cssCode = document.getElementById("cssCode").value;
    localStorage.setItem('css', cssCode);
    let jsCode = document.getElementById("jsCode").value;
    localStorage.setItem('js', jsCode);
    let frame = document.getElementById("preview-window").contentWindow.document;
    frame.open();
    frame.write(htmlCode+cssCode+jsCode);
    frame.close();
}

function show(x){
    document.getElementById("html").style.display="none";
    document.getElementById("css").style.display="none";
    document.getElementById("js").style.display="none";
    document.getElementById("result").style.display="none";
    document.getElementById(x).style.display="block";
}

function show_all(){
    if(window.innerWidth>=992)
    {
        document.getElementById("html").style.display="block";
        document.getElementById("css").style.display="block";
        document.getElementById("js").style.display="block";
        document.getElementById("result").style.display="block";
    }
    if(window.innerWidth<992 && document.getElementById("html").style.display=="block")
    {
        document.getElementById("css").style.display="none";
        document.getElementById("js").style.display="none";
        document.getElementById("result").style.display="none";
    }
}
