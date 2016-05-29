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
    
    /**
     * Defines the interface of promise which is used for asynchronous calling.
     */
    export interface IPromise<T> {
        /**
         * Call the function after the promise is fulfilled or rejected.
         *
         * @param onFulfilled The function which will be executed when the promise is fulfilled.
         * This has a single parameter, the fulfillment value. If returns a value, it will be 
         * passed to next callback function. If no return values, the origin value will be passed to next.
         * @param onRejected The function which will be executed when the promise is rejected.
         * This has a single parameter, the rejection reason. If returns a value, it will be 
         * passed to next callback function. If no return values, the origin value will be passed to next.
         * @return An IPromise equivalent to the value you return from onFulfilled/onRejected after being passed.
         */
        then(onFulfilled?: (value?: T) => T, onRejected?: (reason?: any) => T): IPromise<T>;

        /**
         * Call the function after the promise is rejected.
         *
         * @param onRejected The function which will be executed when the promise is rejected.
         * This has a single parameter, the rejection reason. The return value will be 
         * passed to next callback function.
         * @return An IPromise equivalent to the value you return from onFulfilled/onRejected after being passed.
         */
        catch(onRejected: (reason?: any) => T): IPromise<T>;
    }

    interface _IPromiseCallback<T> {
        onFulfilled?: (value?: T) => T;
        onRejected?: (reason?: any) => T;
    }

    export class _Promise<T> implements IPromise<T> {

        private _delay: number = 0;
        private _callbacks: _IPromiseCallback<T>[] = [];

        constructor(delay: number = 0){
            this._delay = delay;
        }

        then(onFulfilled?: (value?: T) => T, onRejected?: (reason?: any) => T): IPromise<T> {
            this._callbacks.push({ onFulfilled: onFulfilled, onRejected: onRejected });
            return this;
        }

        catch(onRejected: (reason?: any) => T): IPromise<T> {
            return this.then(null, onRejected);
        }

        resolve(value?: T) {
            setTimeout(() => {
                try {
                    this.onFulfilled(value);
                } catch (e) {
                    this.onRejected(e);
                }
            }, this._delay);
        }

        reject(reason?: any) {
            setTimeout(() => {
                this.onRejected(reason);
            }, this._delay);
        }

        onFulfilled(value: T) {
            var callback: _IPromiseCallback<T>;
            while (callback = this._callbacks.shift()) {
                if (callback.onFulfilled) {
                    var newValue = callback.onFulfilled(value);
                    if (newValue !== undefined) {
                        value = newValue;
                    }
                }
            }
        }

        onRejected(reason: any) {
            var callback: _IPromiseCallback<T>;
            while (callback = this._callbacks.shift()) {
                if (callback.onRejected) {
                    var value = callback.onRejected(reason);
                    this.onFulfilled(value);
                    return;
                }
            }

            throw reason;
        }
    }
}