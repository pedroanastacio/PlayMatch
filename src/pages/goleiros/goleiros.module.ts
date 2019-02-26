import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GoleirosPage } from './goleiros';

@NgModule({
  declarations: [
    GoleirosPage,
  ],
  imports: [
    IonicPageModule.forChild(GoleirosPage),
  ],
})
export class GoleirosPageModule {}
