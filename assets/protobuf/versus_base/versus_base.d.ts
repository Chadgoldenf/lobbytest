import * as $protobuf from "protobufjs";
/** Namespace com. */
export namespace com {

    /** Namespace secunet. */
    namespace secunet {

        /** Namespace versus_gamebase. */
        namespace versus_gamebase {

            /** Namespace protobuf. */
            namespace protobuf {

                /** ProtocolID enum. */
                enum ProtocolID {
                    PROTOCOLID_NONE = 0,
                    CMD_PLAY_AGAIN = 1,
                    CMD_CONTINUE_OR_BET = 2,
                    CMD_CANCEL_MATCHING = 3,
                    CMD_HEART_BEAT = 8,
                    MSG_SERVER_VERSION = 101,
                    MSG_USER_ENTER_INFO = 102,
                    MSG_ROOM_SEATS_INFO = 103,
                    MSG_UPDATE_BALANCE = 104,
                    MSG_CHANGE_ROUND_ID = 105,
                    MSG_CHANGE_GAME_STEP = 106,
                    MSG_USER_ONLINE_STATUS = 107,
                    MSG_USER_AVATAR_URL = 108,
                    MSG_HEART_BEAT = 110,
                    ERROR = 400
                }

                /** UserStep enum. */
                enum UserStep {
                    STEP_UNKNOWN = 0,
                    STEP_PLAY_START = 10,
                    STEP_PRE_CHECK = 12,
                    STEP_ENTER_WITHHOLDING_AMOUNT = 14,
                    STEP_MATCHING = 16,
                    STEP_PLAYING_VERSUS_GAME = 20,
                    STEP_CONTINUE_OR_BET = 30,
                    STEP_PLAYING_LITTLE_GAME = 40,
                    STEP_PLAY_AGAIN = 50,
                    STEP_EXIT_GAME = 100
                }

                /** VSGameErrorCode enum. */
                enum VSGameErrorCode {
                    UNKNOWN_ERROR = 0,
                    OK = 1
                }

                /** Properties of a UserEnterInfo. */
                interface IUserEnterInfo {

                    /** UserEnterInfo gameId */
                    gameId?: (number|null);

                    /** UserEnterInfo gameSettingJson */
                    gameSettingJson?: (string|null);

                    /** UserEnterInfo roomKind */
                    roomKind?: (number|null);

                    /** UserEnterInfo roomInfoJson */
                    roomInfoJson?: (string|null);

                    /** UserEnterInfo userId */
                    userId?: (number|Long|null);

                    /** UserEnterInfo userName */
                    userName?: (string|null);

                    /** UserEnterInfo nickName */
                    nickName?: (string|null);

                    /** UserEnterInfo accountBalance */
                    accountBalance?: (string|null);

                    /** UserEnterInfo gameChip */
                    gameChip?: (string|null);

                    /** UserEnterInfo avatarUrl */
                    avatarUrl?: (string|null);
                }

                /** Represents a UserEnterInfo. */
                class UserEnterInfo implements IUserEnterInfo {

                    /**
                     * Constructs a new UserEnterInfo.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: com.secunet.versus_gamebase.protobuf.IUserEnterInfo);

                    /** UserEnterInfo gameId. */
                    public gameId: number;

                    /** UserEnterInfo gameSettingJson. */
                    public gameSettingJson: string;

                    /** UserEnterInfo roomKind. */
                    public roomKind: number;

                    /** UserEnterInfo roomInfoJson. */
                    public roomInfoJson: string;

                    /** UserEnterInfo userId. */
                    public userId: (number|Long);

                    /** UserEnterInfo userName. */
                    public userName: string;

                    /** UserEnterInfo nickName. */
                    public nickName: string;

                    /** UserEnterInfo accountBalance. */
                    public accountBalance: string;

                    /** UserEnterInfo gameChip. */
                    public gameChip: string;

                    /** UserEnterInfo avatarUrl. */
                    public avatarUrl: string;

                    /**
                     * Creates a new UserEnterInfo instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UserEnterInfo instance
                     */
                    public static create(properties?: com.secunet.versus_gamebase.protobuf.IUserEnterInfo): com.secunet.versus_gamebase.protobuf.UserEnterInfo;

                    /**
                     * Encodes the specified UserEnterInfo message. Does not implicitly {@link com.secunet.versus_gamebase.protobuf.UserEnterInfo.verify|verify} messages.
                     * @param message UserEnterInfo message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: com.secunet.versus_gamebase.protobuf.IUserEnterInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UserEnterInfo message, length delimited. Does not implicitly {@link com.secunet.versus_gamebase.protobuf.UserEnterInfo.verify|verify} messages.
                     * @param message UserEnterInfo message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: com.secunet.versus_gamebase.protobuf.IUserEnterInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a UserEnterInfo message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UserEnterInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.secunet.versus_gamebase.protobuf.UserEnterInfo;

                    /**
                     * Decodes a UserEnterInfo message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UserEnterInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.secunet.versus_gamebase.protobuf.UserEnterInfo;

                    /**
                     * Verifies a UserEnterInfo message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a UserEnterInfo message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UserEnterInfo
                     */
                    public static fromObject(object: { [k: string]: any }): com.secunet.versus_gamebase.protobuf.UserEnterInfo;

