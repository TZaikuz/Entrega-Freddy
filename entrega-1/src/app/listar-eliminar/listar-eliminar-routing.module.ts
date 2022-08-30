import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListarEliminarPage } from './listar-eliminar.page';

const routes: Routes = [
  {
    path: '',
    component: ListarEliminarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListarEliminarPageRoutingModule {}
