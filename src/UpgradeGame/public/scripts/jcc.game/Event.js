var jcc;
(function (jcc) {
    var game;
    (function (game) {
        var Event = (function () {
            function Event() {
                this._listeners = [];
            }
            Event.prototype.addHandler = function (func) {
                this._listeners.push(func);
            };
            Event.prototype.removeHandler = function (func) {
                var index = this._listeners.indexOf(func);
                this._listeners.splice(index);
            };
            Event.prototype.raise = function (sender, args) {
                this._listeners.forEach(function (i) {
                    i(sender, args);
                });
            };
            return Event;
        })();
        game.Event = Event;
    })(game = jcc.game || (jcc.game = {}));
})(jcc || (jcc = {}));
//# sourceMappingURL=Event.js.map