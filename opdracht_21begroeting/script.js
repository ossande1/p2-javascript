function begroet() {
  let naam = document.getElementById("naamVeld").value;
  
  if (naam === "") {
    alert("Typ eerst je naam!");
  } else {
    let resultaat = document.getElementById("resultaat");
    resultaat.innerHTML = "Hallo " + naam + "!";
    Input.value = ""
  }
}