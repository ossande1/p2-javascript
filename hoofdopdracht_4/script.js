let tijd = 1500;

let timer;

function formatTijd(seconden) {
  let min = Math.floor(seconden / 60);
  let sec = seconden % 60;
  if (sec < 10) sec = "0" + sec;
  return min + ":" + sec;
}

function update() {
  let display = document.getElementById("timers");
  display.innerHTML = formatTijd(tijd);
}

function end() {
  tijd--;
  update();
  
  if (tijd === 0) {
    clearInterval(timer);
    alert("Klaar!");
    document.querySelector("body").style.backgroundColor = "green"
  }
}

function start() {
  timer = setInterval(end, 1000);

}

function pause() {
  clearInterval(timer);
}

function reset() {
  clearInterval(timer);
  tijd = 1500;
  document.querySelector("body").style.backgroundColor = "white"
  update();
}

