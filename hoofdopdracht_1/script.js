function lightmode(){
    document.body.style.backgroundColor = "white";
    document.getElementById("title").innerHTML = "Good morning";
    document.getElementById("title").style.color = "black";
    document.getElementById("btnl").style.backgroundColor = "#E0E0E0";
    document.getElementById("btnl").style.color = "black";
    document.getElementById("btnd").style.backgroundColor = "#E0E0E0";
    document.getElementById("btnd").style.color = "black";
}

function darkmode(){
    document.body.style.backgroundColor = "black";
    document.getElementById("title").innerHTML = "Good night";
    document.getElementById("title").style.color = "white";
    document.getElementById("btnl").style.backgroundColor = "#303030";
    document.getElementById("btnl").style.color = "white";
    document.getElementById("btnd").style.backgroundColor = "#303030";
    document.getElementById("btnd").style.color = "white";
}