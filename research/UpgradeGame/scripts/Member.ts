namespace jcc.game{
    export class Member{
        private _name:string;
        private _id:string;
        private _status:MemberStatus;
        
        public statusChanged = new Event();
        
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
            this.statusChanged.raise(this,this,{});
        }
    }
    
    export enum MemberStatus{
        Idel,
        Ready,
        //InGame,        
    }
}