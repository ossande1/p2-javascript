let resp = ["Ja","Nee","Misschien","Waarschijnlijk wel","Waarschijnlijk niet","Zeker wel","Zeker niet","Vraag later","In 10 jaren","Nooit"];

function show() {
  let v = document.getElementById("vraag").value;
  if (v === "") return alert("Typ een vraag!");

  let r = resp[Math.floor(Math.random() * resp.length)];

  document.getElementById("q").innerText = v;
  document.getElementById("a").innerText = r;
}

function reset() {
  document.getElementById("vraag").value = "";
  document.getElementById("q").innerText = "";
  document.getElementById("a").innerText = "";
}