                    /**
                     * Creates a plain object from a UserEnterInfo message. Also converts values to other types if specified.
                     * @param message UserEnterInfo
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: com.secunet.versus_gamebase.protobuf.UserEnterInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UserEnterInfo to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a RoomSeatsInfo. */
                interface IRoomSeatsInfo {

                    /** RoomSeatsInfo seatUserList */
                    seatUserList?: (com.secunet.versus_gamebase.protobuf.RoomSeatsInfo.ISeatUser[]|null);
                }

                /** Represents a RoomSeatsInfo. */
                class RoomSeatsInfo implements IRoomSeatsInfo {

                    /**
                     * Constructs a new RoomSeatsInfo.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: com.secunet.versus_gamebase.protobuf.IRoomSeatsInfo);

                    /** RoomSeatsInfo seatUserList. */
                    public seatUserList: com.secunet.versus_gamebase.protobuf.RoomSeatsInfo.ISeatUser[];

                    /**
                     * Creates a new RoomSeatsInfo instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns RoomSeatsInfo instance
                     */
                    public static create(properties?: com.secunet.versus_gamebase.protobuf.IRoomSeatsInfo): com.secunet.versus_gamebase.protobuf.RoomSeatsInfo;

                    /**
                     * Encodes the specified RoomSeatsInfo message. Does not implicitly {@link com.secunet.versus_gamebase.protobuf.RoomSeatsInfo.verify|verify} messages.
                     * @param message RoomSeatsInfo message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: com.secunet.versus_gamebase.protobuf.IRoomSeatsInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified RoomSeatsInfo message, length delimited. Does not implicitly {@link com.secunet.versus_gamebase.protobuf.RoomSeatsInfo.verify|verify} messages.
                     * @param message RoomSeatsInfo message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: com.secunet.versus_gamebase.protobuf.IRoomSeatsInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a RoomSeatsInfo message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns RoomSeatsInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.secunet.versus_gamebase.protobuf.RoomSeatsInfo;

                    /**
                     * Decodes a RoomSeatsInfo message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns RoomSeatsInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.secunet.versus_gamebase.protobuf.RoomSeatsInfo;

                    /**
                     * Verifies a RoomSeatsInfo message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a RoomSeatsInfo message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns RoomSeatsInfo
                     */
                    public static fromObject(object: { [k: string]: any }): com.secunet.versus_gamebase.protobuf.RoomSeatsInfo;

                    /**
                     * Creates a plain object from a RoomSeatsInfo message. Also converts values to other types if specified.
                     * @param message RoomSeatsInfo
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: com.secunet.versus_gamebase.protobuf.RoomSeatsInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this RoomSeatsInfo to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace RoomSeatsInfo {

                    /** Properties of a SeatUser. */
                    interface ISeatUser {

                        /** SeatUser seatId */
                        seatId?: (number|null);

                        /** SeatUser userName */
                        userName?: (string|null);

                        /** SeatUser nickName */
                        nickName?: (string|null);

                        /** SeatUser accountBalance */
                        accountBalance?: (string|null);

                        /** SeatUser gameChip */
                        gameChip?: (string|null);

                        /** SeatUser avatarUrl */
                        avatarUrl?: (string|null);

                        /** SeatUser isOnline */
                        isOnline?: (boolean|null);
                    }

                    /** Represents a SeatUser. */
                    class SeatUser implements ISeatUser {

                        /**
                         * Constructs a new SeatUser.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: com.secunet.versus_gamebase.protobuf.RoomSeatsInfo.ISeatUser);

                        /** SeatUser seatId. */
                        public seatId: number;

                        /** SeatUser userName. */
                        public userName: string;

                        /** SeatUser nickName. */
                        public nickName: string;

                        /** SeatUser accountBalance. */
                        public accountBalance: string;

                        /** SeatUser gameChip. */
                        public gameChip: string;

                        /** SeatUser avatarUrl. */
                        public avatarUrl: string;

                        /** SeatUser isOnline. */
                        public isOnline: boolean;

                        /**
                         * Creates a new SeatUser instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns SeatUser instance
                         */
                        public static create(properties?: com.secunet.versus_gamebase.protobuf.RoomSeatsInfo.ISeatUser): com.secunet.versus_gamebase.protobuf.RoomSeatsInfo.SeatUser;

