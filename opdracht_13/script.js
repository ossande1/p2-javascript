let age = prompt("Hoe oud ben jij?");

let permission = 18;

if (age >= permission && permission >= 65){
    document.getElementById("phrase").innerHTML = "Welkom, volwassen bezoeker!";
    document.getElementById("phrase").style.color = "green";
}else if(age < permission){
    document.getElementById("phrase").innerHTML = "Je mag hier nog niet naar binnen.";
    document.getElementById("phrase").style.color = "red";
}else if(age >= permission && permission <= 65){
    document.getElementById("phrase").innerHTML = "Welkom, senior bezoeker!";
    document.getElementById("phrase").style.color = "green";
}