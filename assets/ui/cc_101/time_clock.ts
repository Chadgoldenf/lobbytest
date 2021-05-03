/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class time_clock extends fgui.GComponent {

	public pic_clock:fgui.GImage;
	public textTime:fgui.GTextField;
	public static URL:string = "ui://spf3kkkguev37q";

	public static createInstance():time_clock {
		return <time_clock>(fgui.UIPackage.createObject("cc_101", "time_clock"));
	}

	protected onConstruct():void {
		this.pic_clock = <fgui.GImage>(this.getChild("pic_clock"));
		this.textTime = <fgui.GTextField>(this.getChild("textTime"));
	}
}