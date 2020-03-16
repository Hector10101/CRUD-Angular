import { Component, OnInit } from '@angular/core';
import {ProveedorService} from '../../../Servicios/proveedor.service'

@Component({
  selector: 'app-add-proveedor',
  templateUrl: './add-proveedor.component.html',
  styleUrls: ['./add-proveedor.component.scss']
})
export class AddProveedorComponent implements OnInit {

  constructor(public provedoresService: ProveedorService) { }

  ngOnInit(): void {
  }

  addProveedor(newID: HTMLInputElement, newNombre: HTMLInputElement, newDireccion: HTMLInputElement, newTelefono: HTMLInputElement){
    this.provedoresService.setProveedor({
      ID: newID.value,
      Nombre: newNombre.value,
      Direccion: newDireccion.value,
      NumeroTelefono: newTelefono.value,
    });

    console.log(this.provedoresService.getProveedor());
    return false;
  }

}
