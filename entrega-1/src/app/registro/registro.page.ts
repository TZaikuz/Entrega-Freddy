import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {


  nombre: String;
  Contrasena: String;
  correo: String;

  constructor(private navCrtl:NavController , private alertController: AlertController) { }
  

  
  ngOnInit() {
  
  }
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'El Correo a sido mandado de manera correcta',
      subHeader: 'La Direccion de correo era:.........@duocuc.cl',
      message: 'Tiene 5 minutos para que siga siendo valido el correo',
      buttons: ['OK'],
    });

    await alert.present();
  }
}