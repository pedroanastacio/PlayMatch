import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { ContactProvider } from './../../providers/contact/contact';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

/**
 * Generated class for the ContactEditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contact-edit',
  templateUrl: 'contact-edit.html',
})
export class ContactEditPage {
  peladaModalidade: any;
  title: string;
  form: FormGroup;
  contact: any;
  peladaKey: any;
  

  constructor(
    public navCtrl: NavController, public navParams: NavParams,
    private formBuilder: FormBuilder, private provider: ContactProvider,
    private toast: ToastController) {
    
    this.peladaModalidade =  this.navParams.data.peladaModalidade;
    console.log(this.peladaModalidade);
    this.peladaKey = this.navParams.data.peladaKey;  
    // maneira 1
    this.contact = this.navParams.data.contact || { };
    this.createForm();
 
     
    this.setupPageTitle();
  }
 
  private setupPageTitle() {
    this.title = this.navParams.data.contact ? 'Alterando jogador' : 'Novo jogador';
  }
 
  createForm() {
    this.form = this.formBuilder.group({
      key: [this.contact.key],
      name: [this.contact.name, Validators.required],
      posicao: [this.contact.posicao, Validators.required]
    });
  }
 
  onSubmit() {
    if (this.form.valid) {
      this.provider.save(this.form.value, this.peladaKey)
        .then(() => {
          this.toast.create({ message: 'Jogador Adicionado com sucesso.', duration: 3000 }).present();
          this.navCtrl.pop();
        })
        .catch((e) => {
          this.toast.create({ message: 'Erro ao adicionar jogador.', duration: 3000 }).present();
          console.error(e);
        })
    }
  }
}
