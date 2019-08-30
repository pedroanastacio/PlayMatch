
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';


@Injectable()
export class ContactProvider {
  
  private PATH = 'jogadores/';
  
  
  constructor(private db: AngularFireDatabase) {
  }
 
   getAll(peladaKey) {
    return this.db.list('peladas/'+peladaKey+'/jogadores' , ref => ref.orderByKey())
      .snapshotChanges()
      .map(changes => {
        return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
      })
  }
 
  get(key: string) {
    return this.db.object(this.PATH + key).snapshotChanges()
      .map(c => {
        return { key: c.key, ...c.payload.val() }; 
      });
  }
 
  save(contact: any, peladaKey: any) {
    return new Promise((resolve, reject) => {
      if (contact.key) {
        this.db.list('peladas/'+peladaKey+'/jogadores')
          .update(contact.key, { name: contact.name, posicao: contact.posicao })
          .then(() => resolve())
          .catch((e) => reject(e));
       /*this.db.object('peladas/'+peladaKey+'/jogadores/' + contact.key)
          .update( { name: contact.name })
          .then(() => resolve())
          .catch((e) => reject(e));*/
      } else {
        this.db.list('peladas/'+peladaKey+'/jogadores')
          .push({ name: contact.name, posicao: contact.posicao })
          .then(() => resolve());
      }
    })
  }
 
  remove(key: string, peladaKey: any) {
    return this.db.list('peladas/'+peladaKey+'/jogadores').remove(key);
  }
}