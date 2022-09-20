import { AlertaModalService } from './alerta-modal.service';
import { Router } from '@angular/router';
import { Usuario } from './../login/login/usuario';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { Token } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public usuarioAutenticacao: boolean = false;
  
  constructor(private http: HttpClient) { }
    

  validar(usuario: Usuario){

    return this.http.post(`${environment.apiEndpoint}/login`, usuario).pipe(take(1));
      
  }

  cadastrarLogin(obj: object){
    return this.http.post(`${environment.apiEndpoint}/cadastro`, obj).pipe(take(1));
  }

  solicitaReset(obj: object){
    return this.http.post(`${environment.apiEndpoint}/solicita-reset`, obj).pipe(take(1));
  }

  resetarSenhar(obj: object,){
    return this.http.post(`${environment.apiEndpoint}/efetua-reset/`, obj).pipe(take(1));
  }

  usuarioEstaAutenticado(){
    return this.usuarioAutenticacao;
  }
}