                        /**
                         * Encodes the specified SeatUser message. Does not implicitly {@link com.secunet.versus_gamebase.protobuf.RoomSeatsInfo.SeatUser.verify|verify} messages.
                         * @param message SeatUser message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: com.secunet.versus_gamebase.protobuf.RoomSeatsInfo.ISeatUser, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified SeatUser message, length delimited. Does not implicitly {@link com.secunet.versus_gamebase.protobuf.RoomSeatsInfo.SeatUser.verify|verify} messages.
                         * @param message SeatUser message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: com.secunet.versus_gamebase.protobuf.RoomSeatsInfo.ISeatUser, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a SeatUser message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns SeatUser
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.secunet.versus_gamebase.protobuf.RoomSeatsInfo.SeatUser;

                        /**
                         * Decodes a SeatUser message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns SeatUser
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.secunet.versus_gamebase.protobuf.RoomSeatsInfo.SeatUser;

                        /**
                         * Verifies a SeatUser message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a SeatUser message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns SeatUser
                         */
                        public static fromObject(object: { [k: string]: any }): com.secunet.versus_gamebase.protobuf.RoomSeatsInfo.SeatUser;

                        /**
                         * Creates a plain object from a SeatUser message. Also converts values to other types if specified.
                         * @param message SeatUser
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: com.secunet.versus_gamebase.protobuf.RoomSeatsInfo.SeatUser, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this SeatUser to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }
                }

                /** Properties of an UpdateBalance. */
                interface IUpdateBalance {

                    /** UpdateBalance accountBalance */
                    accountBalance?: (string|null);
                }

                /** Represents an UpdateBalance. */
                class UpdateBalance implements IUpdateBalance {

                    /**
                     * Constructs a new UpdateBalance.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: com.secunet.versus_gamebase.protobuf.IUpdateBalance);

                    /** UpdateBalance accountBalance. */
                    public accountBalance: string;

                    /**
                     * Creates a new UpdateBalance instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateBalance instance
                     */
                    public static create(properties?: com.secunet.versus_gamebase.protobuf.IUpdateBalance): com.secunet.versus_gamebase.protobuf.UpdateBalance;

                    /**
                     * Encodes the specified UpdateBalance message. Does not implicitly {@link com.secunet.versus_gamebase.protobuf.UpdateBalance.verify|verify} messages.
                     * @param message UpdateBalance message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: com.secunet.versus_gamebase.protobuf.IUpdateBalance, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateBalance message, length delimited. Does not implicitly {@link com.secunet.versus_gamebase.protobuf.UpdateBalance.verify|verify} messages.
                     * @param message UpdateBalance message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: com.secunet.versus_gamebase.protobuf.IUpdateBalance, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateBalance message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateBalance
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.secunet.versus_gamebase.protobuf.UpdateBalance;

                    /**
                     * Decodes an UpdateBalance message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateBalance
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.secunet.versus_gamebase.protobuf.UpdateBalance;

                    /**
                     * Verifies an UpdateBalance message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateBalance message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateBalance
                     */
                    public static fromObject(object: { [k: string]: any }): com.secunet.versus_gamebase.protobuf.UpdateBalance;

                    /**
                     * Creates a plain object from an UpdateBalance message. Also converts values to other types if specified.
                     * @param message UpdateBalance
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: com.secunet.versus_gamebase.protobuf.UpdateBalance, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateBalance to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ChangeRoundId. */
                interface IChangeRoundId {

                    /** ChangeRoundId roundId */
                    roundId?: (string|null);
                }

                /** Represents a ChangeRoundId. */
                class ChangeRoundId implements IChangeRoundId {

                    /**
                     * Constructs a new ChangeRoundId.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: com.secunet.versus_gamebase.protobuf.IChangeRoundId);

                    /** ChangeRoundId roundId. */
                    public roundId: string;

                    /**
                     * Creates a new ChangeRoundId instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ChangeRoundId instance
                     */
                    public static create(properties?: com.secunet.versus_gamebase.protobuf.IChangeRoundId): com.secunet.versus_gamebase.protobuf.ChangeRoundId;

                    /**
                     * Encodes the specified ChangeRoundId message. Does not implicitly {@link com.secunet.versus_gamebase.protobuf.ChangeRoundId.verify|verify} messages.
                     * @param message ChangeRoundId message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: com.secunet.versus_gamebase.protobuf.IChangeRoundId, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ChangeRoundId message, length delimited. Does not implicitly {@link com.secunet.versus_gamebase.protobuf.ChangeRoundId.verify|verify} messages.
                     * @param message ChangeRoundId message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: com.secunet.versus_gamebase.protobuf.IChangeRoundId, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ChangeRoundId message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ChangeRoundId
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.secunet.versus_gamebase.protobuf.ChangeRoundId;

                    /**
                     * Decodes a ChangeRoundId message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ChangeRoundId
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.secunet.versus_gamebase.protobuf.ChangeRoundId;

                    /**
                     * Verifies a ChangeRoundId message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ChangeRoundId message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ChangeRoundId
                     */
                    public static fromObject(object: { [k: string]: any }): com.secunet.versus_gamebase.protobuf.ChangeRoundId;

