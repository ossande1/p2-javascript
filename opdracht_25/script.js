var col = ["blue", "red", "green", "yellow", "orange", "brown", "violet", "pink"]


setInterval(function (){

    let colpick = Math.floor(Math.random() * col.length);
    document.querySelector("body").style.backgroundColor = col[colpick];
    document.getElementById("toon").style.backgroundColor = col[colpick -1]

}, 1000)

