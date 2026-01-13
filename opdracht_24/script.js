const load = ["10%","20%","30%","40%","50%","60%","70%","80%","90%","100%",];

let show = document.getElementById("show");

let emoji = document.getElementById("emoji");

let balk = document.getElementById("balk");

let index = 0;

show.textContent = load[index];

setInterval(function(){
    index++

    if(index === 1){
        emoji.textContent = "🐢";
        balk.style.color = "orange";
    } else if( index === 6){
        emoji.textContent = "🏃‍♂️";
        balk.style.color = "yellow";
    } else if(index === 11){
        emoji.textContent = "🥇";
        balk.style.color = "green";
        balk.textContent = "Loading complete!"
    }

    show.textContent = load[index];
}, 1000);