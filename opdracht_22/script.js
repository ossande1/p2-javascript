let snacks = []

function addSnack() {
    let input = document.getElementById("snackList");
    snacks.push(input.value);
    input.value = "";

    showSnacks();
}

function removeSnack() {
    snacks.pop();
    showSnacks();
}

function showSnacks() {
    let list = document.getElementById("lijst");
    list.innerHTML = "";

    for (let i = 0; i < snacks.length; i++) {
    list.innerHTML += "<li>" + snacks[i] + "</li>";
    }
}

document.getElementById("teller").innerText = "Totaal snacks: " + snacks.length;