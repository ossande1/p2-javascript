let box = document.getElementById("blok");

box.addEventListener("mouseover", blueblok,);
box.addEventListener("mouseout", redblok,);

function blueblok() {
  box.style.backgroundColor = "blue"
  box.innerHTML = "Nice hover"
  box.style.width = "400px"
  box.style.height = "400px"
  box.style.borderRadius = "20px"
  box.style.fontSize = "100px"
}

function redblok() {
  box.style.backgroundColor = "red"
  box.innerHTML = ""
  box.style.width = "200px"
  box.style.height = "200px"
  box.style.borderRadius = ""
}