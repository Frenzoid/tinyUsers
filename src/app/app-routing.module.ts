import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./users/users.module').then( m => m.UsersPageModule)
  }, {
    path: 'pathfromto',
    loadChildren: () => import('./geolocation/pathfromto/pathfromto.module').then( m => m.PathfromtoPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
