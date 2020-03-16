import {RouterModule, Routes} from '@angular/router';
import { HomeComponent} from './Componentes/home/home.component';
import { ProveedoresComponent} from './Componentes/Proveedores/proveedores/proveedores.component'
import { AddProveedorComponent } from './Componentes/Proveedores/add-proveedor/add-proveedor.component';
import { ModifProveedorComponent } from './Componentes/Proveedores/modif-proveedor/modif-proveedor.component';
import { VerProveedorComponent } from './Componentes/Proveedores/ver-proveedor/ver-proveedor.component';
import { ProductosComponent } from './Componentes/Productos/productos/productos.component';
import { AddProductoComponent } from './Componentes/Productos/add-producto/add-producto.component';
import { ModifProductoComponent } from './Componentes/Productos/modif-producto/modif-producto.component';
import { VerProductoComponent } from './Componentes/Productos/ver-producto/ver-producto.component';

const app_routes: Routes =[
    { path: 'home', component: HomeComponent},
    { path: 'proveedores', component: ProveedoresComponent},
    { path: 'addProveedores', component: AddProveedorComponent},
    { path: 'modifProveedores', component: ModifProveedorComponent},
    { path: 'verProveedores', component: VerProveedorComponent},

    { path: 'productos', component: ProductosComponent},
    { path: 'addProductos', component: AddProductoComponent},
    { path: 'modifProductos', component: ModifProductoComponent},
    { path: 'verProductos', component: VerProductoComponent},

    { path:'**', pathMatch: 'full', redirectTo: 'home'}
];

export const app_routing = RouterModule.forRoot(app_routes);