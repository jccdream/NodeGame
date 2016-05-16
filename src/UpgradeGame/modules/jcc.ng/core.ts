namespace jcc.ng{
    export class Event{
        private _listeners: Function[] = [];
        
        addHandler(func:Function):void{
            this._listeners.push(func);
        }
        
        removeHandler(func:Function):void{
            var index = this._listeners.indexOf(func);
            this._listeners.splice(index);
        }
        
        raise(sender: any, args: any): void{
            this._listeners.forEach(i=>{
                i(sender, args);
            });
        }
    }
}