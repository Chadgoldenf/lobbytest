import * as $protobuf from "protobufjs";
/** Namespace com. */
export namespace com {

    /** Namespace secunet. */
    namespace secunet {

        /** Namespace versus_niuniu. */
        namespace versus_niuniu {

            /** Namespace protobuf. */
            namespace protobuf {

                /** EnumNiuProtocol enum. */
                enum EnumNiuProtocol {
                    unknow = 0,
                    Update = 1001
                }

                /** EnumNiuType enum. */
                enum EnumNiuType {
                    Default = 0,
                    NoNiu = 1,
                    Niu_1 = 2,
                    Niu_2 = 3,
                    Niu_3 = 4,
                    Niu_4 = 5,
                    Niu_5 = 6,
                    Niu_6 = 7,
                    Niu_7 = 8,
                    Niu_8 = 9,
                    Niu_9 = 10,
                    NiuNiu = 11,
                    Four_Niu = 12,
                    FiveNiu = 13,
                    Bomb = 14,
                    FiveSmall = 15
                }

                /** Properties of a NiuRoomState. */
                interface INiuRoomState {

                    /** NiuRoomState roomState */
                    roomState?: (number|null);

                    /** NiuRoomState roundId */
                    roundId?: (string|null);

                    /** NiuRoomState stateCountDown */
                    stateCountDown?: (number|null);

                    /** NiuRoomState remainCountDown */
                    remainCountDown?: (number|null);

                    /** NiuRoomState ante */
                    ante?: (number|Long|null);

                    /** NiuRoomState seatList */
                    seatList?: (com.secunet.versus_niuniu.protobuf.NiuRoomState.ISeatData[]|null);
                }

                /** Represents a NiuRoomState. */
                class NiuRoomState implements INiuRoomState {

                    /**
                     * Constructs a new NiuRoomState.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: com.secunet.versus_niuniu.protobuf.INiuRoomState);

                    /** NiuRoomState roomState. */
                    public roomState: number;

                    /** NiuRoomState roundId. */
                    public roundId: string;

                    /** NiuRoomState stateCountDown. */
                    public stateCountDown: number;

                    /** NiuRoomState remainCountDown. */
                    public remainCountDown: number;

                    /** NiuRoomState ante. */
                    public ante: (number|Long);

                    /** NiuRoomState seatList. */
                    public seatList: com.secunet.versus_niuniu.protobuf.NiuRoomState.ISeatData[];

                    /**
                     * Creates a new NiuRoomState instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns NiuRoomState instance
                     */
                    public static create(properties?: com.secunet.versus_niuniu.protobuf.INiuRoomState): com.secunet.versus_niuniu.protobuf.NiuRoomState;

                    /**
                     * Encodes the specified NiuRoomState message. Does not implicitly {@link com.secunet.versus_niuniu.protobuf.NiuRoomState.verify|verify} messages.
                     * @param message NiuRoomState message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: com.secunet.versus_niuniu.protobuf.INiuRoomState, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified NiuRoomState message, length delimited. Does not implicitly {@link com.secunet.versus_niuniu.protobuf.NiuRoomState.verify|verify} messages.
                     * @param message NiuRoomState message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: com.secunet.versus_niuniu.protobuf.INiuRoomState, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a NiuRoomState message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns NiuRoomState
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.secunet.versus_niuniu.protobuf.NiuRoomState;

                    /**
                     * Decodes a NiuRoomState message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns NiuRoomState
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.secunet.versus_niuniu.protobuf.NiuRoomState;

                    /**
                     * Verifies a NiuRoomState message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a NiuRoomState message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns NiuRoomState
                     */
                    public static fromObject(object: { [k: string]: any }): com.secunet.versus_niuniu.protobuf.NiuRoomState;

                    /**
                     * Creates a plain object from a NiuRoomState message. Also converts values to other types if specified.
                     * @param message NiuRoomState
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: com.secunet.versus_niuniu.protobuf.NiuRoomState, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this NiuRoomState to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace NiuRoomState {

                    /** GameStep enum. */
                    enum GameStep {
                        None = 0,
                        Prepare = 1,
                        RoundStart = 2,
                        Deal = 3,
                        Showdown = 4,
                        Settlement = 5,
                        Waiting_PayoutFinish = 6,
                        RoundOver = 7
                    }

