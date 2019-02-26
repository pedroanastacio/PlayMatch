import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { UsuariosProvider } from '../../providers/usuarios/usuarios';
import { Observable } from 'rxjs/Observable';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@IonicPage()
@Component({
  selector: 'page-goleiros',
  templateUrl: 'goleiros.html',
})
export class GoleirosPage {
  userperfils:  Observable<any>;
  modalidade: any;
  searchForm: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, private provider: UsuariosProvider, private formBuilder: FormBuilder, private toast: ToastController) {

    console.log(this.modalidade);

    this.searchForm = formBuilder.group({
			searchTerm: ['', Validators.required]
          });
 }

 buscarGolFutsal(){
  let data = this.searchForm.value;
  let searchTerms = { 
   searchTerm: data.searchTerm
  };

  this.provider.getListGolFutsal(searchTerms);
  this.userperfils = this.provider.getListGolFutsal(searchTerms);
}

buscarFixo(){
  let data = this.searchForm.value;
  let searchTerms = {
   searchTerm: data.searchTerm
  };

  this.provider.getListFixo(searchTerms);
  this.userperfils = this.provider.getListFixo(searchTerms);
}

buscarAla(){
  let data = this.searchForm.value;
  let searchTerms = {
   searchTerm: data.searchTerm
  };

  this.provider.getListAla(searchTerms);
  this.userperfils = this.provider.getListAla(searchTerms);
}

buscarPivo(){
  let data = this.searchForm.value;
  let searchTerms = {
   searchTerm: data.searchTerm
  };

  this.provider.getListPivo(searchTerms);
  this.userperfils = this.provider.getListPivo(searchTerms);
}

buscarGolFutebol(){
  let data = this.searchForm.value;
  let searchTerms = {
   searchTerm: data.searchTerm
  };

  this.provider.getListGolFutebol(searchTerms);
  this.userperfils = this.provider.getListGolFutebol(searchTerms);
}

buscarZag(){
  let data = this.searchForm.value;
  let searchTerms = {
   searchTerm: data.searchTerm
  };

  this.provider.getListZag(searchTerms);
  this.userperfils = this.provider.getListZag(searchTerms);
}

buscarMeia(){
  let data = this.searchForm.value;
  let searchTerms = {
   searchTerm: data.searchTerm
  };

  this.provider.getListMeia(searchTerms);
  this.userperfils = this.provider.getListMeia(searchTerms);
}

buscarAta(){
  let data = this.searchForm.value;
  let searchTerms = {
   searchTerm: data.searchTerm
  };

  this.provider.getListAta(searchTerms);
  this.userperfils = this.provider.getListAta(searchTerms);
}
  
}
