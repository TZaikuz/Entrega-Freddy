import { Component, Input } from '@angular/core';
import { LoadingController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
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
}