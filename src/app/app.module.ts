import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { app_routing} from './app.routes'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavegacionComponent } from './Componentes/navegacion/navegacion.component';
import { HomeComponent } from './Componentes/home/home.component';
import { ProveedoresComponent } from './Componentes/Proveedores/proveedores/proveedores.component';
import { AddProveedorComponent } from './Componentes/Proveedores/add-proveedor/add-proveedor.component';
import { ModifProveedorComponent } from './Componentes/Proveedores/modif-proveedor/modif-proveedor.component';
import { VerProveedorComponent } from './Componentes/Proveedores/ver-proveedor/ver-proveedor.component';
import { AddProductoComponent } from './Componentes/Productos/add-producto/add-producto.component';
import { ProductosComponent } from './Componentes/Productos/productos/productos.component';
import { ModifProductoComponent } from './Componentes/Productos/modif-producto/modif-producto.component';
import { VerProductoComponent } from './Componentes/Productos/ver-producto/ver-producto.component';


import {ProveedorService} from './Servicios/proveedor.service';
import { EliProveedorComponent } from './Componentes/Proveedores/eli-proveedor/eli-proveedor.component';
import { EditProveedorComponent } from './Componentes/Proveedores/edit-proveedor/edit-proveedor.component';
import { EliProductoComponent } from './Componentes/Productos/eli-producto/eli-producto.component';
import { EditProductoComponent } from './Componentes/Productos/edit-producto/edit-producto.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

@NgModule({
  declarations: [
    AppComponent,
    NavegacionComponent,
    HomeComponent,
    ProveedoresComponent,
    AddProveedorComponent,
    ModifProveedorComponent,
    VerProveedorComponent,
    AddProductoComponent,
    ProductosComponent,
    ModifProductoComponent,
    VerProductoComponent,
    EliProveedorComponent,
    EditProveedorComponent,
    EliProductoComponent,
    EditProductoComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    app_routing,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [ProveedorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
