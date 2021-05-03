import * as $protobuf from "protobufjs";
/** Namespace com. */
export namespace com {

    /** Namespace secunet. */
    namespace secunet {

        /** Namespace common. */
        namespace common {

            /** Namespace game. */
            namespace game {

                /** Namespace protobuf. */
                namespace protobuf {

                    /** Namespace system. */
                    namespace system {

                        /** ProtocolID enum. */
                        enum ProtocolID {
                            PROTOCOL_ID_NONE = 0,
                            CMD_LOGIN = 1,
                            MSG_LOGIN_RESULT = 1,
                            CMD_CLIENT_UI_READY = 2,
                            CMD_DISCONNECT = 3,
                            MSG_DISCONNECT = 3,
                            CMD_HEART_BEAT = 4,
                            MSG_HEART_BEAT = 4
                        }

                        /** Properties of a LoginData. */
                        interface ILoginData {

                            /** LoginData platformCode */
                            platformCode?: (string|null);

                            /** LoginData msInstanceId */
                            msInstanceId?: (number|Long|null);

                            /** LoginData gameId */
                            gameId?: (number|null);

                            /** LoginData arenaId */
                            arenaId?: (number|null);

                            /** LoginData branchId */
                            branchId?: (number|null);

                            /** LoginData accessToken */
                            accessToken?: (string|null);

                            /** LoginData userId */
                            userId?: (number|Long|null);

                            /** LoginData userName */
                            userName?: (string|null);

                            /** LoginData nickName */
                            nickName?: (string|null);

                            /** LoginData avatarUrl */
                            avatarUrl?: (string|null);

                            /** LoginData gameParameter */
                            gameParameter?: (string|null);

                            /** LoginData browser */
                            browser?: (string|null);

                            /** LoginData deviceOs */
                            deviceOs?: (string|null);
                        }

                        /** Represents a LoginData. */
                        class LoginData implements ILoginData {

                            /**
                             * Constructs a new LoginData.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: com.secunet.common.game.protobuf.system.ILoginData);

                            /** LoginData platformCode. */
                            public platformCode: string;

                            /** LoginData msInstanceId. */
                            public msInstanceId: (number|Long);

                            /** LoginData gameId. */
                            public gameId: number;

                            /** LoginData arenaId. */
                            public arenaId: number;

                            /** LoginData branchId. */
                            public branchId: number;

                            /** LoginData accessToken. */
                            public accessToken: string;

                            /** LoginData userId. */
                            public userId: (number|Long);

                            /** LoginData userName. */
                            public userName: string;

                            /** LoginData nickName. */
                            public nickName: string;

                            /** LoginData avatarUrl. */
                            public avatarUrl: string;

                            /** LoginData gameParameter. */
                            public gameParameter: string;

                            /** LoginData browser. */
                            public browser: string;

                            /** LoginData deviceOs. */
                            public deviceOs: string;

                            /**
                             * Creates a new LoginData instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns LoginData instance
                             */
                            public static create(properties?: com.secunet.common.game.protobuf.system.ILoginData): com.secunet.common.game.protobuf.system.LoginData;

                            /**
                             * Encodes the specified LoginData message. Does not implicitly {@link com.secunet.common.game.protobuf.system.LoginData.verify|verify} messages.
                             * @param message LoginData message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: com.secunet.common.game.protobuf.system.ILoginData, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified LoginData message, length delimited. Does not implicitly {@link com.secunet.common.game.protobuf.system.LoginData.verify|verify} messages.
                             * @param message LoginData message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: com.secunet.common.game.protobuf.system.ILoginData, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a LoginData message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns LoginData
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.secunet.common.game.protobuf.system.LoginData;

                            /**
                             * Decodes a LoginData message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns LoginData
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.secunet.common.game.protobuf.system.LoginData;

                            /**
                             * Verifies a LoginData message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a LoginData message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns LoginData
                             */
                            public static fromObject(object: { [k: string]: any }): com.secunet.common.game.protobuf.system.LoginData;

                            /**
                             * Creates a plain object from a LoginData message. Also converts values to other types if specified.
                             * @param message LoginData
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: com.secunet.common.game.protobuf.system.LoginData, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this LoginData to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };
                        }

                        /** Properties of a LoginResult. */
                        interface ILoginResult {

                            /** LoginResult errorCode */
                            errorCode?: (number|null);

