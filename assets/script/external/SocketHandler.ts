import { Observable, Subject } from 'rxjs';
import { delay, tap, filter, share, shareReplay } from 'rxjs/operators';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';

export interface ISocketMessage {
    header:number, 
    protocolNo:number, 
    data:ArrayBuffer
}

export default class SocketHandler {
    private socket$: any = null;
    private socketReconnectTimes: number = 0;
    public isInit: boolean = false;
    public isLogin: boolean = false;
    
    constructor() {
        this.socket$ = null;
    }
    
    private createWebSocket<T>(socketHost: string, decodeFunc: (e: MessageEvent) => T, openCB: () => void, closeCB: () => void): WebSocketSubject<T> {
        console.log('Socket Initial');
        this.isInit = false;
        this.isLogin = false;
        this.socketReconnectTimes = 0;

        let gameUrl = socketHost;
        console.warn('Socket open host = ', gameUrl);
        let openObserver = new Subject();
        let closeObserver = new Subject();

        let socket$: WebSocketSubject<T> = webSocket<T>({
            url: gameUrl,
            binaryType: 'arraybuffer',
            openObserver,
            closeObserver,
            serializer : (e: any) => e,
            deserializer : (e: MessageEvent) => decodeFunc(e.data)
        });

        openObserver.subscribe(() => {
            console.log('Socket open...')
            this.socketReconnectTimes = 0;
            this.isInit = true;
            if (this.isLogin === false && openCB) openCB();
        });

        closeObserver.subscribe((evt) => {
            console.log('Socket close...')
            this.isInit = false;
            this.isLogin == false
            if (closeCB) closeCB();
        });

        return socket$;
    }
 
    public getWebSocket<T>(socketHost: string, decodeFunc: (e: MessageEvent) => T, openCB: () => void, closeCB: () => void): WebSocketSubject<T> {
        this.socket$ = this.createWebSocket<T>(socketHost, decodeFunc, openCB, closeCB);
        this.socket$.filter = (filterCB) => {
            return this.socket$.pipe(filter( msg => filterCB(msg)));
        };
        this.socket$.filterSubscribe = (filterCB, next, error = null, complete = null) => {
            return this.socket$.filter(filterCB).subscribe({next, error, complete});
        };
        return this.socket$;
    }

    public send(data: any): void {
        if (this.isInit) {
            if (this.socket$) {
                // console.log('Socket send : ', data);
                this.socket$.next(data);
            } else {
                console.log('Socket is null, can not send message');
            }
        } else {
            console.log('Socket is not init, can not send message');
        }
    }

}
