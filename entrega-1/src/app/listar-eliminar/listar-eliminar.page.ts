import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { NavController } from '@ionic/angular';


 @Component({
  selector: 'app-listar-eliminar',
  templateUrl: './listar-eliminar.page.html',
  styleUrls: ['./listar-eliminar.page.scss'],
})
export class ListarEliminarPage implements OnInit {

  constructor(private alertCtrl: AlertController,
    private navCtrl: NavController
  ) { }

  async mensajeEliminar(nombre){
    const alerta = await this.alertCtrl.create({
      header:'Eliminar',
      message:'Desea elimnar reg '+nombre,
      buttons:[
        {text:'Cancelar',role:'cancel',handler:()=>{ console.log('Listo') }},
        {text:'Aceptar',role:'confirm',handler:()=>{ this.eliminar(nombre); }}
      ]
    });
    await alerta.present();
  }

  ngOnInit() {
    this.listar();
  }

      lista_usuarios = new Array();



 
    listar() {
      var datos = localStorage.getItem("datos");
      datos = datos.replace("[", "");
      datos = datos.replace("]", "");
      datos = datos.split("},{").join("};{");
      var arreglo = datos.split(";");
      for (let index = 0; index < arreglo.length; index++) {
      var reg = JSON.parse(arreglo[index]);
      this.lista_usuarios.push(reg);
      }}
      eliminar(nombre) {
        var datos = localStorage.getItem("datos");
        this.lista_usuarios=new Array(); // borrar la lista actual
        datos = datos.replace("[", "");
        datos = datos.replace("]", "");
        datos = datos.split("},{").join("};{");
        var arreglo = datos.split(";");
        for (let index = 0; index < arreglo.length; index++) {
          var reg = JSON.parse(arreglo[index]);
          if (nombre!=reg.nombre) {
            this.lista_usuarios.push(reg);  
          }
        }
        localStorage.setItem("datos",JSON.stringify(this.lista_usuarios));
      }



      }