/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class bg_table extends fgui.GComponent {

	public bgTable:fgui.Controller;
	public bg_table:fgui.GImage;
	public static URL:string = "ui://spf3kkkgfgru2";

	public static createInstance():bg_table {
		return <bg_table>(fgui.UIPackage.createObject("cc_101", "bg_table"));
	}

	protected onConstruct():void {
		this.bgTable = this.getController("bgTable");
		this.bg_table = <fgui.GImage>(this.getChild("bg_table"));
	}
}