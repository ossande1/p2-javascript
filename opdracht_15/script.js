let teller = 0;

function updateUI() {
    const counter = document.getElementById("counter");
    const phrase = document.getElementById("phrase");

    counter.innerHTML = teller;

    if (teller >= 5) {
        phrase.innerHTML = "Pauze? Water is ook lekker";
        phrase.style.color = "red";
    } else if (teller >= 3) {
        phrase.innerHTML = "Dat zijn er best veel…";
        phrase.style.color = "orange";
    } else if (teller >= 1) {
        phrase.innerHTML = "Dank je wel!";
        phrase.style.color = "green";
    } else {
        phrase.innerHTML = "";
    }
}

function adder() {
    teller += 1;
    updateUI();
}

function remover() {
    if (teller > 0) {
        teller -= 1;
    }
    updateUI();
}

function res() {
    teller = 0;
    updateUI();
}