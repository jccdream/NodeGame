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
            var deck = new card.Deck(2);
            this._cards = deck.cards;
        }
        
        pause(): void{
            
        }
        
        over(): void{
            
        }
        
        get members(): role.Member[]{
            return this._members;
        }
    }
    
    export class UpgradeGameRound{
        
        private _status: RoundStatus = RoundStatus.WaitingStart;
        private _cards: card.PokerCard[];
        private _bottomCards: card.PokerCard[];
        private _members: role.Member[];
        private _bottomCardsCount = 8;
        constructor(){
            
        }
        
        get status(): RoundStatus{
            return this._status;
        }
        
        sendCards(): IPromise<any>{
            this._bottomCards = this._cards.splice(0, this._bottomCardsCount);
            var p = new _Promise(100);
            var memberCount = this._members.length;
            for (var index = 0; index < this._cards.length; index++) {
                var element = this._cards[index];
                var memberIndex = (this._cards.length - this._bottomCardsCount) % memberCount;
                p.then(()=>this._sendCard(element, this._members[memberIndex]));
            }
            
            return p;
        }
        
        start(){
            this._init();
            this.sendCards().then(()=> this._confirmGradeCard());
        }
        
        
        
    }   
    
    export enum RoundStatus{
        WaitingStart,
        SendingCards,
        ConfirmingGradeCard,
        ConfirmingBottom,
        Playing,
        Finished
    }
}