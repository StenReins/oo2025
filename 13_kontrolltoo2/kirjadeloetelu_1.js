var db = [];
var Kiri = /** @class */ (function () {
    function Kiri(title, text) {
        this.title = title;
        this.text = text;
        this.title = title;
        this.text = text;
    }
    Kiri.prototype.addText = function () {
        db.push(this.title, this.text);
    };
    return Kiri;
}());
var testing = new Kiri("Test", "Aias sadas saia");
var testing2 = new Kiri("test2", "aaaaaa");
testing.addText();
testing2.addText();
console.log(db);
