import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../../service/data-api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
import { timeInterval, timeout } from 'rxjs/operators';

@Component({
  selector: 'app-factura',
  templateUrl: './factura.component.html',
  styleUrls: ['./factura.component.css']
})

export class FacturaComponent implements OnInit {
  pedidos: any[];
  buscados: any[];
  combo;
  ngForm: FormGroup;
  activo:boolean = false;
  menssage:String;

  constructor(private dataApi: DataApiService, private _router:ActivatedRoute,private router: Router ) {
    this.ngForm = new FormGroup({
      codigo: new FormControl('', [Validators.required]),
    });
   }

  private facturar: any ={
    codigo:'',
  }

  ngOnInit() {
    this.mostrarPedidos()
  }

  mostrarPedidos(){
    this.dataApi.allPedidos().subscribe(
        resp=>{
          this.pedidos = resp
        },
        error =>console.log(error)
      )
  }

  buscar(){
    this.dataApi.allPedidos().subscribe(
      resp=>{
        for(let i=0; i<=resp.length; i++){
          if(resp[i].codigo_pedido === this.facturar.codigo){            
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