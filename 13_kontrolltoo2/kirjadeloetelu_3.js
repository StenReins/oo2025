var ids = [];
var texts = [];
var canvas = document.querySelector('#canvas');
var ctx = canvas === null || canvas === void 0 ? void 0 : canvas.getContext("2d");
var Kiri = /** @class */ (function () {
    function Kiri(title, text, refs) {
        this.title = title;
        this.text = text;
        this.refs = refs;
        this.id = Math.floor(Math.random() * 100);
        this.title = title;
        this.text = text;
        texts.push(this.title, this.text, this.id, this.refs);
        this.addIdToList();
        this.addTextToCanvas();
    }
    Kiri.prototype.addIdToList = function () {
        var references = document.querySelector('#refs');
        var option = document.createElement('option');
        option.value = String(this.id);
        option.textContent = String(this.id);
        references === null || references === void 0 ? void 0 : references.appendChild(option);
    };
    Kiri.prototype.addTextToCanvas = function () {
        var rx = Math.floor(Math.random() * 900);
        var ry = Math.floor(Math.random() * 900);
        if (ctx) {
            ctx.beginPath();
            ctx.fillStyle = "black";
            ctx.font = "20px serif";
            ctx.fillText("".concat(this.title, " (Viited:").concat(this.refs, "): ").concat(this.text), rx, ry);
            ctx.closePath();
        }
    };
    Kiri.prototype.debug = function () {
        console.log(this.title, this.text, this.id, this.refs);
    };
    Kiri.prototype.addRef = function (ref) {
        for (var i = 0; i < ids.length; i++) {
            if (ids[i] == ref) {
                this.refs.push(ids[i]);
            }
        }
    };
    return Kiri;
}());
document.addEventListener('DOMContentLoaded', function () {
    var submit = document.querySelector('#submit');
    submit.addEventListener('click', function () {
        var title = document.querySelector('#title').value;
        var text = document.querySelector('#text').value;
        var refsSelect = document.querySelector('#refs');
        var selectedRefs = Array.from(refsSelect.selectedOptions).map(function (opt) { return Number(opt.value); });
        new Kiri(title, text, selectedRefs);
    });
});
