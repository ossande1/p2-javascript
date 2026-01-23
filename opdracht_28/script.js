let broth = [
    {naam: "Water", emoji: "🌊", rating: "4"},
    {naam: "tomatosoup", emoji: "🍅", rating: "7"}
];

let noodles  = [
    {naam: "Bucatini", emoji: "🍝", rating: "9"},
    {naam: "Pappardelle", emoji: "🔄", rating: "5"}
];

let toppings  = [
    {naam: "egg", emoji: "🥚", rating: "10"},
    {naam: "meat", emoji: "🍖", rating: "10"}
];

let spiceLevel  = [
    {naam: "japalleno", emoji: "🌶️", rating: "6"},
    {naam: "moruga scorpion", emoji: "🔥", rating: "8"}
];

function choose(){
    let randombroth = Math.floor(Math.random() * broth.length);
    let brothon = broth[randombroth];

    let randomnood = Math.floor(Math.random() * noodles.length);
    let noodon = noodles[randomnood];

    let randomtop = Math.floor(Math.random() * toppings.length);
    let topon = toppings[randomtop];

    let randomspi = Math.floor(Math.random() * spiceLevel.length);
    let spion = spiceLevel[randomspi];
    
    document.getElementById("show").innerHTML =
    "Broth: " + brothon.naam + " Emoji: " + brothon.emoji + " Rating: " + brothon.rating + "<br>" +
    "Noodles: " + noodon.naam + " Emoji: " + noodon.emoji + " Rating: " + noodon.emoji + "<br>" +
    "Toppings: " + topon.naam + " Emoji: " + topon.emoji + " Rating: " + topon.rating + "<br>" +
    "Spicelevel: " + spion.naam + " Emoji: " + spion.emoji + " Rating: " + spion.rating;
}