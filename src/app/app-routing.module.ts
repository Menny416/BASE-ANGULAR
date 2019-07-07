import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './layouts/admin/admin.component';
import { InicioComponent } from './pages/inicio/inicio.component';

const routes: Routes = [
  {
    path: 'inicio',
    component: AdminComponent,
    data: {titulo: 'MONITOR'},
    children: [
      { path: '', component: InicioComponent, data: {titulo: 'TABLERO'} },
      { path: '**', component: InicioComponent, data: {titulo: '404'} }
      ]
  },
  { path: '**', redirectTo: '/inicio', data: {titulo: '404'} }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
