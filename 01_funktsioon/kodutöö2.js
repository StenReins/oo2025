//Ruutvõrrandi lahendamise funktsioon
function quadraticEquation2(a, b, c) {
    var diskriminant = b * b - 4 * a * c;
    var lahendus1 = (-b + Math.sqrt((b * b - 4 * a * c))) / (2 * a);
    var lahendus2 = (-b - Math.sqrt((b * b - 4 * a * c))) / (2 * a);
    if (diskriminant > 0) {
        console.log("x1: " + lahendus1 + ", x2: " + lahendus2);
    }
    else if (diskriminant == 0) {
        lahendus1 = lahendus2 = -b / (2 * a);
        console.log("X on " + lahendus1);
    }
    else {
        console.log("Ruutfunktsioonil pole lahendust");
    }
}
//TESTIMISEKS
console.log("TEHE KAHE LAHENDUSEGA");
quadraticEquation2(2, 5, -3);
console.log("TEHE ILMA LAHENDUSETA");
quadraticEquation2(2, 3, 5);
console.log("TEHE ÜHE LAHENDUSEGA");
quadraticEquation2(1, -4, 4);
quadraticEquation2(1, -8, 15);
