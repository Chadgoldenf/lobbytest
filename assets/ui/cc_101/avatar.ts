/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class avatar extends fgui.GComponent {

	public mask_player:fgui.GImage;
	public static URL:string = "ui://spf3kkkghi0u6q";

	public static createInstance():avatar {
		return <avatar>(fgui.UIPackage.createObject("cc_101", "avatar"));
	}

	protected onConstruct():void {
		this.mask_player = <fgui.GImage>(this.getChild("mask_player"));
	}
}