                    /**
                     * Creates a plain object from a ChangeRoundId message. Also converts values to other types if specified.
                     * @param message ChangeRoundId
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: com.secunet.versus_gamebase.protobuf.ChangeRoundId, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ChangeRoundId to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ChangeUserStep. */
                interface IChangeUserStep {

                    /** ChangeUserStep step */
                    step?: (number|null);

                    /** ChangeUserStep timeLeftMs */
                    timeLeftMs?: (number|Long|null);
                }

                /** Represents a ChangeUserStep. */
                class ChangeUserStep implements IChangeUserStep {

                    /**
                     * Constructs a new ChangeUserStep.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: com.secunet.versus_gamebase.protobuf.IChangeUserStep);

                    /** ChangeUserStep step. */
                    public step: number;

                    /** ChangeUserStep timeLeftMs. */
                    public timeLeftMs: (number|Long);

                    /**
                     * Creates a new ChangeUserStep instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ChangeUserStep instance
                     */
                    public static create(properties?: com.secunet.versus_gamebase.protobuf.IChangeUserStep): com.secunet.versus_gamebase.protobuf.ChangeUserStep;

                    /**
                     * Encodes the specified ChangeUserStep message. Does not implicitly {@link com.secunet.versus_gamebase.protobuf.ChangeUserStep.verify|verify} messages.
                     * @param message ChangeUserStep message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: com.secunet.versus_gamebase.protobuf.IChangeUserStep, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ChangeUserStep message, length delimited. Does not implicitly {@link com.secunet.versus_gamebase.protobuf.ChangeUserStep.verify|verify} messages.
                     * @param message ChangeUserStep message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: com.secunet.versus_gamebase.protobuf.IChangeUserStep, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ChangeUserStep message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ChangeUserStep
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.secunet.versus_gamebase.protobuf.ChangeUserStep;

                    /**
                     * Decodes a ChangeUserStep message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ChangeUserStep
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.secunet.versus_gamebase.protobuf.ChangeUserStep;

                    /**
                     * Verifies a ChangeUserStep message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ChangeUserStep message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ChangeUserStep
                     */
                    public static fromObject(object: { [k: string]: any }): com.secunet.versus_gamebase.protobuf.ChangeUserStep;

                    /**
                     * Creates a plain object from a ChangeUserStep message. Also converts values to other types if specified.
                     * @param message ChangeUserStep
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: com.secunet.versus_gamebase.protobuf.ChangeUserStep, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ChangeUserStep to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ChangeOnlineStatus. */
                interface IChangeOnlineStatus {

                    /** ChangeOnlineStatus userId */
                    userId?: (number|Long|null);

                    /** ChangeOnlineStatus isOnline */
                    isOnline?: (boolean|null);
                }

                /** Represents a ChangeOnlineStatus. */
                class ChangeOnlineStatus implements IChangeOnlineStatus {

                    /**
                     * Constructs a new ChangeOnlineStatus.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: com.secunet.versus_gamebase.protobuf.IChangeOnlineStatus);

                    /** ChangeOnlineStatus userId. */
                    public userId: (number|Long);

                    /** ChangeOnlineStatus isOnline. */
                    public isOnline: boolean;

                    /**
                     * Creates a new ChangeOnlineStatus instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ChangeOnlineStatus instance
                     */
                    public static create(properties?: com.secunet.versus_gamebase.protobuf.IChangeOnlineStatus): com.secunet.versus_gamebase.protobuf.ChangeOnlineStatus;

                    /**
                     * Encodes the specified ChangeOnlineStatus message. Does not implicitly {@link com.secunet.versus_gamebase.protobuf.ChangeOnlineStatus.verify|verify} messages.
                     * @param message ChangeOnlineStatus message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: com.secunet.versus_gamebase.protobuf.IChangeOnlineStatus, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ChangeOnlineStatus message, length delimited. Does not implicitly {@link com.secunet.versus_gamebase.protobuf.ChangeOnlineStatus.verify|verify} messages.
                     * @param message ChangeOnlineStatus message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: com.secunet.versus_gamebase.protobuf.IChangeOnlineStatus, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ChangeOnlineStatus message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ChangeOnlineStatus
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.secunet.versus_gamebase.protobuf.ChangeOnlineStatus;

                    /**
                     * Decodes a ChangeOnlineStatus message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ChangeOnlineStatus
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.secunet.versus_gamebase.protobuf.ChangeOnlineStatus;

                    /**
                     * Verifies a ChangeOnlineStatus message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ChangeOnlineStatus message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ChangeOnlineStatus
                     */
                    public static fromObject(object: { [k: string]: any }): com.secunet.versus_gamebase.protobuf.ChangeOnlineStatus;

                    /**
                     * Creates a plain object from a ChangeOnlineStatus message. Also converts values to other types if specified.
                     * @param message ChangeOnlineStatus
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: com.secunet.versus_gamebase.protobuf.ChangeOnlineStatus, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ChangeOnlineStatus to JSON.
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
                    constructor(properties?: com.secunet.versus_gamebase.protobuf.IChangeAvatarUrl);

                    /** ChangeAvatarUrl userId. */
                    public userId: (number|Long);

                    /** ChangeAvatarUrl avatarUrl. */
                    public avatarUrl: string;

                    /**
                     * Creates a new ChangeAvatarUrl instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ChangeAvatarUrl instance
                     */
                    public static create(properties?: com.secunet.versus_gamebase.protobuf.IChangeAvatarUrl): com.secunet.versus_gamebase.protobuf.ChangeAvatarUrl;

                    /**
                     * Encodes the specified ChangeAvatarUrl message. Does not implicitly {@link com.secunet.versus_gamebase.protobuf.ChangeAvatarUrl.verify|verify} messages.
                     * @param message ChangeAvatarUrl message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: com.secunet.versus_gamebase.protobuf.IChangeAvatarUrl, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ChangeAvatarUrl message, length delimited. Does not implicitly {@link com.secunet.versus_gamebase.protobuf.ChangeAvatarUrl.verify|verify} messages.
                     * @param message ChangeAvatarUrl message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: com.secunet.versus_gamebase.protobuf.IChangeAvatarUrl, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ChangeAvatarUrl message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ChangeAvatarUrl
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.secunet.versus_gamebase.protobuf.ChangeAvatarUrl;

                    /**
                     * Decodes a ChangeAvatarUrl message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ChangeAvatarUrl
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.secunet.versus_gamebase.protobuf.ChangeAvatarUrl;

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
                    public static fromObject(object: { [k: string]: any }): com.secunet.versus_gamebase.protobuf.ChangeAvatarUrl;

                    /**
                     * Creates a plain object from a ChangeAvatarUrl message. Also converts values to other types if specified.
                     * @param message ChangeAvatarUrl
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: com.secunet.versus_gamebase.protobuf.ChangeAvatarUrl, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ChangeAvatarUrl to JSON.
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
                    constructor(properties?: com.secunet.versus_gamebase.protobuf.IHeartBeatData);

                    /** HeartBeatData jsonCommand. */
                    public jsonCommand: string;

                    /**
                     * Creates a new HeartBeatData instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns HeartBeatData instance
                     */
                    public static create(properties?: com.secunet.versus_gamebase.protobuf.IHeartBeatData): com.secunet.versus_gamebase.protobuf.HeartBeatData;

                    /**
                     * Encodes the specified HeartBeatData message. Does not implicitly {@link com.secunet.versus_gamebase.protobuf.HeartBeatData.verify|verify} messages.
                     * @param message HeartBeatData message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: com.secunet.versus_gamebase.protobuf.IHeartBeatData, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified HeartBeatData message, length delimited. Does not implicitly {@link com.secunet.versus_gamebase.protobuf.HeartBeatData.verify|verify} messages.
                     * @param message HeartBeatData message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: com.secunet.versus_gamebase.protobuf.IHeartBeatData, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a HeartBeatData message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns HeartBeatData
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.secunet.versus_gamebase.protobuf.HeartBeatData;

                    /**
                     * Decodes a HeartBeatData message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns HeartBeatData
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.secunet.versus_gamebase.protobuf.HeartBeatData;

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
                    public static fromObject(object: { [k: string]: any }): com.secunet.versus_gamebase.protobuf.HeartBeatData;

                    /**
                     * Creates a plain object from a HeartBeatData message. Also converts values to other types if specified.
                     * @param message HeartBeatData
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: com.secunet.versus_gamebase.protobuf.HeartBeatData, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this HeartBeatData to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
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
                    constructor(properties?: com.secunet.versus_gamebase.protobuf.IServerVersionInfo);

                    /** ServerVersionInfo serverVersion. */
                    public serverVersion: string;

                    /**
                     * Creates a new ServerVersionInfo instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ServerVersionInfo instance
                     */
                    public static create(properties?: com.secunet.versus_gamebase.protobuf.IServerVersionInfo): com.secunet.versus_gamebase.protobuf.ServerVersionInfo;

