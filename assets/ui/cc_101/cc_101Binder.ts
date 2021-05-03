/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import win_list_item from "./win_list_item";
import win_list from "./win_list";
import cardType from "./cardType";
import bg_table from "./bg_table";
import pic_error from "./pic_error";
import pic_remind from "./pic_remind";
import room_info from "./room_info";
import avatar from "./avatar";
import cardLicensing from "./cardLicensing";
import stage from "./stage";
import card_0 from "./card_0";
import card_1 from "./card_1";
import main_game from "./main_game";
import player_0 from "./player_0";
import player_1 from "./player_1";
import bet_info from "./bet_info";
import time_clock from "./time_clock";

export default class cc_101Binder {
	public static bindAll():void {
		fgui.UIObjectFactory.setExtension(win_list_item.URL, win_list_item);
		fgui.UIObjectFactory.setExtension(win_list.URL, win_list);
		fgui.UIObjectFactory.setExtension(cardType.URL, cardType);
		fgui.UIObjectFactory.setExtension(bg_table.URL, bg_table);
		fgui.UIObjectFactory.setExtension(pic_error.URL, pic_error);
		fgui.UIObjectFactory.setExtension(pic_remind.URL, pic_remind);
		fgui.UIObjectFactory.setExtension(room_info.URL, room_info);
		fgui.UIObjectFactory.setExtension(avatar.URL, avatar);
		fgui.UIObjectFactory.setExtension(cardLicensing.URL, cardLicensing);
		fgui.UIObjectFactory.setExtension(stage.URL, stage);
		fgui.UIObjectFactory.setExtension(card_0.URL, card_0);
		fgui.UIObjectFactory.setExtension(card_1.URL, card_1);
		fgui.UIObjectFactory.setExtension(main_game.URL, main_game);
		fgui.UIObjectFactory.setExtension(player_0.URL, player_0);
		fgui.UIObjectFactory.setExtension(player_1.URL, player_1);
		fgui.UIObjectFactory.setExtension(bet_info.URL, bet_info);
		fgui.UIObjectFactory.setExtension(time_clock.URL, time_clock);
	}
}