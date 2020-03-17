import { Component, OnInit } from '@angular/core';
import { ProductosService} from '../../../Servicios/productos.service';

@Component({
  selector: 'app-add-producto',
  templateUrl: './add-producto.component.html',
  styleUrls: ['./add-producto.component.scss']
})
export class AddProductoComponent implements OnInit {

  constructor(public productosService: ProductosService) { }

  ngOnInit(): void {
  }

  addProducto(newID: HTMLInputElement, newNombre: HTMLInputElement, newDescripcion: HTMLInputElement,newFechaVencimiento: HTMLInputElement, newIDProveedor: HTMLInputElement){
    this.productosService.setProducto({
      ID: newID.value,
      Nombre: newNombre.value,
      Descripcion: newDescripcion.value,
      FechaVencimiento: newFechaVencimiento.value,
      IDProveedor: newIDProveedor.value
    });
    newID.value = '';
    newNombre.value = '';
    newDescripcion.value = '';
    newFechaVencimiento.value = '';
    newIDProveedor.value ='';
  }
}
