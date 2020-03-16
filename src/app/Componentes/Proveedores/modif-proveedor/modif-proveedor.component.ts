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

  constructor(public proveedoresService: ProveedorService) { }

  ngOnInit(): void {
    this.proveedores = this.proveedoresService.getProveedor();
  }

}
