import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/Modelos/Productos';
import { ProductosService } from 'src/app/Servicios/productos.service';

@Component({
  selector: 'app-ver-producto',
  templateUrl: './ver-producto.component.html',
  styleUrls: ['./ver-producto.component.scss']
})
export class VerProductoComponent implements OnInit {
  productos: Producto[];
  constructor(public productosService: ProductosService) { }

  ngOnInit(): void {
    this.productos = this.productosService.getProducto();
  }

}
