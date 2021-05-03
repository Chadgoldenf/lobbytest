/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import stage from "./stage";
import room_info from "./room_info";
import win_list from "./win_list";

export default class main_game extends fgui.GComponent {

	public ctrlGameStep:fgui.Controller;
	public bgGame:fgui.GImage;
	public stage:stage;
	public btnMenu:fgui.GButton;
	public roomInfo:room_info;
	public settlement:win_list;
	public ani_star:fgui.GLoader3D;
	public ani_niuniu:fgui.GLoader3D;
	public transPicError:fgui.Transition;
	public static URL:string = "ui://spf3kkkgp8v5ab";

	public static createInstance():main_game {
		return <main_game>(fgui.UIPackage.createObject("cc_101", "main_game"));
	}

	protected onConstruct():void {
		this.ctrlGameStep = this.getController("ctrlGameStep");
		this.bgGame = <fgui.GImage>(this.getChild("bgGame"));
		this.stage = <stage>(this.getChild("stage"));
		this.btnMenu = <fgui.GButton>(this.getChild("btnMenu"));
		this.roomInfo = <room_info>(this.getChild("roomInfo"));
		this.settlement = <win_list>(this.getChild("settlement"));
		this.ani_star = <fgui.GLoader3D>(this.getChild("ani_star"));
		this.ani_niuniu = <fgui.GLoader3D>(this.getChild("ani_niuniu"));
		this.transPicError = this.getTransition("transPicError");
	}
}