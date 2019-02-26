import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { NgxErrorsModule } from '@ultimate/ngxerrors';


import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

import { MyApp } from './app.component';

import { ListaPeladasPage } from '../pages/lista-peladas/lista-peladas';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { PlacarPage } from '../pages/placar/placar';
import { PerfilPage } from '../pages/perfil/perfil';
import { GoleirosPage } from '../pages/goleiros/goleiros';
import { RoomPage } from '../pages/room/room';



import { AuthService } from '../services/auth.service';
import { PeladasProvider } from '../providers/peladas/peladas';
import { GooglePlus } from '@ionic-native/google-plus';
import { ContactProvider } from '../providers/contact/contact';
import { UsuariosProvider } from '../providers/usuarios/usuarios';


@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    SignupPage,
    ListaPeladasPage,
    PlacarPage,
    PerfilPage,
    GoleirosPage,
    RoomPage,
      
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyAu_wlreCOpr9lQnuIIvZlvJMffz3Ba3tg",
    authDomain: "playmatch-95ce0.firebaseapp.com",
    databaseURL: "https://playmatch-95ce0.firebaseio.com",
    projectId: "playmatch-95ce0",
    storageBucket: "playmatch-95ce0.appspot.com",
    messagingSenderId: "21796931916"
    }),
    AngularFireDatabaseModule,
    NgxErrorsModule,

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ListaPeladasPage,
    LoginPage,
    SignupPage,
    PlacarPage,
    PerfilPage,
    GoleirosPage,
    RoomPage,
    
  ],
  providers: [
    StatusBar,
    AuthService,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AngularFireAuth,
    PeladasProvider,
    GooglePlus,
    ContactProvider,
    UsuariosProvider
  ]
})
export class AppModule {}