                    /** Properties of a WinInfo. */
                    interface IWinInfo {

                        /** WinInfo looserSeatId */
                        looserSeatId?: (number|null);

                        /** WinInfo winPoints */
                        winPoints?: (number|Long|null);
                    }

                    /** Represents a WinInfo. */
                    class WinInfo implements IWinInfo {

                        /**
                         * Constructs a new WinInfo.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: com.secunet.versus_niuniu.protobuf.NiuRoomState.IWinInfo);

                        /** WinInfo looserSeatId. */
                        public looserSeatId: number;

                        /** WinInfo winPoints. */
                        public winPoints: (number|Long);

                        /**
                         * Creates a new WinInfo instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns WinInfo instance
                         */
                        public static create(properties?: com.secunet.versus_niuniu.protobuf.NiuRoomState.IWinInfo): com.secunet.versus_niuniu.protobuf.NiuRoomState.WinInfo;

                        /**
                         * Encodes the specified WinInfo message. Does not implicitly {@link com.secunet.versus_niuniu.protobuf.NiuRoomState.WinInfo.verify|verify} messages.
                         * @param message WinInfo message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: com.secunet.versus_niuniu.protobuf.NiuRoomState.IWinInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified WinInfo message, length delimited. Does not implicitly {@link com.secunet.versus_niuniu.protobuf.NiuRoomState.WinInfo.verify|verify} messages.
                         * @param message WinInfo message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: com.secunet.versus_niuniu.protobuf.NiuRoomState.IWinInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a WinInfo message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns WinInfo
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.secunet.versus_niuniu.protobuf.NiuRoomState.WinInfo;

                        /**
                         * Decodes a WinInfo message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns WinInfo
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.secunet.versus_niuniu.protobuf.NiuRoomState.WinInfo;

                        /**
                         * Verifies a WinInfo message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a WinInfo message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns WinInfo
                         */
                        public static fromObject(object: { [k: string]: any }): com.secunet.versus_niuniu.protobuf.NiuRoomState.WinInfo;

                        /**
                         * Creates a plain object from a WinInfo message. Also converts values to other types if specified.
                         * @param message WinInfo
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: com.secunet.versus_niuniu.protobuf.NiuRoomState.WinInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this WinInfo to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a SeatData. */
                    interface ISeatData {

                        /** SeatData seatId */
                        seatId?: (number|null);

                        /** SeatData niuType */
                        niuType?: (com.secunet.versus_niuniu.protobuf.EnumNiuType|null);

                        /** SeatData cards */
                        cards?: (number[]|null);

                        /** SeatData isWinner */
                        isWinner?: (boolean|null);

                        /** SeatData winLoss */
                        winLoss?: (number|Long|null);

                        /** SeatData winList */
                        winList?: (com.secunet.versus_niuniu.protobuf.NiuRoomState.IWinInfo[]|null);
                    }

                    /** Represents a SeatData. */
                    class SeatData implements ISeatData {

                        /**
                         * Constructs a new SeatData.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: com.secunet.versus_niuniu.protobuf.NiuRoomState.ISeatData);

                        /** SeatData seatId. */
                        public seatId: number;

                        /** SeatData niuType. */
                        public niuType: com.secunet.versus_niuniu.protobuf.EnumNiuType;

                        /** SeatData cards. */
                        public cards: number[];

                        /** SeatData isWinner. */
                        public isWinner: boolean;

                        /** SeatData winLoss. */
                        public winLoss: (number|Long);

                        /** SeatData winList. */
                        public winList: com.secunet.versus_niuniu.protobuf.NiuRoomState.IWinInfo[];

                        /**
                         * Creates a new SeatData instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns SeatData instance
                         */
                        public static create(properties?: com.secunet.versus_niuniu.protobuf.NiuRoomState.ISeatData): com.secunet.versus_niuniu.protobuf.NiuRoomState.SeatData;

