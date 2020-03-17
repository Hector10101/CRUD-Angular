import { Component, OnInit } from '@angular/core';
import { Proveedor } from 'src/app/Modelos/Proveedor';
import { ProveedorService } from 'src/app/Servicios/proveedor.service';

@Component({
  selector: 'app-edit-proveedor',
  templateUrl: './edit-proveedor.component.html',
  styleUrls: ['./edit-proveedor.component.scss']
})
export class EditProveedorComponent implements OnInit {

  
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
