import { Component, OnInit } from '@angular/core';
import {ProveedorService} from '../../../Servicios/proveedor.service';
import { Proveedor } from 'src/app/Modelos/Proveedor';


@Component({
  selector: 'app-ver-proveedor',
  templateUrl: './ver-proveedor.component.html',
  styleUrls: ['./ver-proveedor.component.scss']
})
export class VerProveedorComponent implements OnInit {

  proveedores: Proveedor[];
  constructor(public proveedoresService: ProveedorService) { }

  ngOnInit(): void {
    this.proveedores = this.proveedoresService.getProveedor();
  }

}
