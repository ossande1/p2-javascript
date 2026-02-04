let hunger = 100;
let energy = 100;
let happiness = 100;

document.getElementById("statusMessage").innerHTML =  "Je Tamagotchi is gelukkig!";
document.getElementById("statusMessage").style.color = "green"

setInterval(function () {
    hunger--;
    energy--;
    happiness--;

    updateUI();
    checkBounds();
    lost();
}, 1000);

function updateUI() {
    document.getElementById("hungertoon").innerHTML = hunger;
    document.getElementById("energytoon").innerHTML = energy;
    document.getElementById("happinesstoon").innerHTML = happiness;
}
;
function feedbtn() {
    hunger += 10;
    checkBounds();
    updateUI();
};

document.getElementById("feed").addEventListener("click", feedbtn);

function sleepbtn() {
    energy += 10;
    checkBounds();
    updateUI();
};

document.getElementById("sleep").addEventListener("click", sleepbtn);

function playbtn() {
    happiness += 10;
    checkBounds();
    updateUI();
};

document.getElementById("play").addEventListener("click", playbtn);

function checkBounds() {
    if (hunger < 0) hunger = 0;
    if (hunger > 100) hunger = 100;

    if (energy < 0) energy = 0;
    if (energy > 100) energy = 100;

    if (happiness < 0) happiness = 0;
    if (happiness > 100) happiness = 100;
};

function off() {
    document.getElementById("overlay").style.display = "none";
};

function lost() {
    if (hunger === 0 && energy === 0 && happiness === 0) {
        document.getElementById("statusMessage").innerHTML = "Je Tamagotchi is dood!"
        document.getElementById("statusMessage").style.color = "red"
    }
};