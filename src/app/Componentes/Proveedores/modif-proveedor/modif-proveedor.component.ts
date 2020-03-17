import { Component, OnInit } from '@angular/core';
import { ProveedorService } from 'src/app/Servicios/proveedor.service';
import { Proveedor } from 'src/app/Modelos/Proveedor';

@Component({
  selector: 'app-modif-proveedor',
  templateUrl: './modif-proveedor.component.html',
  styleUrls: ['./modif-proveedor.component.scss']
})
export class ModifProveedorComponent implements OnInit {
  proveedores: Proveedor[];
  seleccionado: string;
  ID: string;
  Nombre: string;
  Direccion:string;
  Telefono: string;

  constructor(public proveedoresService: ProveedorService) { }

  ngOnInit(): void {
    this.proveedores = this.proveedoresService.getProveedor();
  }

  getProveedor(){
    for(let proveedor of this.proveedores){
      if(proveedor.ID === this.seleccionado){
        this.ID = proveedor.ID;
        this.Nombre = proveedor.Nombre;
        this.Direccion = proveedor.Direccion;
        this.Telefono = proveedor.NumeroTelefono;
      }
    }
  }

}
