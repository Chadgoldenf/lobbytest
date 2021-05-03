/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class bet_info extends fgui.GComponent {

	public ctrlBetInfo:fgui.Controller;
	public static URL:string = "ui://spf3kkkguev37p";

	public static createInstance():bet_info {
		return <bet_info>(fgui.UIPackage.createObject("cc_101", "bet_info"));
	}

	protected onConstruct():void {
		this.ctrlBetInfo = this.getController("ctrlBetInfo");
	}
}