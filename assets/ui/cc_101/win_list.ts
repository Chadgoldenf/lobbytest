/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import win_list_item from "./win_list_item";

export default class win_list extends fgui.GComponent {

	public ctrlWindowType:fgui.Controller;
	public ctrlTopWinner:fgui.Controller;
	public aniLoader:fgui.GLoader3D;
	public player_0:win_list_item;
	public player_1:win_list_item;
	public player_2:win_list_item;
	public player_3:win_list_item;
	public winList:fgui.GGroup;
	public static URL:string = "ui://spf3kkkgem2vai";

	public static createInstance():win_list {
		return <win_list>(fgui.UIPackage.createObject("cc_101", "win_list"));
	}

	protected onConstruct():void {
		this.ctrlWindowType = this.getController("ctrlWindowType");
		this.ctrlTopWinner = this.getController("ctrlTopWinner");
		this.aniLoader = <fgui.GLoader3D>(this.getChild("aniLoader"));
		this.player_0 = <win_list_item>(this.getChild("player_0"));
		this.player_1 = <win_list_item>(this.getChild("player_1"));
		this.player_2 = <win_list_item>(this.getChild("player_2"));
		this.player_3 = <win_list_item>(this.getChild("player_3"));
		this.winList = <fgui.GGroup>(this.getChild("winList"));
	}
}