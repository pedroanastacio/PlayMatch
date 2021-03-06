import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

<<<<<<< HEAD
=======

>>>>>>> 703f45162555d956d6d01bd3f4ffb719ac9efcbf
import { SignupPage } from '../signup/signup';

import { AuthService } from '../../services/auth.service';
import { ListaPeladasPage } from '../lista-peladas/lista-peladas';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
	loginForm: FormGroup;
	loginError: string;

	constructor(
		private navCtrl: NavController, private auth: AuthService, fb: FormBuilder) {
<<<<<<< HEAD

=======
		
>>>>>>> 703f45162555d956d6d01bd3f4ffb719ac9efcbf
			this.loginForm = fb.group({
			email: ['', Validators.compose([Validators.required, Validators.email])],
			password: ['', Validators.compose([Validators.required, Validators.minLength(7)])]
		});
	}



login() {
	let data = this.loginForm.value;

	if (!data.email) {
		return;
	}

	let credentials = {
		email: data.email,
		password: data.password
	};
	this.auth.signInWithEmail(credentials)
		.then(
			() => this.navCtrl.setRoot(ListaPeladasPage),
<<<<<<< HEAD
			error => this.loginError = 'Não há registro de usuário correspondente a esse identificador. O usuário pode ter sido excluído.'
=======
			error => this.loginError = 'Não há registro de usuário correspondente a esse identificador. O usuário pode ter sido excluído.' 
>>>>>>> 703f45162555d956d6d01bd3f4ffb719ac9efcbf
		);
	}

	signup(){
	this.navCtrl.push(SignupPage);
  }

  loginWithGoogle() {
	this.auth.signInWithGoogle()
	  .then(
		() => this.navCtrl.setRoot(ListaPeladasPage),
		error => console.log(error.message)
	  );
  }

}
