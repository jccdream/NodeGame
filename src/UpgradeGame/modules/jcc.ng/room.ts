///<reference path="./role.ts"/>
///<reference path="./game.ts"/>

namespace jcc.ng.room {
    export class Table {
        private _members: role.Member[] = [];
        private _game: game.UpgradeGame;
        private _maxMembersCount = 0;
        private _minMembersCount = 0;

        addMember(member: role.Member, position: number): void {
            if (this._members[position]) {
                throw 'The position is seated by other member. Please choose other position.';
            }

            if (position < 0 || position > this._maxMembersCount - 1) {
                throw 'Invaid position!';
            }

            this._members[position] = member;
            member.statusChanged.addHandler(this._memberStatusChanged);
        }

        _memberStatusChanged() {
            if (this._isEnoughMembersReady()) {
                this._startGame();
            }
        }

        _startGame() {
            this._game = new game.UpgradeGame();
            this._members.forEach(m => this._game.members.push(m));
            this._game.start();
        }

        _isEnoughMembersReady(): boolean {
            var members = [];
            if (!this._members.every(m => {
                if (m.status === role.MemberStatus.Ready) {
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
        }

        removeMember(memberOrIndex: any) {
            var index = typeof memberOrIndex === 'number' ? memberOrIndex : this._members.indexOf(memberOrIndex);
            if (index >= 0 && index < this._maxMembersCount) {
                var member = this._members[index];
                member.statusChanged.removeHandler(this._memberStatusChanged);
                this._members[index] = null;
            }
        }

        setMembersCount(max: number, min: number): void {
            if (max < min) {
                throw 'max should not be less than min.';
            }

            this._members = [];
            this._members.length = max;
            this._maxMembersCount = max;
            this._minMembersCount = min;
        }

        get maxMembersCount(): number {
            return this._maxMembersCount;
        }

        get minMembersCount(): number {
            return this._minMembersCount;
        }
    }
}