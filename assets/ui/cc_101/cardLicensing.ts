/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class cardLicensing extends fgui.GComponent {

	public ctrlPlayer_1:fgui.Controller;
	public ctrlPlayer_2:fgui.Controller;
	public ctrlPlayer_3:fgui.Controller;
	public cardLicensing_0:fgui.GImage;
	public cardLicensing_1:fgui.GImage;
	public cardLicensing_2:fgui.GImage;
	public cardLicensing_3:fgui.GImage;
	public cardLicensing_4:fgui.GImage;
	public group3:fgui.GGroup;
	public cardLicensing_5:fgui.GImage;
	public cardLicensing_6:fgui.GImage;
	public cardLicensing_7:fgui.GImage;
	public cardLicensing_8:fgui.GImage;
	public cardLicensing_9:fgui.GImage;
	public group2:fgui.GGroup;
	public cardLicensing_10:fgui.GImage;
	public cardLicensing_11:fgui.GImage;
	public cardLicensing_12:fgui.GImage;
	public cardLicensing_13:fgui.GImage;
	public cardLicensing_14:fgui.GImage;
	public group1:fgui.GGroup;
	public cardLicensing_15:fgui.GImage;
	public cardLicensing_16:fgui.GImage;
	public cardLicensing_17:fgui.GImage;
	public cardLicensing_18:fgui.GImage;
	public cardLicensing_19:fgui.GImage;
	public licensing:fgui.Transition;
	public static URL:string = "ui://spf3kkkgihjcap";

	public static createInstance():cardLicensing {
		return <cardLicensing>(fgui.UIPackage.createObject("cc_101", "cardLicensing"));
	}

	protected onConstruct():void {
		this.ctrlPlayer_1 = this.getController("ctrlPlayer_1");
		this.ctrlPlayer_2 = this.getController("ctrlPlayer_2");
		this.ctrlPlayer_3 = this.getController("ctrlPlayer_3");
		this.cardLicensing_0 = <fgui.GImage>(this.getChild("cardLicensing_0"));
		this.cardLicensing_1 = <fgui.GImage>(this.getChild("cardLicensing_1"));
		this.cardLicensing_2 = <fgui.GImage>(this.getChild("cardLicensing_2"));
		this.cardLicensing_3 = <fgui.GImage>(this.getChild("cardLicensing_3"));
		this.cardLicensing_4 = <fgui.GImage>(this.getChild("cardLicensing_4"));
		this.group3 = <fgui.GGroup>(this.getChild("group3"));
		this.cardLicensing_5 = <fgui.GImage>(this.getChild("cardLicensing_5"));
		this.cardLicensing_6 = <fgui.GImage>(this.getChild("cardLicensing_6"));
		this.cardLicensing_7 = <fgui.GImage>(this.getChild("cardLicensing_7"));
		this.cardLicensing_8 = <fgui.GImage>(this.getChild("cardLicensing_8"));
		this.cardLicensing_9 = <fgui.GImage>(this.getChild("cardLicensing_9"));
		this.group2 = <fgui.GGroup>(this.getChild("group2"));
		this.cardLicensing_10 = <fgui.GImage>(this.getChild("cardLicensing_10"));
		this.cardLicensing_11 = <fgui.GImage>(this.getChild("cardLicensing_11"));
		this.cardLicensing_12 = <fgui.GImage>(this.getChild("cardLicensing_12"));
		this.cardLicensing_13 = <fgui.GImage>(this.getChild("cardLicensing_13"));
		this.cardLicensing_14 = <fgui.GImage>(this.getChild("cardLicensing_14"));
		this.group1 = <fgui.GGroup>(this.getChild("group1"));
		this.cardLicensing_15 = <fgui.GImage>(this.getChild("cardLicensing_15"));
		this.cardLicensing_16 = <fgui.GImage>(this.getChild("cardLicensing_16"));
		this.cardLicensing_17 = <fgui.GImage>(this.getChild("cardLicensing_17"));
		this.cardLicensing_18 = <fgui.GImage>(this.getChild("cardLicensing_18"));
		this.cardLicensing_19 = <fgui.GImage>(this.getChild("cardLicensing_19"));
		this.licensing = this.getTransition("licensing");
	}
}