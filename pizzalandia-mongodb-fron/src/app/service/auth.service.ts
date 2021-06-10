import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';
import {isNullOrUndefined} from 'util';
import {userInterface} from '../models/userInterface';


@Injectable({
  providedIn: 'root'
})

export class AuthService {
  users: Observable<any>;
  user: Observable<any>;
  constructor(private http: HttpClient) { }
  
  headers : HttpHeaders = new HttpHeaders({
    'content-type': 'aplication/json',
  });


  //get para mostar todos los usuarios
  UserList(){
    return this.http.get('https://pizzalandia-mongodb-back.herokuapp.com/api/user');    
  }

  //para mostar un usuario en especifico
  listUsers(id: string){
    const api_consult = 'https://pizzalandia-mongodb-back.herokuapp.com/api/user/${id}';
    return this.http.get(api_consult);
  } 
  
  //crear usuario
  CreateUser(userInterface:userInterface):any{
    const url_api = "";
    return this.http.post('https://pizzalandia-mongodb-back.herokuapp.com/api/user/register',userInterface)
      //{headers: this.headers})
      //.pipe(map(data => data));
  }

  loginUser( nombre: string, password: string): any{
    const api_consult = 'https://pizzalandia-mongodb-back.herokuapp.com/api/user';
    return this.http.post(api_consult, {nombre,password})
    .pipe(map(data => data));
  }

  setUser(user:userInterface):void{ //guarda el usuario
    console.log(user, "desde setUser")
    let user_string =JSON.stringify(user);
    localStorage.setItem('currenUser', user_string);
  }

  setToken(token):void{ //una vez que elusuario este logiado guarda el token 
    localStorage.setItem('accessToken', token);
  }

  getToken(){
    return localStorage.getItem('accessToken');
  }

  getCurrenUser():userInterface {//saber el usuario que este logado en ese momento 
    let user_string =localStorage.getItem('currenUser');
    if(!isNullOrUndefined(user_string)){
      let user :userInterface =JSON.parse(user_string);
      return user;
    }else{
      return null;
    }
  }

  logauUser(){
    let accessToken = localStorage.getItem('accessToken')
    const api_consult = 'https://pizzalandia-mongodb-back.herokuapp.com/api/user';
    localStorage.removeItem('accessToken')
    localStorage.removeItem('currenUser')
    return this.http.post<userInterface>(api_consult, {headers: this.headers});
  }
}