                            /** LoginResult errorMessage */
                            errorMessage?: (string|null);
                        }

                        /** Represents a LoginResult. */
                        class LoginResult implements ILoginResult {

                            /**
                             * Constructs a new LoginResult.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: com.secunet.common.game.protobuf.system.ILoginResult);

                            /** LoginResult errorCode. */
                            public errorCode: number;

                            /** LoginResult errorMessage. */
                            public errorMessage: string;

                            /**
                             * Creates a new LoginResult instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns LoginResult instance
                             */
                            public static create(properties?: com.secunet.common.game.protobuf.system.ILoginResult): com.secunet.common.game.protobuf.system.LoginResult;

                            /**
                             * Encodes the specified LoginResult message. Does not implicitly {@link com.secunet.common.game.protobuf.system.LoginResult.verify|verify} messages.
                             * @param message LoginResult message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: com.secunet.common.game.protobuf.system.ILoginResult, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified LoginResult message, length delimited. Does not implicitly {@link com.secunet.common.game.protobuf.system.LoginResult.verify|verify} messages.
                             * @param message LoginResult message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: com.secunet.common.game.protobuf.system.ILoginResult, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a LoginResult message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns LoginResult
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.secunet.common.game.protobuf.system.LoginResult;

                            /**
                             * Decodes a LoginResult message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns LoginResult
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.secunet.common.game.protobuf.system.LoginResult;

                            /**
                             * Verifies a LoginResult message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a LoginResult message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns LoginResult
                             */
                            public static fromObject(object: { [k: string]: any }): com.secunet.common.game.protobuf.system.LoginResult;

                            /**
                             * Creates a plain object from a LoginResult message. Also converts values to other types if specified.
                             * @param message LoginResult
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: com.secunet.common.game.protobuf.system.LoginResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this LoginResult to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };
                        }

                        /** Properties of a ServerDisconnect. */
                        interface IServerDisconnect {

                            /** ServerDisconnect reason */
                            reason?: (number|null);

                            /** ServerDisconnect disconnectCause */
                            disconnectCause?: (string|null);
                        }

                        /** Represents a ServerDisconnect. */
                        class ServerDisconnect implements IServerDisconnect {

                            /**
                             * Constructs a new ServerDisconnect.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: com.secunet.common.game.protobuf.system.IServerDisconnect);

                            /** ServerDisconnect reason. */
                            public reason: number;

                            /** ServerDisconnect disconnectCause. */
                            public disconnectCause: string;

                            /**
                             * Creates a new ServerDisconnect instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns ServerDisconnect instance
                             */
                            public static create(properties?: com.secunet.common.game.protobuf.system.IServerDisconnect): com.secunet.common.game.protobuf.system.ServerDisconnect;

                            /**
                             * Encodes the specified ServerDisconnect message. Does not implicitly {@link com.secunet.common.game.protobuf.system.ServerDisconnect.verify|verify} messages.
                             * @param message ServerDisconnect message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: com.secunet.common.game.protobuf.system.IServerDisconnect, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified ServerDisconnect message, length delimited. Does not implicitly {@link com.secunet.common.game.protobuf.system.ServerDisconnect.verify|verify} messages.
                             * @param message ServerDisconnect message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: com.secunet.common.game.protobuf.system.IServerDisconnect, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a ServerDisconnect message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns ServerDisconnect
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.secunet.common.game.protobuf.system.ServerDisconnect;

                            /**
                             * Decodes a ServerDisconnect message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns ServerDisconnect
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.secunet.common.game.protobuf.system.ServerDisconnect;

                            /**
                             * Verifies a ServerDisconnect message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a ServerDisconnect message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns ServerDisconnect
                             */
                            public static fromObject(object: { [k: string]: any }): com.secunet.common.game.protobuf.system.ServerDisconnect;

                            /**
                             * Creates a plain object from a ServerDisconnect message. Also converts values to other types if specified.
                             * @param message ServerDisconnect
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: com.secunet.common.game.protobuf.system.ServerDisconnect, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this ServerDisconnect to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };
                        }

                        /** Properties of a HeartBeatData. */
                        interface IHeartBeatData {

                            /** HeartBeatData jsonCommand */
                            jsonCommand?: (string|null);
                        }

                        /** Represents a HeartBeatData. */
                        class HeartBeatData implements IHeartBeatData {

