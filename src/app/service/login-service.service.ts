import { Router } from '@angular/router';
import { Usuario } from './../login/login/usuario';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private usuarioAutenticacao: boolean = false;
  
  constructor(private http: HttpClient,
    private router: Router) { }
    
  validar(route: string, usuario: Usuario): Observable<any> {
    return this.http.post(`${environment.apiEndpoint}/${route}`, usuario).pipe(map((response: any) => <any>response.json()));
  }

  validarteste(usuario: Usuario){
    
    if(usuario.email === "rodrigo@gmail.com" && usuario.senha === "123456"){
        this.usuarioAutenticacao = true;
        this.router.navigate(['/']);
    }else{
      this.usuarioAutenticacao = false;
    }    
  }

  cadastrarLogin(obj: object){
    return this.http.post(`${environment.apiEndpoint}/login`, obj).pipe(take(1));
  }

  usuarioEstaAutenticado(){
    return this.usuarioAutenticacao;
  }
}
