/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class win_list_item extends fgui.GComponent {

	public ctrlPlayerType:fgui.Controller;
	public ctrlWinLoseType:fgui.Controller;
	public textName:fgui.GTextField;
	public textCardType:fgui.GTextField;
	public textAmount:fgui.GTextField;
	public textBet:fgui.GTextField;
	public textWinLose:fgui.GTextField;
	public static URL:string = "ui://spf3kkkgem2vac";

	public static createInstance():win_list_item {
		return <win_list_item>(fgui.UIPackage.createObject("cc_101", "win_list_item"));
	}

	protected onConstruct():void {
		this.ctrlPlayerType = this.getController("ctrlPlayerType");
		this.ctrlWinLoseType = this.getController("ctrlWinLoseType");
		this.textName = <fgui.GTextField>(this.getChild("textName"));
		this.textCardType = <fgui.GTextField>(this.getChild("textCardType"));
		this.textAmount = <fgui.GTextField>(this.getChild("textAmount"));
		this.textBet = <fgui.GTextField>(this.getChild("textBet"));
		this.textWinLose = <fgui.GTextField>(this.getChild("textWinLose"));
	}
}