import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { PeladasProvider } from './../../providers/peladas/peladas';
import { Observable } from 'rxjs/Observable';
import { JogadoresPage } from '../jogadores/jogadores';
import * as firebase from 'Firebase';

@IonicPage()
@Component({
  
  selector: 'page-lista-peladas',
  templateUrl: 'lista-peladas.html',
})
export class ListaPeladasPage {

  peladas: Observable<any>;
  data = { roomname:'' };
  ref = firebase.database().ref('chatrooms/');
  peladaName: any;
  
  constructor(public navCtrl: NavController, private provider: PeladasProvider, public navParams: NavParams, private toast: ToastController){
    
    this.peladas = this.provider.getAll();
  }

  criarPelada() {
    this.navCtrl.push('CriarPeladaPage');
  }

  criarChat(peladaName:any){
    this.navCtrl.push('AddRoomPage', {peladaName: peladaName});
   
  }

  jogadores(peladaKey: any, peladaModalidade: any) {
    this.navCtrl.push('JogadoresPage', {peladaKey: peladaKey, peladaModalidade: peladaModalidade});
  }
  
  buscarPelada() {
    this.navCtrl.push('BuscarPeladaPage');
  }

  editarPelada(pelada: any) {
    // Maneira 1
    this.navCtrl.push('CriarPeladaPage', { pelada: pelada });
 
    // Maneira 2
    // this.navCtrl.push('ContactEditPage', { key: contact.key });
  }
 
  removerPelada(key: string) {
    if (key) {
      this.provider.remove(key)
        .then(() => {
          this.toast.create({ message: 'Pelada removida com sucesso.', duration: 3000 }).present();
        })
        .catch(() => {
          this.toast.create({ message: 'Erro ao remover pelada.', duration: 3000 }).present();
        });
    }
  }

}
