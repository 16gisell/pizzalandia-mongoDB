import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';
import { AuthService } from './auth.service';
import { comboInterface } from '../models/comboInterface';
import { facturaInterface } from '../models/facturaInterface';
import { promise } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class DataApiService {
  menus: Observable<any>;
  menu: Observable<any>;

  constructor( private http: HttpClient, private authservice: AuthService) { }

  headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'aplication/json',
    Authorization: this.authservice.getToken()
  });
  
  //traigo todos los combos
  allCombos():any{
    const url_api = "";
    return this.http.get("https://pizzalandia-mongodb-back.herokuapp.com/api/combo");
  }
  //traigo los combos por individual
  idCombos(_id:string):any{
    const url_api = "https://pizzalandia-mongodb-back.herokuapp.com/api";
    return (this.menu=this.http.get(url_api+'/combo/'+_id));
  }

  // traigo listado de pizza
  allPizzas():any{
    const url_api = "";
    return this.http.get("https://pizzalandia-mongodb-back.herokuapp.com/api/pizza");
  }
  //traigo pizza por individual
  idPizzas(_id:string){
    const url_api ="https://pizzalandia-mongodb-back.herokuapp.com/api";
    return (this.menu=this.http.get(url_api+'/pizza/'+_id));
  }

  //traigo listado de bebidas
  allBebidas():any{
    const url_api ="";
    return this.http.get("https://pizzalandia-mongodb-back.herokuapp.com/api/bebidas");
  }
  //traido bebida por individual
  idBebidas(_id:number){
    const url_api ="https://pizzalandia-mongodb-back.herokuapp.com/api";
    return (this.menu=this.http.get(url_api+'/bebidas/'+_id));
  }

  //traigo todo el registro tabla tamaño
  allTamaño():any{
    const url_api ="";
    return this.http.get("https://pizzalandia-mongodb-back.herokuapp.com/api/tamano");
  }

  //traigo listado de ingredientes extra
  allIngredientes():any{
    const url_api ="";
    return this.http.get("https://pizzalandia-mongodb-back.herokuapp.com/api/ingredientes");
  }

  factura(facturaInterface:facturaInterface):any{
    const url_api = 'https://pizzalandia-mongodb-back.herokuapp.com/api/facturas';
    return this.http.post(url_api,facturaInterface);
  }
  //traigo lista de facturas
  allPedidos():any{
    const url_api ="";
    return this.http.get("https://pizzalandia-mongodb-back.herokuapp.com/api/facturas");
  }

  //traigo factura por individual
  idFactura(_id:number){
    const url_api ="https://pizzalandia-mongodb-back.herokuapp.com/api";
    return (this.menu=this.http.get(url_api+'/facturas/'+_id));
  }
  //eliminar factura o pedido de la lista
 deleteFactura(_id: number){
    const url_api ='https://pizzalandia-mongodb-back.herokuapp.com/api'; //debe estar logiado 
    return this.http.delete(url_api+'/facturas/'+_id)
    .pipe(map(data => data));
  }

  updatefactura(_id:number, facturaInterface:facturaInterface) {
    const url_api ='https://pizzalandia-mongodb-back.herokuapp.com/api'; //debe estar logiado 
    return this.http.put(url_api+'/facturas/'+_id, facturaInterface)
    .pipe(map(data => data));
  } 
}
