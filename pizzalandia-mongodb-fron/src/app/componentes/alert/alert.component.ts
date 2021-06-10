import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../../service/data-api.service';
import { AuthService } from '../../service/auth.service';
// import { pagosInterface } from '../../models/comboInterface';


@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {
  tiendas: any =[];
  constructor(private dataApi: DataApiService, private authService: AuthService) { }

  ngOnInit() { }
}
