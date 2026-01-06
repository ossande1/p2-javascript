let emojis = ["☝️","🤗","👀","👇","🔥","🥇"];

function show(){
    let randomIndex = Math.floor(Math.random() * emojis.length);
    document.getElementById("result").innerHTML = emojis[randomIndex];
    document.getElementById("index").innerHTML = "Index: " + randomIndex;
}