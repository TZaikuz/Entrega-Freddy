import { Component } from '@angular/core';
import { LoadingController, NavController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

 
  constructor(private navCtrl:NavController,
  private loadingController: LoadingController,) {}


  async animacion() {
    const loading = await this.loadingController.create({
      message: 'Cargando Info <3',
      duration: 600,
      cssClass: 'custom-loading',
    });
    console.log('Pulso "boton"')
    await loading.present();
  }


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
