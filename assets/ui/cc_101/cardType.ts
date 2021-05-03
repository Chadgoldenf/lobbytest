/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class cardType extends fgui.GComponent {

	public ctrlCardType:fgui.Controller;
	public static URL:string = "ui://spf3kkkgem2vaj";

	public static createInstance():cardType {
		return <cardType>(fgui.UIPackage.createObject("cc_101", "cardType"));
	}

	protected onConstruct():void {
		this.ctrlCardType = this.getController("ctrlCardType");
	}
}