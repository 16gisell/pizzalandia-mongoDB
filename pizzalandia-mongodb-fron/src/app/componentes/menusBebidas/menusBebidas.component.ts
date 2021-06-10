import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../../service/data-api.service';

@Component({
  selector: 'app-menusBebidas',
  templateUrl: './menusBebidas.component.html',
  styleUrls: ['./menusBebidas.component.css']
})
export class MenusBebidasComponent implements OnInit {
  ordenBebida: any[];
 
  constructor(private dataApi: DataApiService ) { }

  ngOnInit() {
    this.seleccionarBebida();
  }

  seleccionarBebida(){
    this.dataApi.allBebidas().subscribe(
      resp=>{
        this.ordenBebida = resp
      },
      error =>console.log(error)
    )
  }

}
