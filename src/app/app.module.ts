import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, Component } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { RouterModule, Routes } from '@angular/router';
import { TiposComponent } from './components/tipos/tipos.component';
import { VentajasComponent } from './components/ventajas/ventajas.component';
import { CaracteristicasComponent } from './components/caracteristicas/caracteristicas.component';


const rutas: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'tipos'

  },

  {
    path: 'tipos',
    component: TiposComponent
  },
  {
    path: 'ventajas',
    component: VentajasComponent
  },
  {
    path: 'caracteristicas',
    component: CaracteristicasComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    TiposComponent,
    VentajasComponent,
    CaracteristicasComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(rutas),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
