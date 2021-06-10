import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../../service/data-api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { facturaInterface } from '../../models/facturaInterface';
import { FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';

@Component({
  selector: 'app-ordenes',
  templateUrl: './ordenCombo.component.html',
  styleUrls: ['./ordenCombo.component.css']
})
export class OrdencomboComponent implements OnInit {
  combo:any=[];
  tamano:any=[];
  ingredientes:any=[];
  seleccionado:any=[];
  precios:any=[];
  tamanoA:any=[];
  tamanoN:any=[];
  sumaListPrecio;
  sumaTotal=0;
  sumaTotal1=0;
  sumaTotal2=0;
  codigoP:any;
  aprovP:string;
  errors:string;
  activo:boolean = true;
  ngForm2: FormGroup;
 
  constructor(private dataApi: DataApiService, private _router:ActivatedRoute,private router: Router,  public fb:FormBuilder ) { 

    this.ngForm2 = new FormGroup({
      cantidad: new FormControl('', [Validators.required]),
      tamaño: new FormControl('', [Validators.required]),
      nombre: new FormControl('', [Validators.required]),
      correo: new FormControl('', [Validators.required, Validators.email]),
      
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
    fechaFactura: new Date, 
  };

  ngOnInit() {
    const params = this._router.snapshot.params;
    if(params.id){
      this.dataApi.idCombos(params.id)
      .subscribe(
        res=>{
          this.combo =res;
        },
        error=>console.error(error)
      )
    }
    this.tamaño();
    this.ingreExt();
  }

  comprar(){
    if (this.ngForm2.valid){
      const rand=()=>Math.random().toString(36).substr(2);
      let token=(length)=>(rand()+rand()+rand()+rand()).substr(0,length);
      this.codigoP=token(6)

      this.facturar.cantidad 
      this.facturar.tipoMenu = this.combo.nameCombo;
      this.facturar.totalPago = this.combo.precioCombo;
      this.facturar.Elementos = this.combo.elementCombo;
      this.facturar.tamanoPizza = this.tamanoN.toString();
      this.facturar.ingredientesExtra = this.seleccionado.toString();
      this.facturar.totalPago = this.sumaTotal;
      this.facturar.Tipo_factura= "Espera";
      this.facturar.name_usuario;
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
          this.errors=error.error.message;
        }
      )
    }else{
        error=>{
          this.errors="por favor complete los datos";
          
        }
      }
  }

  tamaño(){
    this.dataApi.allTamaño().subscribe(
      resp=>{
        this.tamano = resp
      }
    )
  }

  ingreExt(){
    this.dataApi.allIngredientes().subscribe(
      resp=>{
        this.ingredientes = resp;
      }
    )
  }

  selectChange(event){
    let index = this.tamanoA.indexOf(event.target.value);
    let index2 = this.tamanoN.indexOf(event.target.name);

    if(index == -1){ //tener el valordel tamaño
      this.tamanoA.push(event.target.value);
    }else{
      this.tamanoA.splice(index,1);
    }
    if(index == -1){ //tener el valordel tamaño
      this.tamanoN.push(event.target.name);
    }else{
      this.tamanoN.splice(index,1);
    }
    var precioTamano = this.tamanoA.map(function(item){
      return parseInt(item,10);
    });

    let listatamano =0;

    for(let i of precioTamano) listatamano+=i;

    if(this.facturar.cantidad >= 1){      
    this.sumaTotal1= (listatamano + this.combo.precioCombo)* this.facturar.cantidad;
    }else{
      this.sumaTotal1= listatamano + this.combo.precioCombo;
    }    
    this.sumatoriatotalsin();    
  }

  checkChange(event){
    let index = this.precios.indexOf(event.target.value);
    let index2 = this.seleccionado.indexOf(event.target.name);

    if(index == -1){
      this.precios.push(event.target.value); 
    }else{
      this.precios.splice(index,1);
    }
    if(index2 == -1){
      this.seleccionado.push(event.target.name);
    }
    else{
      this.seleccionado.splice(index2,1);
    }

    var precioSelect = this.precios.map(function(item){
      return parseInt(item,10);
    });

    this.sumaListPrecio =0;
    
    for(let i of precioSelect) this.sumaListPrecio+=i;    
     this.sumaTotal2= this.sumaListPrecio 
    this.sumatoriatotal();
  }

  sumatoriatotal(){
    console.log(this.facturar.cantidad)
    this.sumaTotal= this.sumaTotal2+this.sumaTotal1
  }
  sumatoriatotalsin(){
    this.sumaTotal = this.sumaTotal1
    this.sumaTotal = this.sumaTotal1  
  }
}