/// <reference path="card.ts" />

namespace jcc.ng.game{
    export class UpgradeGame{
        private _name:string;
        private _members: role.Member[] = [];
        private _cards: jcc.ng.card.PokerCard[];
        
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
            //this._sendCards();
        }
        
        _initCards(){
            
        }
        
        pause(): void{
            
        }
        
        over(): void{
            
        }
        
        get members(): role.Member[]{
            return this._members;
        }
    }   
}