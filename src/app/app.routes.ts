import {RouterModule, Routes} from '@angular/router';
import { HomeComponent} from './Componentes/home/home.component';
import { ProveedoresComponent} from './Componentes/Proveedores/proveedores/proveedores.component'

const app_routes: Routes =[
    { path: 'home', component: HomeComponent},
    { path: 'proveedores', component: ProveedoresComponent},
    { path:'**', pathMatch: 'full', redirectTo: 'home'}
];

export const app_routing = RouterModule.forRoot(app_routes);