import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuariosProvider } from '../../providers/usuarios/usuarios';
import { AngularFireAuth } from 'angularfire2/auth';


@IonicPage()
@Component({
  selector: 'page-editar-perfil',
  templateUrl: 'editar-perfil.html',
})
export class EditarPerfilPage {
  form: FormGroup;
  userperfil: any;
  contato: any;
  title: string;
  modalidade: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,  private formBuilder: FormBuilder, private provider: UsuariosProvider,
    private toast: ToastController, public afAuth: AngularFireAuth) {
    
    console.log(this.modalidade);  
    console.log(this.contato);
    this.userperfil = this.navParams.data.userperfil || {};
    this.createForm();

    this.setupPageTitle();
    }

  private setupPageTitle() {
    this.title = this.navParams.data.userperfil ? 'Alterando perfil' : 'Perfil';
  }


  createForm() {
    this.form = this.formBuilder.group({
      key: [this.userperfil.key],
      username: [this.userperfil.username, Validators.required],
      modalidade: [this.userperfil.modalidade, Validators.required],
      posicao: [this.userperfil.posicao, Validators.required],
      redeSocial: [this.userperfil.redeSocial, Validators.required],
      userWpp: [this.userperfil.userWpp],
      userFb: [this.userperfil.userFb],
      userInsta: [this.userperfil.userInsta],
      userTt: [this.userperfil.userTt],
      userID: [this.afAuth.auth.currentUser.uid]
    });
  }

  editarPerfil() {
    if (this.form.valid) {
      this.provider.save(this.form.value)
        .then(() => {
          this.toast.create({ message: 'Perfil atualizado com sucesso.', duration: 3000 }).present();
          this.navCtrl.pop();
        })
        .catch((e) => {
          this.toast.create({ message: 'Erro ao atualizar perfil.', duration: 3000 }).present();
          console.error(e);
        })
    }
     }


  

 

}
