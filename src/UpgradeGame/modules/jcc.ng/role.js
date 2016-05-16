var jcc;
(function (jcc) {
    var ng;
    (function (ng) {
        var role;
        (function (role) {
            var Member = (function () {
                function Member() {
                    this.statusChanged = new ng.Event();
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
            role.Member = Member;
            (function (MemberStatus) {
                MemberStatus[MemberStatus["Idel"] = 0] = "Idel";
                MemberStatus[MemberStatus["Ready"] = 1] = "Ready";
            })(role.MemberStatus || (role.MemberStatus = {}));
            var MemberStatus = role.MemberStatus;
        })(role = ng.role || (ng.role = {}));
    })(ng = jcc.ng || (jcc.ng = {}));
})(jcc || (jcc = {}));
//# sourceMappingURL=role.js.map