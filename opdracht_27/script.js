let pokemon = [
    {naam: "torchic", type: "fire", powerlevel: "4", emoji: "🐤🔥"},
    {naam: "treecko", type: "grass", powerlevel: "2", emoji: "🦎🍃"},
    {naam: "mudkip", type: "water", powerlevel: "3", emoji: "🐸💧"},
]; 

function chosen() {
    let randomIndex = Math.floor(Math.random() * pokemon.length);
    let gekozenPokemon = pokemon[randomIndex];

    document.getElementById("show").innerHTML =
        "Naam: " + gekozenPokemon.naam + "<br>" +
        "Type: " + gekozenPokemon.type + "<br>" +
        "Powerlevel: " + gekozenPokemon.powerlevel + "<br>" +
        "Emoji: " + gekozenPokemon.emoji;
}

/* function chosen() {
    for (let item of pokemon) {
    let adviesactivi = Math.floor(Math.random() * pokemon);
    document.getElementById("show").innerHTML = ("Naam: " +  item.naam[adviesactivi]  + "<br>" + 
    "Type: " + item.type[adviesactivi] + "<br>" + "Powerlevel: " + item.powerlevel[adviesactivi] + "<br>" +
    "Emoji: " + item.emoji[adviesactivi]);
 }
} 

 let pokemon = [
    {naam: "torchic, type: fire, powerlevel: 4, emoji: 🐤🔥"},
    {naam: "pikachu, type: electric, powerlevel: 2, emoji: 🐹⚡"},
    {naam: "treecko, type: grass, powerlevel: 3, emoji: 🦎🍃"},
    {naam: "mudkip, type: water, powerlevel: 4, emoji: 🐸💧"},
    {naam: "chimchar, type: fire, powerlevel: 3, emoji: 🐵🔥"}
];

function chosen() {
    for (let item of pokemon) {
    document.getElementById("show").innerHTML =  Math.floor(Math.random() * item.naam)
 }
} */

