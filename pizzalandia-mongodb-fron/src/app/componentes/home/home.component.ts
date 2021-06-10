import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../../service/data-api.service';
import { AuthService } from '../../service/auth.service';
// import { pagosInterface } from '../../models/comboInterface';
import {ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  tiendas: any =[];
  public estalogin:boolean = false;

  constructor(private dataApi: DataApiService, private router:Router, private authService: AuthService) { }

  ngOnInit() {    }
}
