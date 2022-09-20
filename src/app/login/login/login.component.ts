import { AlertaModalService } from './../../service/alerta-modal.service';
import { Usuario } from './usuario';
import { LoginService } from '../../service/login-service.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public form!: FormGroup;

  constructor(private formGroup: FormBuilder,
              private loginService: LoginService,
              private router: Router,
              private alertaModalService: AlertaModalService) { }

  ngOnInit(): void {
    this.form = this.formGroup.group({
      userName: ['', [Validators.required]],
      password: ['', [Validators.required]]
   })
  }

  fazerLogin() {
    this.loginService.validar(this.form.value).subscribe(resposta => {
        this.loginService.usuarioAutenticacao = true;
        this.router.navigate(['/']);
    },
    erro => {
        this.loginService.usuarioAutenticacao = false;
        this.alertaModalService.AlertaDanger("Usuário ou senha invalida!");
    }
    );
  }

  esquiciSenha() {  
    this.router.navigate(['/login/reset-senha']);
  }

  cadastrar(){
    this.router.navigate(['/login/cadastrar']);
  }

  errorValidUserName() {
    if(this.form.get(['userName'])?.invalid){
      return 'O campo tem que ser preechido!';
    }else{
      return false;
    }
  }

}
