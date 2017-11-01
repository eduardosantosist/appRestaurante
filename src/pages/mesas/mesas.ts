import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MesasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mesas',
  templateUrl: 'mesas.html',
})
export class MesasPage {
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MesasPage');
  }

  getHorario(idMesa:number){
    var d = new Date();
    var h = d.getHours();
    var m = d.getMinutes();
    console.log(idMesa);
    var horario:string = h+":"+m;
    localStorage.setItem("mesa"+idMesa,horario);
    
  }
}
