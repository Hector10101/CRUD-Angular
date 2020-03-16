import { Injectable } from '@angular/core';
import { Proveedor } from '../Modelos/Proveedor';

@Injectable({
  providedIn: 'root'
})
export class ProveedorService {
  proveedores: Proveedor[];
  constructor() { 
    this.proveedores = [];
  }

  getProveedor(){
    if(localStorage.getItem('DataProveedores') === null){
      this.proveedores = [];
      return this.proveedores;
    }else{
      this.proveedores = JSON.parse(localStorage.getItem('DataProveedores'));
      return this.proveedores;
    }
  }

  setProveedor(proveedor: Proveedor){
    this.proveedores.push(proveedor);
    let proveedores: Proveedor[] = [];
    if(localStorage.getItem('DataProveedores') === null){
      proveedores.push(proveedor);
      localStorage.setItem('DataProveedores', JSON.stringify(proveedores));
    }else{
      proveedores = JSON.parse(localStorage.getItem('DataProveedores'));

      proveedores.push(proveedor);
      localStorage.setItem('DataProveedores', JSON.stringify(proveedores));
    }
  }
}
