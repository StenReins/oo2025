//Ruutvõrrandi lahendamise funktsioon
function quadraticEquation(a, b, c) {
    var lahendus1 = (-b + Math.sqrt((b * b - 4 * a * c))) / (2 * a);
    var lahendus2 = (-b - Math.sqrt((b * b - 4 * a * c))) / (2 * a);
    if (isNaN(lahendus1) || isNaN(lahendus2)) {
        console.log("Lahendus puudub");
    }
    if (lahendus1 == lahendus2) {
        console.log("X on " + lahendus1);
    }
    else if (!isNaN(lahendus1) || !isNaN(lahendus2)) {
        console.log("Esimene x:" + lahendus1);
        console.log("Teine x: " + lahendus2);
    }
}
//TESTIMISEKS
console.log("TEHE KAHE LAHENDUSEGA");
quadraticEquation(2, 5, -3);
console.log("TEHE ILMA LAHENDUSETA");
quadraticEquation(2, 3, 5);
console.log("TEHE ÜHE LAHENDUSEGA");
quadraticEquation(1, -4, 4);
