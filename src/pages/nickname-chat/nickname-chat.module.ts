import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NicknameChatPage } from './nickname-chat';

@NgModule({
  declarations: [
    NicknameChatPage,
  ],
  imports: [
    IonicPageModule.forChild(NicknameChatPage),
  ],
})
export class NicknameChatPageModule {}