                    /**
                     * Encodes the specified ServerVersionInfo message. Does not implicitly {@link com.secunet.versus_gamebase.protobuf.ServerVersionInfo.verify|verify} messages.
                     * @param message ServerVersionInfo message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: com.secunet.versus_gamebase.protobuf.IServerVersionInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ServerVersionInfo message, length delimited. Does not implicitly {@link com.secunet.versus_gamebase.protobuf.ServerVersionInfo.verify|verify} messages.
                     * @param message ServerVersionInfo message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: com.secunet.versus_gamebase.protobuf.IServerVersionInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ServerVersionInfo message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ServerVersionInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.secunet.versus_gamebase.protobuf.ServerVersionInfo;

                    /**
                     * Decodes a ServerVersionInfo message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ServerVersionInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.secunet.versus_gamebase.protobuf.ServerVersionInfo;

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
                    public static fromObject(object: { [k: string]: any }): com.secunet.versus_gamebase.protobuf.ServerVersionInfo;

                    /**
                     * Creates a plain object from a ServerVersionInfo message. Also converts values to other types if specified.
                     * @param message ServerVersionInfo
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: com.secunet.versus_gamebase.protobuf.ServerVersionInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ServerVersionInfo to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an ErrorInfo. */
                interface IErrorInfo {

                    /** ErrorInfo errorCode */
                    errorCode?: (number|null);

                    /** ErrorInfo errorMessage */
                    errorMessage?: (string|null);
                }

                /** Represents an ErrorInfo. */
                class ErrorInfo implements IErrorInfo {

                    /**
                     * Constructs a new ErrorInfo.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: com.secunet.versus_gamebase.protobuf.IErrorInfo);

                    /** ErrorInfo errorCode. */
                    public errorCode: number;

                    /** ErrorInfo errorMessage. */
                    public errorMessage: string;

                    /**
                     * Creates a new ErrorInfo instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ErrorInfo instance
                     */
                    public static create(properties?: com.secunet.versus_gamebase.protobuf.IErrorInfo): com.secunet.versus_gamebase.protobuf.ErrorInfo;

                    /**
                     * Encodes the specified ErrorInfo message. Does not implicitly {@link com.secunet.versus_gamebase.protobuf.ErrorInfo.verify|verify} messages.
                     * @param message ErrorInfo message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: com.secunet.versus_gamebase.protobuf.IErrorInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ErrorInfo message, length delimited. Does not implicitly {@link com.secunet.versus_gamebase.protobuf.ErrorInfo.verify|verify} messages.
                     * @param message ErrorInfo message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: com.secunet.versus_gamebase.protobuf.IErrorInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an ErrorInfo message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ErrorInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.secunet.versus_gamebase.protobuf.ErrorInfo;

                    /**
                     * Decodes an ErrorInfo message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ErrorInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.secunet.versus_gamebase.protobuf.ErrorInfo;

                    /**
                     * Verifies an ErrorInfo message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an ErrorInfo message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ErrorInfo
                     */
                    public static fromObject(object: { [k: string]: any }): com.secunet.versus_gamebase.protobuf.ErrorInfo;

                    /**
                     * Creates a plain object from an ErrorInfo message. Also converts values to other types if specified.
                     * @param message ErrorInfo
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: com.secunet.versus_gamebase.protobuf.ErrorInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ErrorInfo to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an ErrorMessage. */
                interface IErrorMessage {

                    /** ErrorMessage gsError */
                    gsError?: (com.secunet.versus_gamebase.protobuf.IErrorInfo|null);

                    /** ErrorMessage platformError */
                    platformError?: (com.secunet.versus_gamebase.protobuf.IErrorInfo|null);
                }

                /** Represents an ErrorMessage. */
                class ErrorMessage implements IErrorMessage {

                    /**
                     * Constructs a new ErrorMessage.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: com.secunet.versus_gamebase.protobuf.IErrorMessage);

                    /** ErrorMessage gsError. */
                    public gsError?: (com.secunet.versus_gamebase.protobuf.IErrorInfo|null);

                    /** ErrorMessage platformError. */
                    public platformError?: (com.secunet.versus_gamebase.protobuf.IErrorInfo|null);

                    /**
                     * Creates a new ErrorMessage instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ErrorMessage instance
                     */
                    public static create(properties?: com.secunet.versus_gamebase.protobuf.IErrorMessage): com.secunet.versus_gamebase.protobuf.ErrorMessage;

                    /**
                     * Encodes the specified ErrorMessage message. Does not implicitly {@link com.secunet.versus_gamebase.protobuf.ErrorMessage.verify|verify} messages.
                     * @param message ErrorMessage message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: com.secunet.versus_gamebase.protobuf.IErrorMessage, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ErrorMessage message, length delimited. Does not implicitly {@link com.secunet.versus_gamebase.protobuf.ErrorMessage.verify|verify} messages.
                     * @param message ErrorMessage message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: com.secunet.versus_gamebase.protobuf.IErrorMessage, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an ErrorMessage message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ErrorMessage
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.secunet.versus_gamebase.protobuf.ErrorMessage;

                    /**
                     * Decodes an ErrorMessage message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ErrorMessage
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.secunet.versus_gamebase.protobuf.ErrorMessage;

                    /**
                     * Verifies an ErrorMessage message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an ErrorMessage message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ErrorMessage
                     */
                    public static fromObject(object: { [k: string]: any }): com.secunet.versus_gamebase.protobuf.ErrorMessage;

