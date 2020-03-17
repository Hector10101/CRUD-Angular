import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/Modelos/Productos';
import { ProductosService } from 'src/app/Servicios/productos.service';

@Component({
  selector: 'app-eli-producto',
  templateUrl: './eli-producto.component.html',
  styleUrls: ['./eli-producto.component.scss']
})
export class EliProductoComponent implements OnInit {

  productos: Producto[];
  seleccionado: string;
  ID: string;
  Nombre: string;
  Descripcion:string;
  FechaVencimiento: string;
  ID_Proveedor: string;

  constructor(public productosService: ProductosService) { }

  ngOnInit(): void {
    this.productos = this.productosService.getProducto();
  }

  getProveedor(){
    for(let producto of this.productos){
      if(producto.ID === this.seleccionado){
        this.ID = producto.ID;
        this.Nombre = producto.Nombre;
        this.Descripcion = producto.Descripcion;
        this.FechaVencimiento = producto.FechaVencimiento;
        this.ID_Proveedor = producto.ID_Producto;
      }
    }
  }
}
