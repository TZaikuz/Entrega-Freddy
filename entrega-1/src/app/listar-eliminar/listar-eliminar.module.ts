import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListarEliminarPageRoutingModule } from './listar-eliminar-routing.module';

import { ListarEliminarPage } from './listar-eliminar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListarEliminarPageRoutingModule
  ],
  declarations: [ListarEliminarPage]
})
export class ListarEliminarPageModule {}
