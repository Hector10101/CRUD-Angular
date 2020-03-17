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
  Descripcion: string;
  FechaVencimiento: string;
  Proveedor: string ;

  constructor(public productosService: ProductosService) { }

  ngOnInit(): void {
    this.productos = this.productosService.getProducto();
  }

  getProducto(){
    for(let producto of this.productos){
      if(producto.ID === this.seleccionado){
        this.ID = producto.ID;
        this.Nombre = producto.Nombre;
        this.Descripcion = producto.Descripcion;
        this.FechaVencimiento = producto.FechaVencimiento;
        this.Proveedor = producto.IDProveedor;
      }
    }
  }

  DeleteProducto(){
    let i =0;
    for(let producto of this.productosService.getProducto()){
      if(producto.ID === this.ID){
        if(confirm('Estas Seguro que quieres eliminarlo?')){
          this.productos.splice(i, 1);
          localStorage.setItem('DataProductos', JSON.stringify(this.productos));
          this.ID = '';
          this.Nombre = '';
          this.Descripcion = '';
          this.FechaVencimiento = '';
          this.Proveedor = '';
        } 
      }
      i++;
    }
  }
}
