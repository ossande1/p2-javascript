let teller = 0;

function updateUI() {
    const counter = document.getElementById("counter");
    const phrase = document.getElementById("phrase");
    const overlay = document.getElementById("overlay");
    const text = document.getElementById("text")

    counter.innerHTML = teller;

    if (teller >= 20) {
        text.innerHTML = "Klasse-traktatie!"
        counter.style.color = "darkblue"
    }else if (teller >= 17) {
        counter.style.color = "blue"
    }else if (teller >= 15) {
        counter.style.color = "lightblue"
    }else if (teller >= 13) {
        counter.style.color = "blue"
    }else if (teller >= 11) {
        counter.style.color = "darkblue"
    } else if (teller >= 10) {
        overlay.style.display = "block"
        text.innerHTML = "You won!";
        counter.style.color = "darkblue"
    }else if(teller >= 5) {
        phrase.innerHTML = "Dat begint ergens op te lijken 😋"
        counter.style.color = "blue"
    }else if(teller >= 3) {
        counter.style.color = "lightblue"
    }else if(teller >= 1){
        document.getElementById("pizza").style.display = "block"
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

function again() {
    document.getElementById("overlay").style.display = "none"
}

