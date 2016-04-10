// <reference path="Member.ts">
var jcc;
(function (jcc) {
    var game;
    (function (game) {
        var UpgradeGame = (function () {
            function UpgradeGame() {
                this._members = [];
            }
            Object.defineProperty(UpgradeGame.prototype, "name", {
                get: function () {
                    return this._name;
                },
                set: function (value) {
                    this._name = value;
                },
                enumerable: true,
                configurable: true
            });
            UpgradeGame.prototype.start = function () {
            };
            UpgradeGame.prototype.pause = function () {
            };
            UpgradeGame.prototype.over = function () {
            };
            Object.defineProperty(UpgradeGame.prototype, "members", {
                get: function () {
                    return this._members;
                },
                enumerable: true,
                configurable: true
            });
            return UpgradeGame;
        })();
        game.UpgradeGame = UpgradeGame;
    })(game = jcc.game || (jcc.game = {}));
})(jcc || (jcc = {}));
//# sourceMappingURL=UpgradeGame.js.map