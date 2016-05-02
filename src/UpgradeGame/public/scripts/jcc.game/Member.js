var jcc;
(function (jcc) {
    var game;
    (function (game) {
        var Member = (function () {
            function Member() {
                this.statusChanged = new game.Event();
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
            Member.prototype.getReady = function () {
                this.status = MemberStatus.Ready;
            };
            Member.prototype.cancelReady = function () {
                this.status = MemberStatus.Idel;
            };
            Object.defineProperty(Member.prototype, "status", {
                get: function () {
                    return this._status;
                },
                set: function (value) {
                    this._status = value;
                    this.statusChanged.raise(this, {});
                },
                enumerable: true,
                configurable: true
            });
            return Member;
        })();
        game.Member = Member;
        (function (MemberStatus) {
            MemberStatus[MemberStatus["Idel"] = 0] = "Idel";
            MemberStatus[MemberStatus["Ready"] = 1] = "Ready";
        })(game.MemberStatus || (game.MemberStatus = {}));
        var MemberStatus = game.MemberStatus;
    })(game = jcc.game || (jcc.game = {}));
})(jcc || (jcc = {}));
//# sourceMappingURL=Member.js.map