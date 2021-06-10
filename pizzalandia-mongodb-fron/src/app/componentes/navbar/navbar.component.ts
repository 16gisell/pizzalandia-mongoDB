import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { userInterface } from '../../models/userInterface';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private authService:AuthService, private router:Router, private _router: ActivatedRoute,) { }

  public title_nav = 'Pizzalandia';
  public estalogin:boolean = false;
  public personLogada:boolean = false;

  // ngOnChanges(){
  //   this.CompurbaLogin();
  // }
  
  ngOnInit() {
    this.CompurbaLogin();
  }

  onLogout():void{
    this.authService.logauUser();
    this.router.navigate(['/auth/login']);
  }
  CompurbaLogin():void{
    if(this.authService.getCurrenUser() == null){
      this.estalogin=false;
    }else{
      this.estalogin=true;
    }
  }
}
