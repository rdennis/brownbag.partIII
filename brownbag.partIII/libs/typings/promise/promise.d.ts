/********************************************************
 * Type Definitions for promise (https://www.npmjs.com/package/promise).
 * @author Robert Dennis
 *******************************************************/

declare module Promise {
    interface IResolve {
        (value: Promise | any): void;
    }

    interface IReject {
        (reason: any): void;
    }

    interface OnFulfilled {
        (value: any): any;
    }

    interface OnRejected {
        (reason: any): any;
    }

    export class Promise {
        constructor(resolve: IResolve, reject: IReject);

        static resolve(value: Promise | any): Promise;
        static all(array: (Promise | any)[]): Promise;

        then(onFulfilled: OnFulfilled, onRejected: OnRejected): Promise;
        catch(onRejected: OnRejected): Promise;
        done(onFulfilled: OnFulfilled, onRejected: OnRejected): void;
    }


    /********** GENERIC **********/
    interface IResolveGeneric<T> {
        (value: PromiseGeneric<T> | T): void;
    }

    interface OnFulfilledGeneric<T> {
        (value: T): any;
    }

    export class PromiseGeneric<T> extends Promise {
        constructor(resolve: IResolveGeneric<T>, reject: IReject);

        then(onFulfilled: OnFulfilledGeneric<T>, onRejected: OnRejected): Promise;
        catch(onRejected: OnRejected): Promise;
        done(onFulfilled: OnFulfilledGeneric<T>, onRejected: OnRejected): void;
    }
}