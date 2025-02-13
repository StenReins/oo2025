//Ruutvõrrandi lahendamise funktsioon

function quadraticEquation2(a:number, b:number, c:number){
    let diskriminant:number = b*b - 4*a*c
    let lahendus1:number = (-b+Math.sqrt((b*b-4*a*c)))/(2*a);
    let lahendus2:number = (-b-Math.sqrt((b*b-4*a*c)))/(2*a);

    if (diskriminant>0){
        console.log("x1: " + lahendus1 + ", x2: " + lahendus2)
    }

    else if(diskriminant==0){
        lahendus1 = lahendus2 = -b/(2*a);
        console.log("X on " + lahendus1);
    }
    else{
        console.log("Ruutfunktsioonil pole lahendust")
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