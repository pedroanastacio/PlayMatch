import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';


@Injectable()
export class UsuariosProvider {
  private PATH = 'usuarios/' + this.afAuth.auth.currentUser.uid;
  private PATH2 = 'usuarios/';
 userID: any;
  constructor(private db: AngularFireDatabase, public afAuth: AngularFireAuth) {
    
  }

  getPerfil(){
    this.userID = this.afAuth.auth.currentUser.uid
    return this.db.list(this.PATH2, ref => ref.orderByChild('userID').equalTo(this.userID))
      .snapshotChanges()
      .map(changes => {
        return changes.map(p => ({ key: p.payload.key, ...p.payload.val() }));
      })
  }

  getListGolFutsal(searchTerms){
    return this.db.list(this.PATH2, ref => ref.orderByChild('posicao').equalTo(searchTerms.searchTerm))
      .snapshotChanges()
      .map(changes => {
        return changes.map(p => ({ key: p.payload.key, ...p.payload.val() }));
      })
  }

  
  getListFixo(searchTerms){
    return this.db.list(this.PATH2, ref => ref.orderByChild('posicao').equalTo(searchTerms.searchTerm))
      .snapshotChanges()
      .map(changes => {
        return changes.map(p => ({ key: p.payload.key, ...p.payload.val() }));
      })
  }
 
  getListAla(searchTerms){
    return this.db.list(this.PATH2, ref => ref.orderByChild('posicao').equalTo(searchTerms.searchTerm))
      .snapshotChanges()
      .map(changes => {
        return changes.map(p => ({ key: p.payload.key, ...p.payload.val() }));
      })
  }

  getListPivo(searchTerms){
    return this.db.list(this.PATH2, ref => ref.orderByChild('posicao').equalTo(searchTerms.searchTerm))
      .snapshotChanges()
      .map(changes => {
        return changes.map(p => ({ key: p.payload.key, ...p.payload.val() }));
      })
  }

  getListGolFutebol(searchTerms){
    return this.db.list(this.PATH2, ref => ref.orderByChild('posicao').equalTo(searchTerms.searchTerm))
      .snapshotChanges()
      .map(changes => {
        return changes.map(p => ({ key: p.payload.key, ...p.payload.val() }));
      })
  }

  getListZag(searchTerms){
    return this.db.list(this.PATH2, ref => ref.orderByChild('posicao').equalTo(searchTerms.searchTerm))
      .snapshotChanges()
      .map(changes => {
        return changes.map(p => ({ key: p.payload.key, ...p.payload.val() }));
      })
  }

  getListMeia(searchTerms){
    return this.db.list(this.PATH2, ref => ref.orderByChild('posicao').equalTo(searchTerms.searchTerm))
      .snapshotChanges()
      .map(changes => {
        return changes.map(p => ({ key: p.payload.key, ...p.payload.val() }));
      })
  }

  getListAta(searchTerms){
    return this.db.list(this.PATH2, ref => ref.orderByChild('posicao').equalTo(searchTerms.searchTerm))
      .snapshotChanges()
      .map(changes => {
        return changes.map(p => ({ key: p.payload.key, ...p.payload.val() }));
      })
  }

  get(key: string){
    return this.db.object(this.PATH2 + key).snapshotChanges() 
    .map(p => {
      return { key: p.key, ...p.payload.val() };
    });
  }
 
  save(userperfil: any){
    return new Promise((resolve, reject) => { 
      if (userperfil.key) {
        this.db.object(this.PATH + userperfil.key)
          .update( { username: userperfil.username, modalidade: userperfil.modalidade, posicao: userperfil.posicao, redeSocial: userperfil.redeSocial, userWpp: userperfil.userWpp, userFb: userperfil.userFb, userInsta: userperfil.userInsta, userTt: userperfil.userTt, userID: userperfil.userID })
          .then(() => resolve())
          .catch((e) => reject(e));
      } else {
        this.db.object(this.PATH)
          .set({ username: userperfil.username, modalidade: userperfil.modalidade, posicao: userperfil.posicao, redeSocial: userperfil.redeSocial, userWpp: userperfil.userWpp, userFb: userperfil.userFb, userInsta: userperfil.userInsta, userTt: userperfil.userTt, userID: userperfil.userID })
          .then(() => resolve());
      }
    })
  }

  

  
}
