namespace jcc.game{
    export class Table{
        private _members: Member[] = [];
        private _game: UpgradeGame;
        
        addMember(member: Member):void{
            this._members.push(member);
        }
    }
}