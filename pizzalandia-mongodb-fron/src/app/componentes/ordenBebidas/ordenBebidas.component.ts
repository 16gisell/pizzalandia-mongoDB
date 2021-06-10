import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../../service/data-api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { facturaInterface } from '../../models/facturaInterface';
import { FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';

@Component({
  selector: 'app-ordenBebidas',
  templateUrl: './ordenBebidas.component.html',
  styleUrls: ['./ordenBebidas.component.css']
})
export class OrdenBebidasComponent implements OnInit {
  closeResult: string;
  combo:any=[];
  sumaTotal=0;
  valor=0;
  codigoP:any;
  aprovP:string;
  errors:string;
  activo:boolean = true;
  ngForm: FormGroup;

  constructor(private dataApi: DataApiService, private _router:ActivatedRoute,private router: Router, public fb:FormBuilder ) { 
    
    this.ngForm = new FormGroup({
      nombre: new FormControl('', [Validators.required]),
      correo: new FormControl('', [Validators.required, Validators.email]),
      cantidad: new FormControl('', [Validators.required]),
    });

  } 
  
  private facturar: facturaInterface ={
    id: 0,
    tipoMenu:'',
    Elementos: '',
    totalPago: 0,
    tamanoPizza:'',
    ingredientesExtra: '',
    cantidad:1,
    Tipo_factura:'',
    lugar_pedido:'',
    codigo_pedido:'',
    codigo_entrega:'',
    name_usuario:'',
    correo:'',
    pago:'',
    fechaFactura: new Date,  
  }

  ngOnInit() {
    const params = this._router.snapshot.params;
    if(params.id){
      this.dataApi.idBebidas(params.id)
      .subscribe(
        res=>{
          this.combo =res;
        },
        error=>console.error(error)
      )
    }
  }

  comprar(){
    if (this.ngForm.valid){
      const rand=()=>Math.random().toString(36).substr(2);
      let token=(length)=>(rand()+rand()+rand()+rand()).substr(0,length);
      this.codigoP=token(6)
  
      this.facturar.tipoMenu= this.combo.nombreBebidas;
      this.facturar.Elementos= this.combo.contenido;
      this.facturar.cantidad = this.valor;
      this.facturar.totalPago= this.sumaTotal;
      this.facturar.Tipo_factura= "Espera";
      this.facturar.name_usuario 
      this.facturar.correo;
      this.facturar.lugar_pedido = 'Local';
      this.facturar.codigo_pedido = this.codigoP;
      this.dataApi.factura(this.facturar).subscribe(
        resp =>{
          this.aprovP=resp.message;
  
          if(this.aprovP){
            this.activo=false;
          }else{
            this.activo=true;
          } 
  
        },
        error =>{
          this.errors=error;
        }
     )
    }else{
      error=>{
        this.errors="por favor complete los datos";
        
      }
    }
    
 
  }
  mensaje(){
    this.router.navigate(['']);
  }

  sumatoriatotal(){
    if(this.valor>=1){
      this.sumaTotal= this.valor*this.combo.precioBebidas
    }else{
      this.sumaTotal= this.combo.precioBebidas
    }
  }

  checkChange(event){
    this.valor=event.target.value;
    this.sumaTotal= this.valor*this.combo.precioBebidas;
  }

}