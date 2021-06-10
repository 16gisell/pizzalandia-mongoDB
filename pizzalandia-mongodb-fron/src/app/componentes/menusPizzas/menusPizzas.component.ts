import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../../service/data-api.service';

@Component({
  selector: 'app-menusPizzas',
  templateUrl: './menusPizzas.component.html',
  styleUrls: ['./menusPizzas.component.css']
})
export class MenusPizzasComponent implements OnInit {
  ordenPizza: any[];
 
  constructor(private dataApi: DataApiService ) { }

  ngOnInit() {
    this.seleccionarPizza();
  }
  seleccionarPizza(){
    this.dataApi.allPizzas().subscribe(
      resp=>{
        this.ordenPizza = resp;
      },
      error =>console.log(error, 'error')
    )
  }

}