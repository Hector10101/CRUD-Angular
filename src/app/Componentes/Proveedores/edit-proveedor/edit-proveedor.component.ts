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
  confirm: boolean = false;

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
 
  editProveedor(){
    let i =0;
    for(let proveedor of this.proveedoresService.getProveedor()){
      if(proveedor.ID === this.ID){
        if(confirm("Estas seguro que quieres editarlo?")){
          this.proveedores.splice(i, 1);
          localStorage.setItem('DataProveedores', JSON.stringify(this.proveedores));
          this.confirm = true;
        }
      }
      i++;
    }
  }

  addProveedor(newID: HTMLInputElement, newNombre: HTMLInputElement, newDireccion: HTMLInputElement, newTelefono: HTMLInputElement){
    if(this.confirm === true){
      this.proveedoresService.setProveedor({
        ID: newID.value,
        Nombre: newNombre.value,
        Direccion: newDireccion.value,
        NumeroTelefono: newTelefono.value,
      });
      newID.value = '';
      newNombre.value = '';
      newDireccion.value = '';
      newTelefono.value = '';
    }
  }
}