                        /**
                         * Encodes the specified SeatData message. Does not implicitly {@link com.secunet.versus_niuniu.protobuf.NiuRoomState.SeatData.verify|verify} messages.
                         * @param message SeatData message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: com.secunet.versus_niuniu.protobuf.NiuRoomState.ISeatData, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified SeatData message, length delimited. Does not implicitly {@link com.secunet.versus_niuniu.protobuf.NiuRoomState.SeatData.verify|verify} messages.
                         * @param message SeatData message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: com.secunet.versus_niuniu.protobuf.NiuRoomState.ISeatData, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a SeatData message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns SeatData
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.secunet.versus_niuniu.protobuf.NiuRoomState.SeatData;

                        /**
                         * Decodes a SeatData message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns SeatData
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.secunet.versus_niuniu.protobuf.NiuRoomState.SeatData;

                        /**
                         * Verifies a SeatData message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a SeatData message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns SeatData
                         */
                        public static fromObject(object: { [k: string]: any }): com.secunet.versus_niuniu.protobuf.NiuRoomState.SeatData;

                        /**
                         * Creates a plain object from a SeatData message. Also converts values to other types if specified.
                         * @param message SeatData
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: com.secunet.versus_niuniu.protobuf.NiuRoomState.SeatData, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this SeatData to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }
                }

                /** Properties of a NiuUpdate. */
                interface INiuUpdate {

                    /** NiuUpdate updateType */
                    updateType?: (com.secunet.versus_niuniu.protobuf.NiuUpdate.EnumUpdateType|null);

                    /** NiuUpdate roomState */
                    roomState?: (com.secunet.versus_niuniu.protobuf.INiuRoomState|null);
                }

                /** Represents a NiuUpdate. */
                class NiuUpdate implements INiuUpdate {

                    /**
                     * Constructs a new NiuUpdate.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: com.secunet.versus_niuniu.protobuf.INiuUpdate);

                    /** NiuUpdate updateType. */
                    public updateType: com.secunet.versus_niuniu.protobuf.NiuUpdate.EnumUpdateType;

                    /** NiuUpdate roomState. */
                    public roomState?: (com.secunet.versus_niuniu.protobuf.INiuRoomState|null);

                    /** NiuUpdate updateOneof. */
                    public updateOneof?: "roomState";

                    /**
                     * Creates a new NiuUpdate instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns NiuUpdate instance
                     */
                    public static create(properties?: com.secunet.versus_niuniu.protobuf.INiuUpdate): com.secunet.versus_niuniu.protobuf.NiuUpdate;

                    /**
                     * Encodes the specified NiuUpdate message. Does not implicitly {@link com.secunet.versus_niuniu.protobuf.NiuUpdate.verify|verify} messages.
                     * @param message NiuUpdate message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: com.secunet.versus_niuniu.protobuf.INiuUpdate, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified NiuUpdate message, length delimited. Does not implicitly {@link com.secunet.versus_niuniu.protobuf.NiuUpdate.verify|verify} messages.
                     * @param message NiuUpdate message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: com.secunet.versus_niuniu.protobuf.INiuUpdate, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a NiuUpdate message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns NiuUpdate
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.secunet.versus_niuniu.protobuf.NiuUpdate;

                    /**
                     * Decodes a NiuUpdate message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns NiuUpdate
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.secunet.versus_niuniu.protobuf.NiuUpdate;

                    /**
                     * Verifies a NiuUpdate message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a NiuUpdate message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns NiuUpdate
                     */
                    public static fromObject(object: { [k: string]: any }): com.secunet.versus_niuniu.protobuf.NiuUpdate;

                    /**
                     * Creates a plain object from a NiuUpdate message. Also converts values to other types if specified.
                     * @param message NiuUpdate
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: com.secunet.versus_niuniu.protobuf.NiuUpdate, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this NiuUpdate to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace NiuUpdate {

                    /** EnumUpdateType enum. */
                    enum EnumUpdateType {
                        UNKNOWN = 0,
                        ROOMSTATE = 2
                    }
                }

                /** Properties of a ServerToClient. */
                interface IServerToClient {

                    /** ServerToClient errorNo */
                    errorNo?: (number|null);

