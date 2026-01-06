let eten = ["pizza", "pondu", "francesinha", "eieren", "ollieballen"];

document.getElementById("result").innerHTML =
        "First item: " + eten[0] +
        "Last item: " + eten[eten.length - 1] +
        "Total items: " + eten.length;

eten[2] = "Art";

document.getElementById("bonus").innerHTML =
        "Updated list: " + eten;

console.log(eten[0]); 
console.log(eten[1]); 
console.log(eten[2]); 
console.log(eten[3]); 