namespace jcc.game{
    export class UpgradeGame{
        private _name:string;
        private _members: Member[] = [];
        private _cards: Card[];
        
        get name(): string{
            return this._name;
        }
        set name(value: string){
            this._name = value;
        }
        
        start(): void{
            this._startRound();
        }
        
        _startRound(){
            this._initCards();
            this._sendCards();
        }
        
        _initCards(){
            
        }
        
        pause(): void{
            
        }
        
        over(): void{
            
        }
        
        get members(): Member[]{
            return this._members;
        }
    }
}