var Ülesanne = /** @class */ (function () {
    function Ülesanne(eesnimi, ülesanne, ülesandekirjeldus, kategooria) {
        this.eesnimi = eesnimi;
        this.ülesanne = ülesanne;
        this.ülesandekirjeldus = ülesandekirjeldus;
        this.kategooria = kategooria;
        this.ülesanded = [];
    }
    Ülesanne.prototype.submitEntry = function () {
        eesnimi = document.querySelector('eesNimi');
        ülesanne = document.querySelector('ülesanne');
        ülesandekirjeldus = document.querySelector('ülesandeKirjeldus');
        kategooria = document.querySelector('kategooria');
        ülesanded.push(eesnimi, ülesanne, ülesandekirjeldus, kategooria);
    };
    return Ülesanne;
}());
