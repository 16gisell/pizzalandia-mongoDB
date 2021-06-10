import { from } from "rxjs";
import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../../service/data-api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { facturaInterface } from '../../models/facturaInterface';
import { FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';

@Component({
  selector: 'app-factura',
  templateUrl: './web.component.html',
  styleUrls: ['./web.component.css']
})

export class WebComponent implements OnInit {

  /*variables globales */
  pedidosPizzas: any[];
  pedidosCombos: any[];
  pedidosBebidas: any[];
  selectPedido1:any=[];
  selectPedido2:any=[];
  selectPedidoPrecio3:any=[];
  selection1:any=[];
  selection2:any;
  ingredientes:any=[];
  tamano:any=[];
  ingredient1:any=[];
  ingrediente2:any=[];
  tamano1:any=[];
  tamano2:any=[];
  sumaListPrecio;
  sumaTotal=0;
  sumaTotal1=0;
  sumaTotal2=0;
  codigoP:any;
  aprovP:string;
  errors:string;
  activo:boolean = true;
  siguiente:boolean = false;
  siguiente2:boolean = false;
  facturacion:boolean = true;
  aprovPF:string;
  errorsF:string;
  menssage:string;
  ngForm: FormGroup;
  ngForm2: FormGroup;


  constructor(private dataApi: DataApiService, private _router:ActivatedRoute,private router: Router ) { 
    this.ngForm = new FormGroup({
      cantidad: new FormControl('', [Validators.required]),
      tamaño: new FormControl('', [Validators.required]),
      nombre: new FormControl('', [Validators.required]),
      correo: new FormControl('', [Validators.required, Validators.email]),
      
    });
    this.ngForm2 = new FormGroup({
      cantidad: new FormControl('', [Validators.required]),
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
    lugar_pedido:'',
    codigo_pedido:'',
    codigo_entrega:'',
    name_usuario:'',
    correo:'',
    pago:'',
    fechaFactura: new Date, 
  }; 

  ngOnInit() {
    this.mostrarPedidosPizzas();
    this.mostrarPedidosCombos();
    this.mostrarPedidosBebidas();
    this.ingreExt();
    this.tamaño();
  }

  mostrarPedidosPizzas(){ /* consulta lista de pizzas */
    this.dataApi.allPizzas().subscribe(
        resp=>{
          this.pedidosPizzas = resp
        },
        error =>console.log(error)
      )
  }

  mostrarPedidosCombos(){ /* consulta lista de Combos */
    this.dataApi.allCombos().subscribe(
        resp=>{
          this.pedidosCombos = resp
        },
        error =>console.log(error)
      )
  }

  mostrarPedidosBebidas(){/* consulta lista de bebidas */
    this.dataApi.allBebidas().subscribe(
        resp=>{
          this.pedidosBebidas = resp
        },
        error =>console.log(error)
    )      
  }

  ingreExt(){ /* consulta lista de ingredientes*/
    this.dataApi.allIngredientes().subscribe(
      resp=>{
        this.ingredientes = resp;
      }
    )
  }

  tamaño(){ /* consulta lista de tamaños de pizzas  */
    this.dataApi.allTamaño().subscribe(
      resp=>{
        this.tamano = resp
      }
    )
  }

  Verificar(){ /* verificamos el formulario de pedido si contiene pizzas */
    if (this.ngForm2.valid){
      this.facturar.Elementos = this.selectPedido2.toString();
      this.facturar.tipoMenu = this.selectPedido1.toString();
      this.facturar.ingredientesExtra = this.ingrediente2.toString();
      this.facturar.tamanoPizza = this.tamano2.toString();
      this.facturar.cantidad
      this.facturar.name_usuario;
      this.facturar.correo;
      this.facturar.lugar_pedido = 'web';
      this.facturar.Tipo_factura ='Espera';
      this.facturar.totalPago = this.sumaTotal;
      this.facturar.pago='no';
      if( this.facturar.name_usuario == ''){
        this.menssage= "porfavor ingrese un nombre"
      }
      if(this.facturar.correo == ''){
        this.menssage= "porfavor ingrese un correo electronico "
      }
      this.aprovP="Ha sido verificado correctamente";

          if(this.aprovP){
            this.activo=false;
            this.siguiente= true
          }else{
            this.activo=true;
            this.siguiente= false
          } 
    }else{
      error=>{
        this.errors="por favor complete los datos";
        
      }
    }
  }

  verificarBebidas(){   /* verificamos el formulario si es solo bebidas */
    if (this.ngForm2.valid){
      var precioPedido = this.selectPedidoPrecio3.map(function(item){
        return parseInt(item,10);
      });

      let listpedido =0;
      for(let i of precioPedido) listpedido+=i;

      if(this.facturar.cantidad>=1){
        this.sumaTotal= this.facturar.cantidad*listpedido
      }else{
        this.sumaTotal= listpedido
      }

      this.facturar.cantidad
      this.facturar.Elementos = this.selectPedido2.toString();
      this.facturar.tipoMenu = this.selectPedido1.toString();
      this.facturar.totalPago = this.sumaTotal;
      this.facturar.name_usuario;
      this.facturar.correo;
      this.facturar.lugar_pedido = 'web';
      this.facturar.Tipo_factura ='Espera';
      this.facturar.totalPago = this.sumaTotal;
      this.facturar.pago='no';
      if( this.facturar.name_usuario == '' && this.facturar.correo == ''){
        this.menssage= "porfavor ingrese los campos requeridos"
      }else{
        this.aprovP="Ha sido verificado correctamente";

        if(this.aprovP){
          this.activo=false;
          this.siguiente= true
        }else{
          this.activo=true;
          this.siguiente= false
        } 
      }
    }else{
      error=>{
        this.errors="por favor complete los datos";
        
      }
    }
    
  }

  checkChange(event){ /* selecciona menu que desea  */
    let index = this.selectPedido1.indexOf(event.target.value);
    let index2 = this.selectPedido2.indexOf(event.target.name);
    let index3 = this.selectPedidoPrecio3.indexOf(event.target.id)
    
    if(index == -1){
      this.selectPedido1.push(event.target.value);    
    }else{
      this.selectPedido1.splice(index,1);
    }
    if(index2 == -1){
      this.selectPedido2.push(event.target.name);
    }
    else{
      this.selectPedido2.splice(index2,1);
    }
    if(index3 == -1){
      this.selectPedidoPrecio3.push(event.target.id);
    }
    else{
      this.selectPedidoPrecio3.splice(index3,1);
    }
    
  }

  selection(event){ /* activa la lista de elementos para la pizza si y no*/
    let index = this.selection1.indexOf(event.target.value);

    if(index == -1){
      this.selection1.push(event.target.value); 
      this.selection2= this.selection1.toString()   
    }else{
      this.selection1.splice(index,1);
    }
  }

  checkIngrediente(event){  /* selecciona la lista de ingrediente deseada */
    let index = this.ingredient1.indexOf(event.target.id);
    let index2 = this.ingrediente2.indexOf(event.target.name);  

    if(index == -1){
      this.ingredient1.push(event.target.value);      
    }else{
      this.ingredient1.splice(index,1);
    }
    if(index2 == -1){
      this.ingrediente2.push(event.target.name);
    }
    else{
      this.ingrediente2.splice(index2,1);
    }

    var precioSelect = this.ingredient1.map(function(item){
      return parseInt(item,10);
    });
    this.sumaListPrecio =0;
    for(let i of precioSelect) this.sumaListPrecio+=i;  
    this.sumaTotal2= this.sumaListPrecio 
    this.sumatoriatotal();
  }

  selectTamano(event){ /* selecciona la lista de tamaño de pizza deseada */
    let index = this.tamano1.indexOf(event.target.value);
    let index2 = this.tamano2.indexOf(event.target.name);

    if(index == -1){
      this.tamano1.push(event.target.value); 
    }else{
      this.tamano1.splice(index,1);
    }
    if(index2 == -1){
      this.tamano2.push(event.target.name);  
    }
    else{
      this.tamano2.splice(index2,1);
    }

    var precioTamano = this.tamano1.map(function(item){
      return parseInt(item,10);
    });
    let listatamano =0;
    for(let i of precioTamano) listatamano+=i;

    var precioPedido = this.selectPedidoPrecio3.map(function(item){
      return parseInt(item,10);
    });
    let listpedido =0;
    for(let i of precioPedido) listpedido+=i;
    
    if(this.facturar.cantidad >= 1){ 
      this.sumaTotal1= ((listatamano + listpedido) * this.facturar.cantidad);
    }else{
      this.sumaTotal1= listatamano + listpedido;
    }    
    this.sumatoriatotalsin();  
  }

  sumatoriatotal(){
    this.sumaTotal= this.sumaTotal2+this.sumaTotal1;
  }

  sumatoriatotalsin(){
    this.sumaTotal = this.sumaTotal1
    this.sumaTotal = this.sumaTotal1  
  }

  Factura(){   
    const rand=()=>Math.random().toString(36).substr(2);
    let token=(length)=>(rand()+rand()+rand()+rand()).substr(0,length);
    this.codigoP=token(6)

    this.facturar.codigo_pedido = this.codigoP;
    this.dataApi.factura(this.facturar).subscribe(
      resp =>{
        this.aprovPF=resp.message;

        if(this.aprovPF){
          this.facturacion=false;
          this.siguiente2= true
        }else{
          this.facturacion=true;
          this.siguiente2= false
        } 

      },
      error =>{
        this.errorsF=error;
      }
   )
  }

}