namespace jcc.game{
    export class UpgradeGame{
        private _name:string;
        private _members: Member[] = [];
        
        get name(): string{
            return this._name;
        }
        set name(value: string){
            this._name = value;
        }
        
        start(): void{
            
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