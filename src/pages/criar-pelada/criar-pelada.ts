import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { PeladasProvider } from './../../providers/peladas/peladas';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ListaPeladasPage } from '../lista-peladas/lista-peladas';


@IonicPage()
@Component({
  selector: 'page-criar-pelada',
  templateUrl: 'criar-pelada.html',
})
export class CriarPeladaPage {
  title: string;
  form: FormGroup;
  pelada: any;

  constructor(
    public navCtrl: NavController, public navParams: NavParams,
    private formBuilder: FormBuilder, private provider: PeladasProvider,
    private toast: ToastController) {
    
    this.pelada = this.navParams.data.pelada || {};
    this.createForm();

    this.setupPageTitle();
    }

  private setupPageTitle() {
    this.title = this.navParams.data.pelada ? 'Alterando pelada' : 'Nova pelada';
  }

  createForm() {
    this.form = this.formBuilder.group({
      key: [this.pelada.key],
      name: [this.pelada.name, Validators.required],
      local: [this.pelada.local],
      numJogador: [this.pelada.numJogador],
      dataPelada: [this.pelada.dataPelada, Validators.required],
      horaPelada: [this.pelada.horaPelada],
      precoJogador: [this.pelada.precoJogador],
      modalidade: [this.pelada.modalidade, Validators.required],
      cidade: [this.pelada.cidade, Validators.required]
    });
  }

  onSubmit() {
    if (this.form.valid) {
      this.provider.save(this.form.value)
        .then(() => {
          this.toast.create({ message: 'Pelada criada com sucesso.', duration: 3000 }).present();
          this.navCtrl.pop();
        })
        .catch((e) => {
          this.toast.create({ message: 'Erro ao criar pelada.', duration: 3000 }).present();
          console.error(e);
        })
    } 
    
  }

 
}
