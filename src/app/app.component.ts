import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


import { ListaPeladasPage } from '../pages/lista-peladas/lista-peladas';
import { LoginPage } from '../pages/login/login';
import { PerfilPage } from '../pages/perfil/perfil';
import { PlacarPage } from '../pages/placar/placar';

import { AuthService } from '../services/auth.service';
import { GoleirosPage } from '../pages/goleiros/goleiros';
import { RoomPage } from '../pages/room/room';
import { UsuariosProvider } from '../providers/usuarios/usuarios';
import { Observable } from 'rxjs/Observable';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  private menu: MenuController;

  @ViewChild(Nav) nav: Nav;

  rootPage:any = ListaPeladasPage;

  pages: Array<{title: string, component: any}>;

 
  constructor(public platform: Platform, public statusBar: StatusBar,menu: MenuController, public splashScreen: SplashScreen, private auth: AuthService) {
    
    this.menu = menu;
    
    this.initializeApp();

    this.pages = [
    
    { title: 'Perfil', component: PerfilPage},
    { title: 'Peladas', component: ListaPeladasPage },
    { title: 'Jogadores', component: GoleirosPage},
    { title: 'Placar', component: PlacarPage},
    
    ];  
  }

    initializeApp() {
      this.rootPage = LoginPage;
      this.platform.ready().then(() => {
        
        this.statusBar.styleDefault();
        this.splashScreen.hide();
    });


this.auth.afAuth.authState
    .subscribe(
      user => {
        if (user) {
          this.rootPage = ListaPeladasPage;
        } else {
          this.rootPage = LoginPage;
        }
      },
      () => {
        this.rootPage = LoginPage;
      }
    );
 }

login() {
  this.menu.close();
	this.auth.signOut();
	this.nav.setRoot(LoginPage);
}

logout() {
	this.menu.close();
	this.auth.signOut();
	this.nav.setRoot(ListaPeladasPage);
}

    openPage(page) {
      // Reset the content nav to have just this page
      // we wouldn't want the back button to show in this scenario
      this.nav.setRoot(page.component);
    }

}