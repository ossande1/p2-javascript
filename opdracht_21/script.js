let activi = ["wandelen", "mediteren", "een dutje doen"];

let thema = ["een kop thee", "je favoriete boek", "je telefoon uitzetten"];

function show(){
    let adviesactivi = Math.floor(Math.random() * activi.length);
    document.getElementById("act").innerHTML = activi[adviesactivi];
    let adviesthema = Math.floor(Math.random() * thema.length);
    document.getElementById("the").innerHTML = thema[adviesthema];
}

let bonus = ["een kop thee", "je favoriete boek", "je telefoon uitzetten", "een kop thee", "je favoriete boek", "je telefoon uitzetten"];

function showbonus(){
    let adviesbonus1 = Math.floor(Math.random() * bonus.length);
    document.getElementById("actb").innerHTML = bonus[adviesbonus1];
    let adviesbonus2 = Math.floor(Math.random() * bonus.length - 2);
    document.getElementById("theb").innerHTML = bonus[adviesbonus2];
}