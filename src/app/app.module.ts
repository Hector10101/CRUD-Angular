import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { app_routing} from './app.routes'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavegacionComponent } from './Componentes/navegacion/navegacion.component';
import { HomeComponent } from './Componentes/home/home.component';
import { ProveedoresComponent } from './Componentes/Proveedores/proveedores/proveedores.component';
import { AddProveedorComponent } from './Componentes/Proveedores/add-proveedor/add-proveedor.component';
import { ModifProveedorComponent } from './Componentes/Proveedores/modif-proveedor/modif-proveedor.component';
import { VerProveedorComponent } from './Componentes/Proveedores/ver-proveedor/ver-proveedor.component';

@NgModule({
  declarations: [
    AppComponent,
    NavegacionComponent,
    HomeComponent,
    ProveedoresComponent,
    AddProveedorComponent,
    ModifProveedorComponent,
    VerProveedorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    app_routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }