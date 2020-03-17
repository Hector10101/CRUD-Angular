import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/Modelos/Productos';
import { ProductosService } from 'src/app/Servicios/productos.service';

@Component({
  selector: 'app-edit-producto',
  templateUrl: './edit-producto.component.html',
  styleUrls: ['./edit-producto.component.scss']
})
export class EditProductoComponent implements OnInit {

  productos: Producto[];
  seleccionado: string;
  ID: string;
  Nombre: string;
  Descripcion:string;
  FechaVencimiento: string;
  IDProveedor: string;
  confirm: boolean = false;

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
        this.IDProveedor = producto.IDProveedor;

      }
    }
  }

  
  editProducto(){
    let i =0;
    for(let producto of this.productosService.getProducto()){
      if(producto.ID === this.ID){
        if(confirm('Estas Seguro que quieres editarlo?')){
          this.productos.splice(i, 1);
          localStorage.setItem('DataProductos', JSON.stringify(this.productos));
          this.confirm = true;
          
        } 
      }
      i++;
    }
  }

  addProducto(newID: HTMLInputElement, newNombre: HTMLInputElement, newDescripción: HTMLInputElement, newFechaVencimiento: HTMLInputElement, newIDProveedor: HTMLInputElement){
    if(this.confirm === true){
      this.productosService.setProducto({
        ID: newID.value,
        Nombre: newNombre.value,
        Descripcion: newDescripción.value,
        FechaVencimiento: newFechaVencimiento.value,
        IDProveedor: newIDProveedor.value,

      });
     
      newID.value = '';
      newNombre.value = '';
      newDescripción.value = '';
      newFechaVencimiento.value = '';
      newIDProveedor.value = '';
      
    }
  }
}
