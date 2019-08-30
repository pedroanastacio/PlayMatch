import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabaseModule, AngularFireDatabase, snapshotChanges } from 'angularfire2/database';

@Injectable()
export class PeladasProvider {
  private PATH = 'peladas/';

  constructor(private db: AngularFireDatabase) {}
    
    getAll(){
      return this.db.list(this.PATH, ref => ref.orderByChild('dataPelada'))
        .snapshotChanges()
        .map(changes => {
          return changes.map(p => ({ key: p.payload.key, ...p.payload.val() })); 
        })
    }

    getListDate(searchTerms){
      return this.db.list(this.PATH, ref => ref.orderByChild('dataPelada').equalTo(searchTerms.searchTerm))
        .snapshotChanges()
        .map(changes => {
          return changes.map(p => ({ key: p.payload.key, ...p.payload.val() }));
        })
    }

    getListName(searchTerms){
      return this.db.list(this.PATH, ref => ref.orderByChild('name').equalTo(searchTerms.searchTerm)) 
        .snapshotChanges()
        .map(changes => {
          return changes.map(p => ({ key: p.payload.key, ...p.payload.val() }));
        })
    }

    getListPreco(searchTerms){
      return this.db.list(this.PATH, ref => ref.orderByChild('precoJogador').equalTo(searchTerms.searchTerm))
        .snapshotChanges()
        .map(changes => {
          return changes.map(p => ({ key: p.payload.key, ...p.payload.val() }));
        })
    }

    getListModalidade(searchTerms){
      return this.db.list(this.PATH, ref => ref.orderByChild('modalidade').equalTo(searchTerms.searchTerm))
        .snapshotChanges()
        .map(changes => {
          return changes.map(p => ({ key: p.payload.key, ...p.payload.val() }));
        })
    }

    get(key: string){
      return this.db.object(this.PATH + key).snapshotChanges()
      .map(p => {
        return { key: p.key, ...p.payload.val() };
      });
    }

    save(pelada: any){
      return new Promise((resolve, reject) => { 
        if (pelada.key) {
          this.db.object(this.PATH + pelada.key)
            .update({ name: pelada.name, local: pelada.local, numJogador: pelada.numJogador, dataPelada: pelada.dataPelada, horaPelada: pelada.horaPelada, precoJogador: pelada.precoJogador, modalidade: pelada.modalidade, cidade: pelada.cidade })
            .then(() => resolve())
            .catch((e) => reject(e));
        } else {
          this.db.list(this.PATH)
            .push({ name: pelada.name, local: pelada.local, numJogador: pelada.numJogador, dataPelada: pelada.dataPelada, horaPelada: pelada.horaPelada, precoJogador: pelada.precoJogador, modalidade: pelada.modalidade, cidade: pelada.cidade })
            .then(() => resolve());
        }
      })
    }

    remove(key: string){
      return this.db.list(this.PATH).remove(key);

    }

  }


