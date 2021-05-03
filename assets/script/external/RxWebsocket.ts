import { Subject, Observer, Observable, interval } from 'rxjs';
import { share, distinctUntilChanged, takeWhile } from 'rxjs/operators';
import { WebSocketSubject, WebSocketSubjectConfig } from 'rxjs/webSocket';

/// we inherit from the ordinary Subject
export default class RxWebsocketSubject<T> extends Subject<T> {
    public connectionStatus: Observable<boolean>;
    private connectionObserver: Observer<boolean>;
    private reconnectionObservable: Observable<number|boolean>;
    private wsSubjectConfig: WebSocketSubjectConfig<T>;
    private socket: WebSocketSubject<any>;

    /// by default, when a message is received from the server, we are trying to decode it as JSON
    /// we can override it in the constructor
    private defaultDeserializer = (e: MessageEvent) => {
        return JSON.parse(e.data);
    }

    /// when sending a message, we encode it to JSON
    /// we can override it in the constructor
    private defaultSerializer = (data: any): string | ArrayBuffer | Blob | ArrayBufferView => {
        return JSON.stringify(data);
    }

    private url: string;
    private reconnectInterval: number = 5000;  /// pause between connections
    private reconnectAttempts: number = 10;  /// number of connection attempts
    private deserializer: (e: MessageEvent) => any;
    private serializer: (data:any) => string | ArrayBuffer | Blob | ArrayBufferView;

    public constructor(url:string, reconnectInterval?:number, 
        reconnectAttempts?:number, 
        deserializer?:(e: MessageEvent) => any, 
        serializer?:(data: any) => string | ArrayBuffer | Blob | ArrayBufferView ) {
        super();

        /// connection status
        this.connectionStatus = new Observable<boolean>(
            observer => this.connectionObserver = observer).pipe(share(), distinctUntilChanged());

        this.url = url;
        this.reconnectInterval = reconnectInterval || this.reconnectInterval;
        this.reconnectAttempts = reconnectAttempts || this.reconnectAttempts;
        this.deserializer = deserializer || this.defaultDeserializer;
        this.serializer = serializer || this.defaultSerializer;


        /// config for WebSocketSubject
        /// except the url, here is closeObserver and openObserver to update connection status
        this.wsSubjectConfig = {
            url: url,
            openObserver: {
                next: (e: Event) => {
                    this.connectionObserver.next(true);
                }
            },
            closeObserver: {
                next: (e: CloseEvent) => {
                    this.socket = null;
                    this.connectionObserver.next(false);
                }
            },
        };
        /// we connect
        this.connect();
        /// we follow the connection status and run the reconnect while losing the connection
        this.connectionStatus.subscribe((isConnected) => {
            if (!this.reconnectionObservable && typeof(isConnected) == "boolean" && !isConnected) {
                this.reconnect();
            }
        });
    }

    public connect(): void {
        this.socket = new WebSocketSubject(this.wsSubjectConfig);
        this.socket.subscribe(
            (m) => {
                this.next(m); /// when receiving a message, we just send it to our Subject
            },
            (error: Event) => {
                if (!this.socket) {
                    /// in case of an error with a loss of connection, we restore it
                    this.reconnect();
                }
            }
        );
    }

    /// WebSocket Reconnect handling
    public reconnect(): void {
        this.reconnectionObservable = interval(this.reconnectInterval).pipe(
            takeWhile((v, index) => { return index < this.reconnectAttempts && !this.socket })
        );
        this.reconnectionObservable.subscribe(
            { 
                next: () => { this.connect(); },
                error: null,
                complete: () => {
                    /// if the reconnection attempts are failed, then we call complete of our Subject and status
                    this.reconnectionObservable = null;
                    if (!this.socket) {
                        this.complete();
                        this.connectionObserver.complete();
                    }
                }
            }
        );
    }

    /// sending the message
    public send(data: any): void {
        this.socket.next(this.serializer(data));
    }
}