                    /**
                     * Creates a plain object from an ErrorMessage message. Also converts values to other types if specified.
                     * @param message ErrorMessage
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: com.secunet.versus_gamebase.protobuf.ErrorMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ErrorMessage to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a VersusBaseUpdate. */
                interface IVersusBaseUpdate {

                    /** VersusBaseUpdate userBaseInfo */
                    userBaseInfo?: (com.secunet.versus_gamebase.protobuf.IUserEnterInfo|null);

                    /** VersusBaseUpdate roomSeatsInfo */
                    roomSeatsInfo?: (com.secunet.versus_gamebase.protobuf.IRoomSeatsInfo|null);

                    /** VersusBaseUpdate updateBalance */
                    updateBalance?: (com.secunet.versus_gamebase.protobuf.IUpdateBalance|null);

                    /** VersusBaseUpdate changeRoundId */
                    changeRoundId?: (com.secunet.versus_gamebase.protobuf.IChangeRoundId|null);

                    /** VersusBaseUpdate changeStepInfo */
                    changeStepInfo?: (com.secunet.versus_gamebase.protobuf.IChangeUserStep|null);

                    /** VersusBaseUpdate changeOnlineStatus */
                    changeOnlineStatus?: (com.secunet.versus_gamebase.protobuf.IChangeOnlineStatus|null);

                    /** VersusBaseUpdate changeAvatarUrl */
                    changeAvatarUrl?: (com.secunet.versus_gamebase.protobuf.IChangeAvatarUrl|null);

                    /** VersusBaseUpdate heartBeatData */
                    heartBeatData?: (com.secunet.versus_gamebase.protobuf.IHeartBeatData|null);

                    /** VersusBaseUpdate serverVersionInfo */
                    serverVersionInfo?: (com.secunet.versus_gamebase.protobuf.IServerVersionInfo|null);

                    /** VersusBaseUpdate errorMessage */
                    errorMessage?: (com.secunet.versus_gamebase.protobuf.IErrorMessage|null);
                }

                /** Represents a VersusBaseUpdate. */
                class VersusBaseUpdate implements IVersusBaseUpdate {

                    /**
                     * Constructs a new VersusBaseUpdate.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: com.secunet.versus_gamebase.protobuf.IVersusBaseUpdate);

                    /** VersusBaseUpdate userBaseInfo. */
                    public userBaseInfo?: (com.secunet.versus_gamebase.protobuf.IUserEnterInfo|null);

                    /** VersusBaseUpdate roomSeatsInfo. */
                    public roomSeatsInfo?: (com.secunet.versus_gamebase.protobuf.IRoomSeatsInfo|null);

                    /** VersusBaseUpdate updateBalance. */
                    public updateBalance?: (com.secunet.versus_gamebase.protobuf.IUpdateBalance|null);

                    /** VersusBaseUpdate changeRoundId. */
                    public changeRoundId?: (com.secunet.versus_gamebase.protobuf.IChangeRoundId|null);

                    /** VersusBaseUpdate changeStepInfo. */
                    public changeStepInfo?: (com.secunet.versus_gamebase.protobuf.IChangeUserStep|null);

                    /** VersusBaseUpdate changeOnlineStatus. */
                    public changeOnlineStatus?: (com.secunet.versus_gamebase.protobuf.IChangeOnlineStatus|null);

                    /** VersusBaseUpdate changeAvatarUrl. */
                    public changeAvatarUrl?: (com.secunet.versus_gamebase.protobuf.IChangeAvatarUrl|null);

                    /** VersusBaseUpdate heartBeatData. */
                    public heartBeatData?: (com.secunet.versus_gamebase.protobuf.IHeartBeatData|null);

                    /** VersusBaseUpdate serverVersionInfo. */
                    public serverVersionInfo?: (com.secunet.versus_gamebase.protobuf.IServerVersionInfo|null);

                    /** VersusBaseUpdate errorMessage. */
                    public errorMessage?: (com.secunet.versus_gamebase.protobuf.IErrorMessage|null);

                    /** VersusBaseUpdate updateOneof. */
                    public updateOneof?: ("userBaseInfo"|"roomSeatsInfo"|"updateBalance"|"changeRoundId"|"changeStepInfo"|"changeOnlineStatus"|"changeAvatarUrl"|"heartBeatData"|"serverVersionInfo"|"errorMessage");

                    /**
                     * Creates a new VersusBaseUpdate instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns VersusBaseUpdate instance
                     */
                    public static create(properties?: com.secunet.versus_gamebase.protobuf.IVersusBaseUpdate): com.secunet.versus_gamebase.protobuf.VersusBaseUpdate;

                    /**
                     * Encodes the specified VersusBaseUpdate message. Does not implicitly {@link com.secunet.versus_gamebase.protobuf.VersusBaseUpdate.verify|verify} messages.
                     * @param message VersusBaseUpdate message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: com.secunet.versus_gamebase.protobuf.IVersusBaseUpdate, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified VersusBaseUpdate message, length delimited. Does not implicitly {@link com.secunet.versus_gamebase.protobuf.VersusBaseUpdate.verify|verify} messages.
                     * @param message VersusBaseUpdate message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: com.secunet.versus_gamebase.protobuf.IVersusBaseUpdate, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a VersusBaseUpdate message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns VersusBaseUpdate
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.secunet.versus_gamebase.protobuf.VersusBaseUpdate;

                    /**
                     * Decodes a VersusBaseUpdate message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns VersusBaseUpdate
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.secunet.versus_gamebase.protobuf.VersusBaseUpdate;

                    /**
                     * Verifies a VersusBaseUpdate message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a VersusBaseUpdate message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns VersusBaseUpdate
                     */
                    public static fromObject(object: { [k: string]: any }): com.secunet.versus_gamebase.protobuf.VersusBaseUpdate;

                    /**
                     * Creates a plain object from a VersusBaseUpdate message. Also converts values to other types if specified.
                     * @param message VersusBaseUpdate
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: com.secunet.versus_gamebase.protobuf.VersusBaseUpdate, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this VersusBaseUpdate to JSON.
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
                    updateList?: (com.secunet.versus_gamebase.protobuf.IVersusBaseUpdate[]|null);
                }

                /** Represents a ServerToClient. */
                class ServerToClient implements IServerToClient {

                    /**
                     * Constructs a new ServerToClient.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: com.secunet.versus_gamebase.protobuf.IServerToClient);

                    /** ServerToClient errorCode. */
                    public errorCode: number;

                    /** ServerToClient errorString. */
                    public errorString: string;

                    /** ServerToClient updateList. */
                    public updateList: com.secunet.versus_gamebase.protobuf.IVersusBaseUpdate[];

                    /**
                     * Creates a new ServerToClient instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ServerToClient instance
                     */
                    public static create(properties?: com.secunet.versus_gamebase.protobuf.IServerToClient): com.secunet.versus_gamebase.protobuf.ServerToClient;

                    /**
                     * Encodes the specified ServerToClient message. Does not implicitly {@link com.secunet.versus_gamebase.protobuf.ServerToClient.verify|verify} messages.
                     * @param message ServerToClient message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: com.secunet.versus_gamebase.protobuf.IServerToClient, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ServerToClient message, length delimited. Does not implicitly {@link com.secunet.versus_gamebase.protobuf.ServerToClient.verify|verify} messages.
                     * @param message ServerToClient message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: com.secunet.versus_gamebase.protobuf.IServerToClient, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ServerToClient message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ServerToClient
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.secunet.versus_gamebase.protobuf.ServerToClient;

                    /**
                     * Decodes a ServerToClient message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ServerToClient
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.secunet.versus_gamebase.protobuf.ServerToClient;

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
                    public static fromObject(object: { [k: string]: any }): com.secunet.versus_gamebase.protobuf.ServerToClient;

                    /**
                     * Creates a plain object from a ServerToClient message. Also converts values to other types if specified.
                     * @param message ServerToClient
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: com.secunet.versus_gamebase.protobuf.ServerToClient, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
                    constructor(properties?: com.secunet.versus_gamebase.protobuf.IClientToServer);

                    /** ClientToServer jsonCommand. */
                    public jsonCommand: string;

                    /**
                     * Creates a new ClientToServer instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ClientToServer instance
                     */
                    public static create(properties?: com.secunet.versus_gamebase.protobuf.IClientToServer): com.secunet.versus_gamebase.protobuf.ClientToServer;

                    /**
                     * Encodes the specified ClientToServer message. Does not implicitly {@link com.secunet.versus_gamebase.protobuf.ClientToServer.verify|verify} messages.
                     * @param message ClientToServer message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: com.secunet.versus_gamebase.protobuf.IClientToServer, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ClientToServer message, length delimited. Does not implicitly {@link com.secunet.versus_gamebase.protobuf.ClientToServer.verify|verify} messages.
                     * @param message ClientToServer message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: com.secunet.versus_gamebase.protobuf.IClientToServer, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ClientToServer message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ClientToServer
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.secunet.versus_gamebase.protobuf.ClientToServer;

                    /**
                     * Decodes a ClientToServer message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ClientToServer
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.secunet.versus_gamebase.protobuf.ClientToServer;

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
                    public static fromObject(object: { [k: string]: any }): com.secunet.versus_gamebase.protobuf.ClientToServer;

                    /**
                     * Creates a plain object from a ClientToServer message. Also converts values to other types if specified.
                     * @param message ClientToServer
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: com.secunet.versus_gamebase.protobuf.ClientToServer, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
