import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavegacionComponent } from './Componentes/navegacion/navegacion.component';
import { HomeComponent } from './Componentes/home/home.component';
import { ProveedoresComponent } from './Componentes/Proveedores/proveedores/proveedores.component';
import { AddProveedorComponent } from './Componentes/Proveedores/add-proveedor/add-proveedor.component';

@NgModule({
  declarations: [
    AppComponent,
    NavegacionComponent,
    HomeComponent,
    ProveedoresComponent,
    AddProveedorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
