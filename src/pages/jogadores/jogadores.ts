import { Component } from '@angular/core';
import { IonicPage, NavController, ToastController, NavParams } from 'ionic-angular';
import { ContactProvider } from './../../providers/contact/contact';
import { Observable } from 'rxjs/Observable';

/**
 * Generated class for the JogadoresPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-jogadores',
  templateUrl: 'jogadores.html'
})
export class JogadoresPage {

  peladaModalidade: any;
  contacts: Observable<any>;
  peladaKey: any;

  constructor(public navCtrl: NavController, private provider: ContactProvider,
    private toast: ToastController, public navParams: NavParams) {
    
    this.peladaModalidade = this.navParams.data.peladaModalidade;
    this.peladaKey = this.navParams.data.peladaKey;  
    this.contacts = this.provider.getAll(this.peladaKey);
    
  }
 
  newContact(peladaKey: any, peladaModalidade: any) {
    this.navCtrl.push('ContactEditPage', {peladaKey: peladaKey, peladaModalidade: peladaModalidade});
  }
 
  editContact(contact: any, peladaKey: any, peladaModalidade: any) {
    
    this.navCtrl.push('ContactEditPage', { contact: contact, peladaKey: peladaKey, peladaModalidade: peladaModalidade });
 
    
  }
 
  removeContact(key: string) {
    if (key) {
      this.provider.remove(key, this.peladaKey)
        .then(() => {
          this.toast.create({ message: 'Jogador removido com sucesso.', duration: 3000 }).present();
        })
        .catch(() => {
          this.toast.create({ message: 'Erro ao remover jogador.', duration: 3000 }).present();
        });
    }
  }


}
