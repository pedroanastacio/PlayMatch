import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AddRoomPage } from '../add-room/add-room';
import { SignupPage } from '../signup/signup';
import { ChatPage } from '../chat/chat';
import * as firebase from 'Firebase';
import { NicknameChatPage } from '../nickname-chat/nickname-chat';
/**
 * Generated class for the RoomPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-room',
  templateUrl: 'room.html',
})
export class RoomPage {
  rooms = [];
  ref = firebase.database().ref('chatrooms/');

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.ref.on('value', resp => {
      this.rooms = [];
      this.rooms = snapshotToArray(resp);
    });
  }

  addRoom() {
    this.navCtrl.push('AddRoomPage');
  }

  joinRoom(key) {
    this.navCtrl.setRoot('ChatPage', {
      key:key,
      nickname:this.navParams.get("nickname")
    });
  }

  criarNick(){
    this.navCtrl.push('NicknameChatPage');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RoomPage');
  }
}

export const snapshotToArray = snapshot => {
  let returnArr = [];

  snapshot.forEach(childSnapshot => {
      let item = childSnapshot.val();
      item.key = childSnapshot.key;
      returnArr.push(item);
  });

  return returnArr;
};
