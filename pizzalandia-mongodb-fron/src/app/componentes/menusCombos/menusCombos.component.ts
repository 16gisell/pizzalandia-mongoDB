import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../../service/data-api.service';

@Component({
  selector: 'app-ordenes',
  templateUrl: './menusCombos.component.html',
  styleUrls: ['./menusCombos.component.css']
})
export class MenusCombosComponent implements OnInit {
  ordenCombo: any[];
 
  constructor(private dataApi: DataApiService ) { }

  ngOnInit() {
    this.seleccionarCombo();
  }

  seleccionarCombo(){
    this.dataApi.allCombos().subscribe(
      resp =>{
          this.ordenCombo = resp
      },
      error =>console.log(error)
    );
  }

}
