import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../service/auth.service';
import {Router} from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor( private authService : AuthService, private router:Router) { }
  canActivate() {
    if(this.authService.getCurrenUser()){
      return true;
    }else{
      this.router.navigate(['/auth/login'])
      return false;
    }
    
  }
  
}
