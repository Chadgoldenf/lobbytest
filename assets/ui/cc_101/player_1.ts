/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import avatar from "./avatar";

export default class player_1 extends fgui.GComponent {

	public ctrlWinLose:fgui.Controller;
	public avatar:avatar;
	public textName:fgui.GTextField;
	public textBalance:fgui.GTextField;
	public textWinLose:fgui.GTextField;
	public static URL:string = "ui://spf3kkkguev36x";

	public static createInstance():player_1 {
		return <player_1>(fgui.UIPackage.createObject("cc_101", "player_1"));
	}

	protected onConstruct():void {
		this.ctrlWinLose = this.getController("ctrlWinLose");
		this.avatar = <avatar>(this.getChild("avatar"));
		this.textName = <fgui.GTextField>(this.getChild("textName"));
		this.textBalance = <fgui.GTextField>(this.getChild("textBalance"));
		this.textWinLose = <fgui.GTextField>(this.getChild("textWinLose"));
	}
}