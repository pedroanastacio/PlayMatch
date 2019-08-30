import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


/**
 * Generated class for the PlacarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-placar',
  templateUrl: 'placar.html',
})
export class PlacarPage {
  public hora:number = 0;
  public minuto:number = 0;
  public segundo:number = 0;
  public decimo: number = 0;

  public contaLoop:Array<any> = [];
  public contador:any;
  pause: boolean;
  pause2: boolean;
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
   
   
  }


modify_qty(val) { 
  var qty = (<HTMLInputElement>document.getElementById('qty')).value;
  var new_qty = parseInt(qty,10) + val;
  
  if (new_qty < 0) {
      new_qty = 0;
  }
  
  (<HTMLInputElement>document.getElementById('qty')).value = new_qty;
  return new_qty;
}

modify_qty1(val) {
  var qty1 = (<HTMLInputElement>document.getElementById('qty1')).value;
  var new_qty1 = parseInt(qty1,10) + val;
  
  if (new_qty1 < 0) {
      new_qty1 = 0;
  }
  
  (<HTMLInputElement>document.getElementById('qty1')).value = new_qty1;
  return new_qty1;

}


comeca(){
  this.pause = false;
  this.comeca1(this.pause);
}


comeca1(pause: boolean){
  this.pause2 = pause;
  this.comeca2();
}



comeca2(){
  if(!this.pause2){  
  if(this.contador == undefined){
    this.contador = setInterval(()=>{this.decimo += 1;
      if(this.decimo == 10){
        this.decimo = 0;
        this.segundo +=1;
        if(this.segundo == 60){
          this.segundo = 0;
          this.minuto += 1;
          if(this.minuto == 60){
            this.minuto = 0;
            this.hora += 1;
            if(this.hora = 24){
              this.hora = 0;
          }
        }
      }
    }
  
    }, 100);
  }     
  }
}

zerar(){
  clearInterval(this.contador);
  this.hora = 0;
  this.minuto = 0;
  this.segundo = 0;
  this.decimo = 0;
  this.contador = null;
  
  
}

parar(){
  clearInterval(this.contador);
  this.hora = this.hora;
  this.minuto = this.minuto;
  this.segundo = this.segundo;
  this.decimo = this.decimo;
  this.contador = null;

 
  this.pause = true;
  this.comeca1(this.pause);
}





} 
