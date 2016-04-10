namespace jcc.game{
    export class Event{
        private _listeners: Function[] = [];
        
        addEvent(func:Function):void{
            this._listeners.push(func);
        }
        
        removeEvent(func:Function):void{
            var index = this._listeners.indexOf(func);
            this._listeners.splice(index);
        }
        
        raise(caller: any, sender: any, args: any): void{
            this._listeners.forEach(i=>{
                i.call(caller, sender, args);
            });
        }
    }
}