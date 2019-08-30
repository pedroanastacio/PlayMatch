import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RoomPage } from  '../room/room';
/**
 * Generated class for the NicknameChatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-nickname-chat',
  templateUrl: 'nickname-chat.html',
})
export class NicknameChatPage {

  data = { nickname:"" };
  nickname: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.nickname = this.navParams.data.nickname;
    console.log(this.nickname);
    this.enterNickname();
  }

  enterNickname() {
    this.navCtrl.setRoot(RoomPage, {
      nickname: this.nickname
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NicknameChatPage');
  }

}
