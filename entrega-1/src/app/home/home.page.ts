import { Component } from '@angular/core';

import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

 
 constructor(private navCtrl:NavController) {}

 login(){
   
   this.navCtrl.navigateForward("login");
 }
 registro(){
  
   this.navCtrl.navigateForward("registro");
}
 listarEliminar(){
  
   this.navCtrl.navigateForward("listar-eliminar");
}
}