                    /** ServerToClient errorString */
                    errorString?: (string|null);

                    /** ServerToClient updateList */
                    updateList?: (com.secunet.versus_niuniu.protobuf.INiuUpdate[]|null);
                }

                /** Represents a ServerToClient. */
                class ServerToClient implements IServerToClient {

                    /**
                     * Constructs a new ServerToClient.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: com.secunet.versus_niuniu.protobuf.IServerToClient);

                    /** ServerToClient errorNo. */
                    public errorNo: number;

                    /** ServerToClient errorString. */
                    public errorString: string;

                    /** ServerToClient updateList. */
                    public updateList: com.secunet.versus_niuniu.protobuf.INiuUpdate[];

                    /**
                     * Creates a new ServerToClient instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ServerToClient instance
                     */
                    public static create(properties?: com.secunet.versus_niuniu.protobuf.IServerToClient): com.secunet.versus_niuniu.protobuf.ServerToClient;

                    /**
                     * Encodes the specified ServerToClient message. Does not implicitly {@link com.secunet.versus_niuniu.protobuf.ServerToClient.verify|verify} messages.
                     * @param message ServerToClient message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: com.secunet.versus_niuniu.protobuf.IServerToClient, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ServerToClient message, length delimited. Does not implicitly {@link com.secunet.versus_niuniu.protobuf.ServerToClient.verify|verify} messages.
                     * @param message ServerToClient message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: com.secunet.versus_niuniu.protobuf.IServerToClient, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ServerToClient message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ServerToClient
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.secunet.versus_niuniu.protobuf.ServerToClient;

                    /**
                     * Decodes a ServerToClient message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ServerToClient
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.secunet.versus_niuniu.protobuf.ServerToClient;

                    /**
                     * Verifies a ServerToClient message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ServerToClient message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ServerToClient
                     */
                    public static fromObject(object: { [k: string]: any }): com.secunet.versus_niuniu.protobuf.ServerToClient;

                    /**
                     * Creates a plain object from a ServerToClient message. Also converts values to other types if specified.
                     * @param message ServerToClient
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: com.secunet.versus_niuniu.protobuf.ServerToClient, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ServerToClient to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ClientToServer. */
                interface IClientToServer {

                    /** ClientToServer jsonCommand */
                    jsonCommand?: (string|null);
                }

                /** Represents a ClientToServer. */
                class ClientToServer implements IClientToServer {

                    /**
                     * Constructs a new ClientToServer.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: com.secunet.versus_niuniu.protobuf.IClientToServer);

                    /** ClientToServer jsonCommand. */
                    public jsonCommand: string;

                    /**
                     * Creates a new ClientToServer instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ClientToServer instance
                     */
                    public static create(properties?: com.secunet.versus_niuniu.protobuf.IClientToServer): com.secunet.versus_niuniu.protobuf.ClientToServer;

                    /**
                     * Encodes the specified ClientToServer message. Does not implicitly {@link com.secunet.versus_niuniu.protobuf.ClientToServer.verify|verify} messages.
                     * @param message ClientToServer message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: com.secunet.versus_niuniu.protobuf.IClientToServer, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ClientToServer message, length delimited. Does not implicitly {@link com.secunet.versus_niuniu.protobuf.ClientToServer.verify|verify} messages.
                     * @param message ClientToServer message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: com.secunet.versus_niuniu.protobuf.IClientToServer, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ClientToServer message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ClientToServer
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.secunet.versus_niuniu.protobuf.ClientToServer;

                    /**
                     * Decodes a ClientToServer message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ClientToServer
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.secunet.versus_niuniu.protobuf.ClientToServer;

                    /**
                     * Verifies a ClientToServer message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ClientToServer message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ClientToServer
                     */
                    public static fromObject(object: { [k: string]: any }): com.secunet.versus_niuniu.protobuf.ClientToServer;

                    /**
                     * Creates a plain object from a ClientToServer message. Also converts values to other types if specified.
                     * @param message ClientToServer
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: com.secunet.versus_niuniu.protobuf.ClientToServer, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ClientToServer to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }
            }
        }
    }
}
