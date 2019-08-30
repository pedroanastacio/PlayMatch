import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController } from 'ionic-angular';

import { AuthService } from '../../services/auth.service';
import { ListaPeladasPage } from '../lista-peladas/lista-peladas';

@Component({
	selector: 'as-page-signup',
	templateUrl: './signup.html'
})
export class SignupPage {
	signupError: string;
	form: FormGroup;

	constructor(
		fb: FormBuilder, private navCtrl: NavController, private auth: AuthService) {
      
		this.form = fb.group({
			email: ['', Validators.compose([Validators.required, Validators.email])],
			password: ['', Validators.compose([Validators.required, Validators.minLength(7)])]
		});
  }


signup() { 
  let data = this.form.value;
  let credentials = {
    email: data.email,
    password: data.password
  };
  this.auth.signUp(credentials).then(
    () => this.navCtrl.setRoot(ListaPeladasPage),
    error => this.signupError = error.message
  );
}
}