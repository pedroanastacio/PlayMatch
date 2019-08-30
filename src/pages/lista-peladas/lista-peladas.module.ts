import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListaPeladasPage } from './lista-peladas';

@NgModule({
  declarations: [
    ListaPeladasPage,
  ],
  imports: [
    IonicPageModule.forChild(ListaPeladasPage),
  ],
})
export class ListaPeladasPageModule {}
