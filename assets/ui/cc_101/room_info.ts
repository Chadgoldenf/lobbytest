/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class room_info extends fgui.GComponent {

	public textRound:fgui.GTextField;
	public textAmount:fgui.GTextField;
	public static URL:string = "ui://spf3kkkghi0u6o";

	public static createInstance():room_info {
		return <room_info>(fgui.UIPackage.createObject("cc_101", "room_info"));
	}

	protected onConstruct():void {
		this.textRound = <fgui.GTextField>(this.getChild("textRound"));
		this.textAmount = <fgui.GTextField>(this.getChild("textAmount"));
	}
}