                            /**
                             * Constructs a new HeartBeatData.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: com.secunet.common.game.protobuf.system.IHeartBeatData);

                            /** HeartBeatData jsonCommand. */
                            public jsonCommand: string;

                            /**
                             * Creates a new HeartBeatData instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns HeartBeatData instance
                             */
                            public static create(properties?: com.secunet.common.game.protobuf.system.IHeartBeatData): com.secunet.common.game.protobuf.system.HeartBeatData;

                            /**
                             * Encodes the specified HeartBeatData message. Does not implicitly {@link com.secunet.common.game.protobuf.system.HeartBeatData.verify|verify} messages.
                             * @param message HeartBeatData message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: com.secunet.common.game.protobuf.system.IHeartBeatData, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified HeartBeatData message, length delimited. Does not implicitly {@link com.secunet.common.game.protobuf.system.HeartBeatData.verify|verify} messages.
                             * @param message HeartBeatData message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: com.secunet.common.game.protobuf.system.IHeartBeatData, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a HeartBeatData message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns HeartBeatData
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.secunet.common.game.protobuf.system.HeartBeatData;

                            /**
                             * Decodes a HeartBeatData message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns HeartBeatData
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.secunet.common.game.protobuf.system.HeartBeatData;

                            /**
                             * Verifies a HeartBeatData message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a HeartBeatData message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns HeartBeatData
                             */
                            public static fromObject(object: { [k: string]: any }): com.secunet.common.game.protobuf.system.HeartBeatData;

                            /**
                             * Creates a plain object from a HeartBeatData message. Also converts values to other types if specified.
                             * @param message HeartBeatData
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: com.secunet.common.game.protobuf.system.HeartBeatData, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this HeartBeatData to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };
                        }

                        /** Properties of a SystemUpdate. */
                        interface ISystemUpdate {

                            /** SystemUpdate loginResult */
                            loginResult?: (com.secunet.common.game.protobuf.system.ILoginResult|null);

                            /** SystemUpdate serverDisconnect */
                            serverDisconnect?: (com.secunet.common.game.protobuf.system.IServerDisconnect|null);

                            /** SystemUpdate heartBeatData */
                            heartBeatData?: (com.secunet.common.game.protobuf.system.IHeartBeatData|null);
                        }

                        /** Represents a SystemUpdate. */
                        class SystemUpdate implements ISystemUpdate {

                            /**
                             * Constructs a new SystemUpdate.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: com.secunet.common.game.protobuf.system.ISystemUpdate);

                            /** SystemUpdate loginResult. */
                            public loginResult?: (com.secunet.common.game.protobuf.system.ILoginResult|null);

                            /** SystemUpdate serverDisconnect. */
                            public serverDisconnect?: (com.secunet.common.game.protobuf.system.IServerDisconnect|null);

                            /** SystemUpdate heartBeatData. */
                            public heartBeatData?: (com.secunet.common.game.protobuf.system.IHeartBeatData|null);

                            /** SystemUpdate updateOneof. */
                            public updateOneof?: ("loginResult"|"serverDisconnect"|"heartBeatData");

                            /**
                             * Creates a new SystemUpdate instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns SystemUpdate instance
                             */
                            public static create(properties?: com.secunet.common.game.protobuf.system.ISystemUpdate): com.secunet.common.game.protobuf.system.SystemUpdate;

                            /**
                             * Encodes the specified SystemUpdate message. Does not implicitly {@link com.secunet.common.game.protobuf.system.SystemUpdate.verify|verify} messages.
                             * @param message SystemUpdate message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: com.secunet.common.game.protobuf.system.ISystemUpdate, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified SystemUpdate message, length delimited. Does not implicitly {@link com.secunet.common.game.protobuf.system.SystemUpdate.verify|verify} messages.
                             * @param message SystemUpdate message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: com.secunet.common.game.protobuf.system.ISystemUpdate, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a SystemUpdate message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns SystemUpdate
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.secunet.common.game.protobuf.system.SystemUpdate;

                            /**
                             * Decodes a SystemUpdate message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns SystemUpdate
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.secunet.common.game.protobuf.system.SystemUpdate;

                            /**
                             * Verifies a SystemUpdate message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a SystemUpdate message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns SystemUpdate
                             */
                            public static fromObject(object: { [k: string]: any }): com.secunet.common.game.protobuf.system.SystemUpdate;

