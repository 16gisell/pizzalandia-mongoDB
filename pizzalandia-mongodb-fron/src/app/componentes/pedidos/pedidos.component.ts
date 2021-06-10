import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../../service/data-api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { facturaInterface } from '../../models/facturaInterface';
import { FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})

export class PedidosComponent implements OnInit {
  pedidos: any[];
  buscados: any[];
  combo;
  ngForm: FormGroup;
  activo:boolean = false;
  menssage:String;
  encontrado;

  private facturar: facturaInterface ={
    Tipo_factura:'',
    pago:'',
    fechaFactura: new Date,
  }

  constructor(private dataApi: DataApiService, private _router:ActivatedRoute,private router: Router ) { 
    this.ngForm = new FormGroup({
      codigo: new FormControl('', [Validators.required]),
    });
  }
  private buscar: any ={
    codigo:'',
  }

  ngOnInit() {
    this.mostrarPedidos();
  }

  mostrarPedidos(){
    this.dataApi.allPedidos().subscribe(
        resp=>{
          this.pedidos = resp
        },
        error =>console.log(error)
      )
  }
  Entregado(_id){
    this.facturar.Tipo_factura= "Entregado";
    this.facturar.pago="si"
    this.dataApi.updatefactura(_id, this.facturar).subscribe(
      resp=>{
        this.mostrarPedidos();
      }
    )
  }

  Cancelado(_id){
    this.dataApi.deleteFactura(_id).subscribe(
      resp=>{
        this.mostrarPedidos();
        
      },
      error =>console.log(error)
    )
  }

  Buscardor(){
    this.encontrado =this.buscar.codigo
    this.dataApi.allPedidos().subscribe(
      resp=>{
        this.buscados = resp
        for(let i=0; i<=resp.length; i++){
          if(resp[i].codigo_pedido === this.buscar.codigo){            
            this.buscados = resp
            this.activo = true
          }else{
            this.menssage="no se encuentra"
          }
        }        
      },
      error =>console.log(error)
    )
  }

}