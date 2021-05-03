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

                    /** Namespace common. */
                    namespace common {

                        /** ProtocolID enum. */
                        enum ProtocolID {
                            PROTOCOL_ID_NONE = 0,
                            MSG_SERVER_VERSION = 1,
                            CMD_USER_AVATAR_URL = 3,
                            MSG_USER_AVATAR_URL = 3,
                            CMD_DEBUG_COMMAND = 4,
                            MSG_DEBUG_COMMAND = 4
                        }

                        /** Properties of a ServerVersionInfo. */
                        interface IServerVersionInfo {

                            /** ServerVersionInfo serverVersion */
                            serverVersion?: (string|null);
                        }

                        /** Represents a ServerVersionInfo. */
                        class ServerVersionInfo implements IServerVersionInfo {

                            /**
                             * Constructs a new ServerVersionInfo.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: com.secunet.common.game.protobuf.common.IServerVersionInfo);

                            /** ServerVersionInfo serverVersion. */
                            public serverVersion: string;

                            /**
                             * Creates a new ServerVersionInfo instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns ServerVersionInfo instance
                             */
                            public static create(properties?: com.secunet.common.game.protobuf.common.IServerVersionInfo): com.secunet.common.game.protobuf.common.ServerVersionInfo;

                            /**
                             * Encodes the specified ServerVersionInfo message. Does not implicitly {@link com.secunet.common.game.protobuf.common.ServerVersionInfo.verify|verify} messages.
                             * @param message ServerVersionInfo message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: com.secunet.common.game.protobuf.common.IServerVersionInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified ServerVersionInfo message, length delimited. Does not implicitly {@link com.secunet.common.game.protobuf.common.ServerVersionInfo.verify|verify} messages.
                             * @param message ServerVersionInfo message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: com.secunet.common.game.protobuf.common.IServerVersionInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a ServerVersionInfo message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns ServerVersionInfo
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.secunet.common.game.protobuf.common.ServerVersionInfo;

                            /**
                             * Decodes a ServerVersionInfo message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns ServerVersionInfo
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.secunet.common.game.protobuf.common.ServerVersionInfo;

                            /**
                             * Verifies a ServerVersionInfo message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a ServerVersionInfo message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns ServerVersionInfo
                             */
                            public static fromObject(object: { [k: string]: any }): com.secunet.common.game.protobuf.common.ServerVersionInfo;

                            /**
                             * Creates a plain object from a ServerVersionInfo message. Also converts values to other types if specified.
                             * @param message ServerVersionInfo
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: com.secunet.common.game.protobuf.common.ServerVersionInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this ServerVersionInfo to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };
                        }

                        /** Properties of a ChangeAvatarUrl. */
                        interface IChangeAvatarUrl {

                            /** ChangeAvatarUrl userId */
                            userId?: (number|Long|null);

                            /** ChangeAvatarUrl avatarUrl */
                            avatarUrl?: (string|null);
                        }

                        /** Represents a ChangeAvatarUrl. */
                        class ChangeAvatarUrl implements IChangeAvatarUrl {

                            /**
                             * Constructs a new ChangeAvatarUrl.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: com.secunet.common.game.protobuf.common.IChangeAvatarUrl);

                            /** ChangeAvatarUrl userId. */
                            public userId: (number|Long);

                            /** ChangeAvatarUrl avatarUrl. */
                            public avatarUrl: string;

                            /**
                             * Creates a new ChangeAvatarUrl instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns ChangeAvatarUrl instance
                             */
                            public static create(properties?: com.secunet.common.game.protobuf.common.IChangeAvatarUrl): com.secunet.common.game.protobuf.common.ChangeAvatarUrl;

                            /**
                             * Encodes the specified ChangeAvatarUrl message. Does not implicitly {@link com.secunet.common.game.protobuf.common.ChangeAvatarUrl.verify|verify} messages.
                             * @param message ChangeAvatarUrl message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: com.secunet.common.game.protobuf.common.IChangeAvatarUrl, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified ChangeAvatarUrl message, length delimited. Does not implicitly {@link com.secunet.common.game.protobuf.common.ChangeAvatarUrl.verify|verify} messages.
                             * @param message ChangeAvatarUrl message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: com.secunet.common.game.protobuf.common.IChangeAvatarUrl, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a ChangeAvatarUrl message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns ChangeAvatarUrl
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.secunet.common.game.protobuf.common.ChangeAvatarUrl;

                            /**
                             * Decodes a ChangeAvatarUrl message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns ChangeAvatarUrl
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.secunet.common.game.protobuf.common.ChangeAvatarUrl;

                            /**
                             * Verifies a ChangeAvatarUrl message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a ChangeAvatarUrl message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns ChangeAvatarUrl
                             */
                            public static fromObject(object: { [k: string]: any }): com.secunet.common.game.protobuf.common.ChangeAvatarUrl;

                            /**
                             * Creates a plain object from a ChangeAvatarUrl message. Also converts values to other types if specified.
                             * @param message ChangeAvatarUrl
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: com.secunet.common.game.protobuf.common.ChangeAvatarUrl, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this ChangeAvatarUrl to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };
                        }

                        /** Properties of a DebugCommandResult. */
                        interface IDebugCommandResult {

                            /** DebugCommandResult resultCode */
                            resultCode?: (number|null);
                        }

                        /** Represents a DebugCommandResult. */
                        class DebugCommandResult implements IDebugCommandResult {

                            /**
                             * Constructs a new DebugCommandResult.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: com.secunet.common.game.protobuf.common.IDebugCommandResult);

                            /** DebugCommandResult resultCode. */
                            public resultCode: number;

                            /**
                             * Creates a new DebugCommandResult instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns DebugCommandResult instance
                             */
                            public static create(properties?: com.secunet.common.game.protobuf.common.IDebugCommandResult): com.secunet.common.game.protobuf.common.DebugCommandResult;

                            /**
                             * Encodes the specified DebugCommandResult message. Does not implicitly {@link com.secunet.common.game.protobuf.common.DebugCommandResult.verify|verify} messages.
                             * @param message DebugCommandResult message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: com.secunet.common.game.protobuf.common.IDebugCommandResult, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified DebugCommandResult message, length delimited. Does not implicitly {@link com.secunet.common.game.protobuf.common.DebugCommandResult.verify|verify} messages.
                             * @param message DebugCommandResult message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: com.secunet.common.game.protobuf.common.IDebugCommandResult, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a DebugCommandResult message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns DebugCommandResult
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.secunet.common.game.protobuf.common.DebugCommandResult;

                            /**
                             * Decodes a DebugCommandResult message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns DebugCommandResult
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.secunet.common.game.protobuf.common.DebugCommandResult;

                            /**
                             * Verifies a DebugCommandResult message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a DebugCommandResult message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns DebugCommandResult
                             */
                            public static fromObject(object: { [k: string]: any }): com.secunet.common.game.protobuf.common.DebugCommandResult;

                            /**
                             * Creates a plain object from a DebugCommandResult message. Also converts values to other types if specified.
                             * @param message DebugCommandResult
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: com.secunet.common.game.protobuf.common.DebugCommandResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this DebugCommandResult to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };
                        }

                        /** Properties of a CommonUpdate. */
                        interface ICommonUpdate {

                            /** CommonUpdate serverVersionInfo */
                            serverVersionInfo?: (com.secunet.common.game.protobuf.common.IServerVersionInfo|null);

                            /** CommonUpdate changeAvatarUrl */
                            changeAvatarUrl?: (com.secunet.common.game.protobuf.common.IChangeAvatarUrl|null);

                            /** CommonUpdate debugCommandResult */
                            debugCommandResult?: (com.secunet.common.game.protobuf.common.IDebugCommandResult|null);
                        }

                        /** Represents a CommonUpdate. */
                        class CommonUpdate implements ICommonUpdate {

                            /**
                             * Constructs a new CommonUpdate.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: com.secunet.common.game.protobuf.common.ICommonUpdate);

                            /** CommonUpdate serverVersionInfo. */
                            public serverVersionInfo?: (com.secunet.common.game.protobuf.common.IServerVersionInfo|null);

                            /** CommonUpdate changeAvatarUrl. */
                            public changeAvatarUrl?: (com.secunet.common.game.protobuf.common.IChangeAvatarUrl|null);

                            /** CommonUpdate debugCommandResult. */
                            public debugCommandResult?: (com.secunet.common.game.protobuf.common.IDebugCommandResult|null);

                            /** CommonUpdate updateOneof. */
                            public updateOneof?: ("serverVersionInfo"|"changeAvatarUrl"|"debugCommandResult");

                            /**
                             * Creates a new CommonUpdate instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns CommonUpdate instance
                             */
                            public static create(properties?: com.secunet.common.game.protobuf.common.ICommonUpdate): com.secunet.common.game.protobuf.common.CommonUpdate;

                            /**
                             * Encodes the specified CommonUpdate message. Does not implicitly {@link com.secunet.common.game.protobuf.common.CommonUpdate.verify|verify} messages.
                             * @param message CommonUpdate message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: com.secunet.common.game.protobuf.common.ICommonUpdate, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified CommonUpdate message, length delimited. Does not implicitly {@link com.secunet.common.game.protobuf.common.CommonUpdate.verify|verify} messages.
                             * @param message CommonUpdate message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: com.secunet.common.game.protobuf.common.ICommonUpdate, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a CommonUpdate message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns CommonUpdate
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.secunet.common.game.protobuf.common.CommonUpdate;

                            /**
                             * Decodes a CommonUpdate message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns CommonUpdate
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.secunet.common.game.protobuf.common.CommonUpdate;

                            /**
                             * Verifies a CommonUpdate message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a CommonUpdate message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns CommonUpdate
                             */
                            public static fromObject(object: { [k: string]: any }): com.secunet.common.game.protobuf.common.CommonUpdate;

                            /**
                             * Creates a plain object from a CommonUpdate message. Also converts values to other types if specified.
                             * @param message CommonUpdate
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: com.secunet.common.game.protobuf.common.CommonUpdate, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this CommonUpdate to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };
                        }

                        /** Properties of a ServerToClient. */
                        interface IServerToClient {

                            /** ServerToClient errorCode */
                            errorCode?: (number|null);

                            /** ServerToClient errorString */
                            errorString?: (string|null);

                            /** ServerToClient updateList */
                            updateList?: (com.secunet.common.game.protobuf.common.ICommonUpdate[]|null);
                        }

                        /** Represents a ServerToClient. */
                        class ServerToClient implements IServerToClient {

                            /**
                             * Constructs a new ServerToClient.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: com.secunet.common.game.protobuf.common.IServerToClient);

                            /** ServerToClient errorCode. */
                            public errorCode: number;

                            /** ServerToClient errorString. */
                            public errorString: string;

                            /** ServerToClient updateList. */
                            public updateList: com.secunet.common.game.protobuf.common.ICommonUpdate[];

                            /**
                             * Creates a new ServerToClient instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns ServerToClient instance
                             */
                            public static create(properties?: com.secunet.common.game.protobuf.common.IServerToClient): com.secunet.common.game.protobuf.common.ServerToClient;

                            /**
                             * Encodes the specified ServerToClient message. Does not implicitly {@link com.secunet.common.game.protobuf.common.ServerToClient.verify|verify} messages.
                             * @param message ServerToClient message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: com.secunet.common.game.protobuf.common.IServerToClient, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified ServerToClient message, length delimited. Does not implicitly {@link com.secunet.common.game.protobuf.common.ServerToClient.verify|verify} messages.
                             * @param message ServerToClient message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: com.secunet.common.game.protobuf.common.IServerToClient, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a ServerToClient message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns ServerToClient
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.secunet.common.game.protobuf.common.ServerToClient;

                            /**
                             * Decodes a ServerToClient message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns ServerToClient
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.secunet.common.game.protobuf.common.ServerToClient;

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
                            public static fromObject(object: { [k: string]: any }): com.secunet.common.game.protobuf.common.ServerToClient;

                            /**
                             * Creates a plain object from a ServerToClient message. Also converts values to other types if specified.
                             * @param message ServerToClient
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: com.secunet.common.game.protobuf.common.ServerToClient, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
                            constructor(properties?: com.secunet.common.game.protobuf.common.IClientToServer);

                            /** ClientToServer jsonCommand. */
                            public jsonCommand: string;

                            /**
                             * Creates a new ClientToServer instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns ClientToServer instance
                             */
                            public static create(properties?: com.secunet.common.game.protobuf.common.IClientToServer): com.secunet.common.game.protobuf.common.ClientToServer;

                            /**
                             * Encodes the specified ClientToServer message. Does not implicitly {@link com.secunet.common.game.protobuf.common.ClientToServer.verify|verify} messages.
                             * @param message ClientToServer message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: com.secunet.common.game.protobuf.common.IClientToServer, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified ClientToServer message, length delimited. Does not implicitly {@link com.secunet.common.game.protobuf.common.ClientToServer.verify|verify} messages.
                             * @param message ClientToServer message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: com.secunet.common.game.protobuf.common.IClientToServer, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a ClientToServer message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns ClientToServer
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.secunet.common.game.protobuf.common.ClientToServer;

                            /**
                             * Decodes a ClientToServer message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns ClientToServer
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.secunet.common.game.protobuf.common.ClientToServer;

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
                            public static fromObject(object: { [k: string]: any }): com.secunet.common.game.protobuf.common.ClientToServer;

                            /**
                             * Creates a plain object from a ClientToServer message. Also converts values to other types if specified.
                             * @param message ClientToServer
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: com.secunet.common.game.protobuf.common.ClientToServer, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