                            /**
                             * Creates a plain object from a SystemUpdate message. Also converts values to other types if specified.
                             * @param message SystemUpdate
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: com.secunet.common.game.protobuf.system.SystemUpdate, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this SystemUpdate to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };
                        }

                        /** Properties of a ServerToClient. */
                        interface IServerToClient {

                            /** ServerToClient updateList */
                            updateList?: (com.secunet.common.game.protobuf.system.ISystemUpdate[]|null);
                        }

                        /** Represents a ServerToClient. */
                        class ServerToClient implements IServerToClient {

                            /**
                             * Constructs a new ServerToClient.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: com.secunet.common.game.protobuf.system.IServerToClient);

                            /** ServerToClient updateList. */
                            public updateList: com.secunet.common.game.protobuf.system.ISystemUpdate[];

                            /**
                             * Creates a new ServerToClient instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns ServerToClient instance
                             */
                            public static create(properties?: com.secunet.common.game.protobuf.system.IServerToClient): com.secunet.common.game.protobuf.system.ServerToClient;

                            /**
                             * Encodes the specified ServerToClient message. Does not implicitly {@link com.secunet.common.game.protobuf.system.ServerToClient.verify|verify} messages.
                             * @param message ServerToClient message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: com.secunet.common.game.protobuf.system.IServerToClient, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified ServerToClient message, length delimited. Does not implicitly {@link com.secunet.common.game.protobuf.system.ServerToClient.verify|verify} messages.
                             * @param message ServerToClient message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: com.secunet.common.game.protobuf.system.IServerToClient, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a ServerToClient message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns ServerToClient
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.secunet.common.game.protobuf.system.ServerToClient;

                            /**
                             * Decodes a ServerToClient message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns ServerToClient
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.secunet.common.game.protobuf.system.ServerToClient;

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
                            public static fromObject(object: { [k: string]: any }): com.secunet.common.game.protobuf.system.ServerToClient;

                            /**
                             * Creates a plain object from a ServerToClient message. Also converts values to other types if specified.
                             * @param message ServerToClient
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: com.secunet.common.game.protobuf.system.ServerToClient, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

                            /** ClientToServer loginData */
                            loginData?: (com.secunet.common.game.protobuf.system.ILoginData|null);

                            /** ClientToServer heartBeatData */
                            heartBeatData?: (com.secunet.common.game.protobuf.system.IHeartBeatData|null);
                        }

                        /** Represents a ClientToServer. */
                        class ClientToServer implements IClientToServer {

                            /**
                             * Constructs a new ClientToServer.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: com.secunet.common.game.protobuf.system.IClientToServer);

                            /** ClientToServer jsonCommand. */
                            public jsonCommand: string;

                            /** ClientToServer loginData. */
                            public loginData?: (com.secunet.common.game.protobuf.system.ILoginData|null);

                            /** ClientToServer heartBeatData. */
                            public heartBeatData?: (com.secunet.common.game.protobuf.system.IHeartBeatData|null);

                            /** ClientToServer request. */
                            public request?: ("jsonCommand"|"loginData"|"heartBeatData");

                            /**
                             * Creates a new ClientToServer instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns ClientToServer instance
                             */
                            public static create(properties?: com.secunet.common.game.protobuf.system.IClientToServer): com.secunet.common.game.protobuf.system.ClientToServer;

                            /**
                             * Encodes the specified ClientToServer message. Does not implicitly {@link com.secunet.common.game.protobuf.system.ClientToServer.verify|verify} messages.
                             * @param message ClientToServer message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: com.secunet.common.game.protobuf.system.IClientToServer, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified ClientToServer message, length delimited. Does not implicitly {@link com.secunet.common.game.protobuf.system.ClientToServer.verify|verify} messages.
                             * @param message ClientToServer message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: com.secunet.common.game.protobuf.system.IClientToServer, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a ClientToServer message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns ClientToServer
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.secunet.common.game.protobuf.system.ClientToServer;

                            /**
                             * Decodes a ClientToServer message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns ClientToServer
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.secunet.common.game.protobuf.system.ClientToServer;

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
                            public static fromObject(object: { [k: string]: any }): com.secunet.common.game.protobuf.system.ClientToServer;

                            /**
                             * Creates a plain object from a ClientToServer message. Also converts values to other types if specified.
                             * @param message ClientToServer
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: com.secunet.common.game.protobuf.system.ClientToServer, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
    }
}
