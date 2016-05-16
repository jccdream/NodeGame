///<reference path="./role.ts"/>
///<reference path="./game.ts"/>
var jcc;
(function (jcc) {
    var ng;
    (function (ng) {
        var room;
        (function (room) {
            var Table = (function () {
                function Table() {
                    this._members = [];
                    this._maxMembersCount = 0;
                    this._minMembersCount = 0;
                }
                Table.prototype.addMember = function (member, position) {
                    if (this._members[position]) {
                        throw 'The position is seated by other member. Please choose other position.';
                    }
                    if (position < 0 || position > this._maxMembersCount - 1) {
                        throw 'Invaid position!';
                    }
                    this._members[position] = member;
                    member.statusChanged.addHandler(this._memberStatusChanged);
                };
                Table.prototype._memberStatusChanged = function () {
                    if (this._isEnoughMembersReady()) {
                        this._startGame();
                    }
                };
                Table.prototype._startGame = function () {
                    var _this = this;
                    this._game = new ng.game.UpgradeGame();
                    this._members.forEach(function (m) { return _this._game.members.push(m); });
                    this._game.start();
                };
                Table.prototype._isEnoughMembersReady = function () {
                    var members = [];
                    if (!this._members.every(function (m) {
                        if (m.status === ng.role.MemberStatus.Ready) {
                            members.push(m);
                            return true;
                        }
                        return false;
                    })) {
                        return false;
                    }
                    if (members.length < this._minMembersCount && members.length > this._maxMembersCount) {
                        return false;
                    }
                    return true;
                };
                Table.prototype.removeMember = function (memberOrIndex) {
                    var index = typeof memberOrIndex === 'number' ? memberOrIndex : this._members.indexOf(memberOrIndex);
                    if (index >= 0 && index < this._maxMembersCount) {
                        var member = this._members[index];
                        member.statusChanged.removeHandler(this._memberStatusChanged);
                        this._members[index] = null;
                    }
                };
                Table.prototype.setMembersCount = function (max, min) {
                    if (max < min) {
                        throw 'max should not be less than min.';
                    }
                    this._members = [];
                    this._members.length = max;
                    this._maxMembersCount = max;
                    this._minMembersCount = min;
                };
                Object.defineProperty(Table.prototype, "maxMembersCount", {
                    get: function () {
                        return this._maxMembersCount;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Table.prototype, "minMembersCount", {
                    get: function () {
                        return this._minMembersCount;
                    },
                    enumerable: true,
                    configurable: true
                });
                return Table;
            })();
            room.Table = Table;
        })(room = ng.room || (ng.room = {}));
    })(ng = jcc.ng || (jcc.ng = {}));
})(jcc || (jcc = {}));
//# sourceMappingURL=room.js.map