var eesnimi = "Juku";
var vanus = 6;
console.log("abc");
console.log("tere, " + eesnimi);
if (vanus < 7) {
    console.log("Tasuta");
}
else {
    console.log("Osta pilet");
    // Teata, kas tuleb osta lapsepilet või täispilet
    if (vanus <= 16) {
        console.log("Lapsepilet");
    }
    else {
        console.log("Täispilet");
    }
}
var symbolid = [];
for (var nr = 0; nr < vanus; nr++) {
    symbolid.push("*");
}
console.log(symbolid.join(""));
