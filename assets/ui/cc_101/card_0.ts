/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class card_0 extends fgui.GComponent {

	public card_0:fgui.GLoader;
	public card_1:fgui.GLoader;
	public card_2:fgui.GLoader;
	public card_4:fgui.GLoader;
	public card_3:fgui.GLoader;
	public transCard_0:fgui.Transition;
	public static URL:string = "ui://spf3kkkgp8v5a7";

	public static createInstance():card_0 {
		return <card_0>(fgui.UIPackage.createObject("cc_101", "card_0"));
	}

	protected onConstruct():void {
		this.card_0 = <fgui.GLoader>(this.getChild("card_0"));
		this.card_1 = <fgui.GLoader>(this.getChild("card_1"));
		this.card_2 = <fgui.GLoader>(this.getChild("card_2"));
		this.card_4 = <fgui.GLoader>(this.getChild("card_4"));
		this.card_3 = <fgui.GLoader>(this.getChild("card_3"));
		this.transCard_0 = this.getTransition("transCard_0");
	}
}