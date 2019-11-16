import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PathfromtoPage } from './pathfromto.page';

const routes: Routes = [
  {
    path: '',
    component: PathfromtoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PathfromtoPageRoutingModule {}
