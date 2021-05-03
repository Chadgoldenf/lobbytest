/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import bg_table from "./bg_table";
import time_clock from "./time_clock";
import player_0 from "./player_0";
import player_1 from "./player_1";
import bet_info from "./bet_info";
import cardLicensing from "./cardLicensing";
import card_0 from "./card_0";
import card_1 from "./card_1";
import cardType from "./cardType";
import pic_remind from "./pic_remind";
import pic_error from "./pic_error";

export default class stage extends fgui.GComponent {

	public ctrlGameStep:fgui.Controller;
	public bg_table:bg_table;
	public timeClock:time_clock;
	public player_0:player_0;
	public player_1:player_0;
	public player_2:player_0;
	public player_3:player_1;
	public betInfo_0:bet_info;
	public betInfo_1:bet_info;
	public betInfo_2:bet_info;
	public betInfo_3:bet_info;
	public cardLicensing:cardLicensing;
	public cardf_0:card_0;
	public card_1:card_1;
	public card_2:card_1;
	public card_3:card_1;
	public cardType_0:cardType;
	public cardType_1:cardType;
	public cardType_2:cardType;
	public cardType_3:cardType;
	public btnBet_0:fgui.GButton;
	public btnBet_1:fgui.GButton;
	public btnBet_2:fgui.GButton;
	public btnBet_3:fgui.GButton;
	public btnBet_4:fgui.GButton;
	public btnShowdown:fgui.GButton;
	public btnNiu:fgui.GButton;
	public picRemind:pic_remind;
	public picError:pic_error;
	public static URL:string = "ui://spf3kkkgmp4kce";

	public static createInstance():stage {
		return <stage>(fgui.UIPackage.createObject("cc_101", "stage"));
	}

	protected onConstruct():void {
		this.ctrlGameStep = this.getController("ctrlGameStep");
		this.bg_table = <bg_table>(this.getChild("bg_table"));
		this.timeClock = <time_clock>(this.getChild("timeClock"));
		this.player_0 = <player_0>(this.getChild("player_0"));
		this.player_1 = <player_0>(this.getChild("player_1"));
		this.player_2 = <player_0>(this.getChild("player_2"));
		this.player_3 = <player_1>(this.getChild("player_3"));
		this.betInfo_0 = <bet_info>(this.getChild("betInfo_0"));
		this.betInfo_1 = <bet_info>(this.getChild("betInfo_1"));
		this.betInfo_2 = <bet_info>(this.getChild("betInfo_2"));
		this.betInfo_3 = <bet_info>(this.getChild("betInfo_3"));
		this.cardLicensing = <cardLicensing>(this.getChild("cardLicensing"));
		this.cardf_0 = <card_0>(this.getChild("cardf_0"));
		this.card_1 = <card_1>(this.getChild("card_1"));
		this.card_2 = <card_1>(this.getChild("card_2"));
		this.card_3 = <card_1>(this.getChild("card_3"));
		this.cardType_0 = <cardType>(this.getChild("cardType_0"));
		this.cardType_1 = <cardType>(this.getChild("cardType_1"));
		this.cardType_2 = <cardType>(this.getChild("cardType_2"));
		this.cardType_3 = <cardType>(this.getChild("cardType_3"));
		this.btnBet_0 = <fgui.GButton>(this.getChild("btnBet_0"));
		this.btnBet_1 = <fgui.GButton>(this.getChild("btnBet_1"));
		this.btnBet_2 = <fgui.GButton>(this.getChild("btnBet_2"));
		this.btnBet_3 = <fgui.GButton>(this.getChild("btnBet_3"));
		this.btnBet_4 = <fgui.GButton>(this.getChild("btnBet_4"));
		this.btnShowdown = <fgui.GButton>(this.getChild("btnShowdown"));
		this.btnNiu = <fgui.GButton>(this.getChild("btnNiu"));
		this.picRemind = <pic_remind>(this.getChild("picRemind"));
		this.picError = <pic_error>(this.getChild("picError"));
	}
}