"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Veebiuudis = exports.Kiri = void 0;
var db = [];
var Kiri = /** @class */ (function () {
    function Kiri(title, text) {
        this.title = title;
        this.text = text;
        this.title = title;
        this.text = text;
    }
    Kiri.prototype.kirjuta = function () {
        return [this.title, this.text];
    };
    return Kiri;
}());
exports.Kiri = Kiri;
var Veebiuudis = /** @class */ (function (_super) {
    __extends(Veebiuudis, _super);
    function Veebiuudis(title, text, url) {
        var _this = _super.call(this, title, text) || this;
        _this.title = title;
        _this.text = text;
        _this.url = url;
        _this.url = url;
        return _this;
    }
    Veebiuudis.prototype.kirjuta = function () {
        return [this.title, this.text, this.url];
    };
    return Veebiuudis;
}(Kiri));
exports.Veebiuudis = Veebiuudis;
//NÄITRAKENDUSE OSA
//üksikutena
var test1 = new Kiri("test 1", "aias sadas saia");
var test2 = new Veebiuudis("test 2", "aaaaaaa", "www.eesti.ee");
//kogumis
db.push(test1);
db.push(test2);
console.log(db);
