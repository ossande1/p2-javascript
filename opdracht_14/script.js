const drink = prompt("Wat wil je drinken: cola, water of koffie?")

if (drink === "cola"){
    document.getElementById("phrase").innerHTML = "Je krijgt een blikje cola 🥤";
    document.getElementById("phrase").style.color = "red";
}
else if (drink === "water"){
    document.getElementById("phrase").innerHTML = "Goed bezig, lekker gezond 💧";
    document.getElementById("phrase").style.color = "blue";
}
else if (drink === "koffie"){
    document.getElementById("phrase").innerHTML = "Energie incoming ☕";
    document.getElementById("phrase").style.color = "brown";
} else {
    document.getElementById("phrase").innerHTML = "Dat drankje is helaas op";
}