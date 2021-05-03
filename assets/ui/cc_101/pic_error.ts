/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class pic_error extends fgui.GComponent {

	public picError:fgui.GImage;
	public transPicErrorLoop:fgui.Transition;
	public static URL:string = "ui://spf3kkkgfgru5";

	public static createInstance():pic_error {
		return <pic_error>(fgui.UIPackage.createObject("cc_101", "pic_error"));
	}

	protected onConstruct():void {
		this.picError = <fgui.GImage>(this.getChild("picError"));
		this.transPicErrorLoop = this.getTransition("transPicErrorLoop");
	}
}