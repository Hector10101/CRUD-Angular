import { Injectable } from '@angular/core';
import { Producto} from '../Modelos/Productos';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  productos: Producto[];
  constructor() {
    this.productos = [];
  }

  getProducto(){
    if(localStorage.getItem('DataProductos') === null){
      this.productos = [];
      return this.productos;
    }else{
      this.productos = JSON.parse(localStorage.getItem('DataProductos'));
      return this.productos;
    }
  }

  setProducto(producto: Producto){
    this.productos.push(producto);
    let productos: Producto[] = [];
    if(localStorage.getItem('DataProductos') === null){
      this.productos.push(producto);
      localStorage.setItem('DataProductos', JSON.stringify(productos));
    }else{
      productos = JSON.parse(localStorage.getItem('DataProductos'));

      productos.push(producto);
      localStorage.setItem('DataProductos', JSON.stringify(productos));
    }
  }
}
