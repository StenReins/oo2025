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
exports.Sentence = exports.Word = exports.Text = void 0;
var Text = /** @class */ (function () {
    function Text() {
    }
    Text.prototype.countLetter = function (input) {
        var count = 0;
        for (var _i = 0, _a = this.getContent(); _i < _a.length; _i++) {
            var letter = _a[_i];
            if (letter == input) {
                count++;
            }
        }
        return count;
    };
    return Text;
}());
exports.Text = Text;
var Word = /** @class */ (function (_super) {
    __extends(Word, _super);
    function Word(word) {
        var _this = _super.call(this) || this;
        _this.word = word;
        return _this;
    }
    Word.prototype.getContent = function () {
        return this.word;
    };
    return Word;
}(Text));
exports.Word = Word;
var Sentence = /** @class */ (function (_super) {
    __extends(Sentence, _super);
    function Sentence(sentence) {
        var _this = _super.call(this) || this;
        _this.words = [];
        var wordObjects = {};
        _this.words = sentence.split(' ').map(function (w) {
            if (!wordObjects[w]) {
                wordObjects[w] = new Word(w);
            }
            return wordObjects[w];
        });
        return _this;
    }
    Sentence.prototype.getContent = function () {
        return this.words.map(function (word) { return word.getContent(); }).join("");
    };
    Sentence.prototype.countLetter = function (letter) {
        return this.words.reduce(function (sum, word) { return sum + word.countLetter(letter); }, 0);
    };
    return Sentence;
}(Text));
exports.Sentence = Sentence;
var test = new Sentence("aias sadas saia");
console.log(test.countLetter("a"));
