module jcc.ng.role{
    export class Member{        
        public statusChanged = new Event();
        
        private _name:string;
        private _id:string;
        private _status:MemberStatus;
        private _isBanker = false;
        private _grade:card.PokerPoint;
        
        get grade(): card.PokerPoint{
            return this._grade;
        }       
        set grade(value: card.PokerPoint){
            this._grade = value;
        }
        
        get isBanker(): boolean{
            return this._isBanker;
        }
        set isBanker(value: boolean){
            this._isBanker = value;
        }
        
        get name(): string{
            return this._name;
        }
        set name(value: string){
            this._name = value;
        }
        
        get id(): string{
            return this._id;
        }
        set id(value: string){
            this._id = value;
        }
        
        getReady():void{
            this.status = MemberStatus.Ready;
        }
        
        cancelReady():void{
            this.status = MemberStatus.Idel;
        }
        
        get status():MemberStatus{
            return this._status;
        }
        set status(value:MemberStatus){
            this._status = value;
            this.statusChanged.raise(this,{});
        }
        
        
    }
    
    export enum MemberStatus{
        Idel,
        Ready,
        //InGame,        
    }
}