"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoManager = void 0;
var TodoManager = /** @class */ (function () {
    function TodoManager(name) {
        this.name = name;
        this.name = name;
        this.entries = [];
        this.ids = [];
    }
    TodoManager.prototype.add = function (text) {
        var id = 0;
        var entry = {
            id: id,
            name: this.name,
            text: text,
            tehtud: false
        };
        while (this.ids.includes(id)) {
            id++;
        }
        this.entries.push(entry);
        this.ids.push(id);
        return 'Task lisatud';
    };
    TodoManager.prototype.remove = function (id) {
        for (var i = 0; i < this.ids.length; i++) {
            if (id == this.ids[i]) {
                this.entries.splice(i, 1);
                this.ids.splice(i, 1);
                return 'Task kustutatud';
            }
        }
        return 'Taski ei leitud';
    };
    TodoManager.prototype.toggle = function (id) {
        var entry = this.entries.find(function (e) { return e.id == id; });
        if (entry) {
            entry.tehtud = !entry.tehtud;
            return true;
        }
        return false;
    };
    TodoManager.prototype.getEntries = function () {
        return this.entries;
    };
    return TodoManager;
}());
exports.TodoManager = TodoManager;
