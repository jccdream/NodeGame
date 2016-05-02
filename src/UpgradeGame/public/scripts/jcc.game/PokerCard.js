var jcc;
(function (jcc) {
    var game;
    (function (game) {
        var PokerCard = (function () {
            function PokerCard(id, color, points) {
                this._color = color;
                this._points = points;
                this._id = id;
            }
            Object.defineProperty(PokerCard.prototype, "id", {
                get: function () {
                    return this._id;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(PokerCard.prototype, "color", {
                get: function () {
                    return this._color;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(PokerCard.prototype, "points", {
                get: function () {
                    return this._points;
                },
                enumerable: true,
                configurable: true
            });
            PokerCard.prototype.toString = function () {
                var color, points;
                switch (this.color) {
                    case PokerColor.Heart:
                        color = 'Heart';
                        break;
                    case PokerColor.Spade:
                        color = 'Spade';
                        break;
                    case PokerColor.Club:
                        color = 'Club';
                        break;
                    case PokerColor.Diamond:
                        color = 'Diamond';
                        break;
                    case PokerColor.LittleJoker:
                        return 'Little Joker';
                    case PokerColor.BigJoker:
                        return 'Big Joker';
                    default:
                        throw "Invalid Card!";
                }
                if (this.points === 1) {
                    points = 'A';
                }
                else if (this.points === 11) {
                    points = 'J';
                }
                else if (this.points === 12) {
                    points = 'Q';
                }
                else if (this.points === 13) {
                    points = 'K';
                }
                else {
                    points = this.points.toString();
                }
                return color + ' ' + points;
            };
            return PokerCard;
        })();
        game.PokerCard = PokerCard;
        (function (PokerColor) {
            PokerColor[PokerColor["Heart"] = 0] = "Heart";
            PokerColor[PokerColor["Spade"] = 1] = "Spade";
            PokerColor[PokerColor["Club"] = 2] = "Club";
            PokerColor[PokerColor["Diamond"] = 3] = "Diamond";
            PokerColor[PokerColor["LittleJoker"] = 4] = "LittleJoker";
            PokerColor[PokerColor["BigJoker"] = 5] = "BigJoker";
        })(game.PokerColor || (game.PokerColor = {}));
        var PokerColor = game.PokerColor;
    })(game = jcc.game || (jcc.game = {}));
})(jcc || (jcc = {}));
//# sourceMappingURL=PokerCard.js.map