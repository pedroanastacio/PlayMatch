import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditarPerfilPage } from './editar-perfil';

@NgModule({
  declarations: [
    EditarPerfilPage,
  ],
  imports: [
    IonicPageModule.forChild(EditarPerfilPage),
  ],
})
export class EditarPerfilPageModule {}
