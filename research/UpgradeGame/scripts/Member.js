var jcc;
(function (jcc) {
    var game;
    (function (game) {
        var Member = (function () {
            function Member() {
            }
            Object.defineProperty(Member.prototype, "name", {
                get: function () {
                    return this._name;
                },
                set: function (value) {
                    this._name = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Member.prototype, "id", {
                get: function () {
                    return this._id;
                },
                set: function (value) {
                    this._id = value;
                },
                enumerable: true,
                configurable: true
            });
            return Member;
        })();
        game.Member = Member;
    })(game = jcc.game || (jcc.game = {}));
})(jcc || (jcc = {}));
//# sourceMappingURL=Member.js.map