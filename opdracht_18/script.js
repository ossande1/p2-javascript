let pass = document.getElementById("psw")

pass.addEventListener("input", passteller)

function measure() {
  
  const warn = document.getElementById("teller")

  var x = document.getElementById("psw").value.length;
  document.getElementById("say").innerHTML = x;

  if(x >= 6) {
        warn.innerHTML = "Sterk wachtwoord!"
        warn.style.color = "green"
    } else if(x < 6) {
        warn.innerHTML = "Wachtwoord te kort"
        warn.style.color = "red"
    }
    
}