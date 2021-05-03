/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class pic_remind extends fgui.GComponent {

	public ctrlRemind:fgui.Controller;
	public picpinpaiBg:fgui.GImage;
	public textPinpai_1:fgui.GTextField;
	public textPinpai_2:fgui.GTextField;
	public textPinpai_3:fgui.GTextField;
	public textPinpai_4:fgui.GTextField;
	public picPinpai_1:fgui.GImage;
	public picPinpai_2:fgui.GImage;
	public static URL:string = "ui://spf3kkkgfgru8";

	public static createInstance():pic_remind {
		return <pic_remind>(fgui.UIPackage.createObject("cc_101", "pic_remind"));
	}

	protected onConstruct():void {
		this.ctrlRemind = this.getController("ctrlRemind");
		this.picpinpaiBg = <fgui.GImage>(this.getChild("picpinpaiBg"));
		this.textPinpai_1 = <fgui.GTextField>(this.getChild("textPinpai_1"));
		this.textPinpai_2 = <fgui.GTextField>(this.getChild("textPinpai_2"));
		this.textPinpai_3 = <fgui.GTextField>(this.getChild("textPinpai_3"));
		this.textPinpai_4 = <fgui.GTextField>(this.getChild("textPinpai_4"));
		this.picPinpai_1 = <fgui.GImage>(this.getChild("picPinpai_1"));
		this.picPinpai_2 = <fgui.GImage>(this.getChild("picPinpai_2"));
	}
}