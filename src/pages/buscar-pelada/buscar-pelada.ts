import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { PeladasProvider } from './../../providers/peladas/peladas';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ListaPeladasPage } from '../lista-peladas/lista-peladas';
import { Observable } from 'rxjs/Observable';

@IonicPage()
@Component({
  selector: 'page-buscar-pelada',
  templateUrl: 'buscar-pelada.html',
})
export class BuscarPeladaPage {
  
  filtro: any;
  searchForm: FormGroup;
  peladas: Observable<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private formBuilder: FormBuilder, private provider: PeladasProvider, private toast: ToastController) {

    console.log(this.filtro);
    
    this.searchForm = formBuilder.group({
			searchTerm: ['', Validators.required]
          });
          
  }
    
  jogadores(peladaKey: any, peladaModalidade: any) {
    this.navCtrl.push('JogadoresPage', {peladaKey: peladaKey, peladaModalidade: peladaModalidade});
  }

  buscarData(){
    let data = this.searchForm.value;
    let searchTerms = { 
     searchTerm: data.searchTerm
    };

    this.provider.getListDate(searchTerms);
    this.peladas = this.provider.getListDate(searchTerms);
  }
  
  buscarNome(){
    let data = this.searchForm.value;
    let searchTerms = {
     searchTerm: data.searchTerm
    };

    this.provider.getListName(searchTerms);
    this.peladas = this.provider.getListName(searchTerms);
  }
  
  buscarPreco(){
    let data = this.searchForm.value;
    let searchTerms = {
     searchTerm: data.searchTerm
    };

    this.provider.getListPreco(searchTerms);
    this.peladas = this.provider.getListPreco(searchTerms);
  }

  buscarModalidade(){
    let data = this.searchForm.value;
    let searchTerms = {
     searchTerm: data.searchTerm
    };

    this.provider.getListModalidade(searchTerms);
    this.peladas = this.provider.getListModalidade(searchTerms);
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



  ionViewDidLoad() {
    console.log('ionViewDidLoad BuscarPeladaPage');
  }

}
