var jcc;
(function (jcc) {
    var ng;
    (function (ng) {
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
        ng.Event = Event;
    })(ng = jcc.ng || (jcc.ng = {}));
})(jcc || (jcc = {}));
//# sourceMappingURL=core.js.map