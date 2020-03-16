import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/Modelos/Productos';
import { ProductosService } from 'src/app/Servicios/productos.service';


@Component({
  selector: 'app-modif-producto',
  templateUrl: './modif-producto.component.html',
  styleUrls: ['./modif-producto.component.scss']
})
export class ModifProductoComponent implements OnInit {
  productos: Producto[];

  constructor(public productosService: ProductosService) { }

  ngOnInit(): void {
    this.productos = this.productosService.getProducto();
  }

}
