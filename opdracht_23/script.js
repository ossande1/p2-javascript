const emoji = ["😡","😅","🩵","😱","🥸"];

let show = document.getElementById("show");

let index = 0;

show.textContent = emoji[index];

setInterval(function(){
    index++

    if(index === emoji.length){
        index = 0;
    }

    show.textContent = emoji[index]
}, 500)