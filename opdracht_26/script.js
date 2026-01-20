let nummers = [
    {titel: "No role modelz😮‍💨", artiest: "J.cole", duur: "4:53"},
    {titel: "Imprevisto😌", artiest: "Yago Opproprio", duur: "2:20"},
    {titel: "La Noche😢", artiest: "Yago Opproprio", duur: "3:22"},
    {titel: "Kevin's heart🥹", artiest: "J.cole", duur: "3:21"},
    {titel: "Survival Tactics🥶", artiest: "Joey Badass", duur: "3:23"}
];

for (let item of nummers) {
  document.getElementById("show").innerHTML += (item.titel + " - "
     + item.artiest + "(" + item.duur + ")<br>");
  console.log(item.titel + " - "
     + item.artiest + "(" + item.duur + ")");
};