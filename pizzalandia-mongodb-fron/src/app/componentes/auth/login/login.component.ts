import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../service/auth.service';
import { userInterface } from '../../../models/userInterface';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private router:Router) { }

  private user: userInterface={
    nombre: "",
    password: "",
  }
  public estalogin:boolean = false;


  ngOnInit() {
    this.onLogin();
  }

  onLogin(){
    return this.authService.loginUser(
      this.user.nombre, 
      this.user.password
      )
      .subscribe(data =>{ 
        this.router.navigate(['/']);      
        const hashCode = s => s.split('').reduce((a,b) => (((a << 5) - a) + b.charCodeAt(0))|0, 0)
        this.authService.setUser(data)
        let Lotoken = hashCode(data.password);
        this.authService.setToken(Lotoken);              
      },
      error => console.log(error)
      )
  }

}
