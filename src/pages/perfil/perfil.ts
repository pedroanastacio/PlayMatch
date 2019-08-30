import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { UsuariosProvider } from '../../providers/usuarios/usuarios';
import { AngularFireAuth } from 'angularfire2/auth';


@IonicPage()
@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html',
})
export class PerfilPage {
 
  userperfils: Observable<any>;
   
 
 
  constructor(public navCtrl: NavController, public navParams: NavParams, private provider: UsuariosProvider, public afAuth: AngularFireAuth) {
    
    this.userperfils = this.provider.getPerfil();
  }

  editPerfil(){
    this.navCtrl.push('EditarPerfilPage'); 
  }

  criarNick(nickname: any){
    this.navCtrl.push('NicknameChatPage', {nickname: nickname});
  }


 
}
