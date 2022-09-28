import { AlertaModalService } from './../../service/alerta-modal.service';
import { LoginService } from '../../service/login-service.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public formulario!: FormGroup;

  disabledBotao: boolean = false;
  
  reCaptcha = this.formGroup.group({
    token: ['', [Validators.required]]
  });

  constructor(private formGroup: FormBuilder,
              private loginService: LoginService,
              private router: Router,
              private alertaModalService: AlertaModalService) { }

  ngOnInit(): void {
    this.formulario = this.formGroup.group({
      userName: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  recaptch(captchaResponse: string) {
    this.reCaptcha.value.token = captchaResponse;
    this.loginService.validarRecaptch(this.reCaptcha.value).subscribe(resposta => {
      if(resposta == true){
        this.disabledBotao = true;
      }
      else{
        this.alertaModalService.AlertaDanger("Recaptcha invalido!");
      }
    });
  }

  fazerLogin() {
      if(this.formulario.valid){
        this.loginService.validar(this.formulario.value).subscribe(resposta => {
          this.loginService.usuarioAutenticacao = true;
          this.router.navigate(['/']);
      },
      erro => {
        this.loginService.usuarioAutenticacao = false;
        this.alertaModalService.AlertaDanger("Usuário ou senha invalida!");
      }
      );
    }else{
      this.alertaModalService.AlertaWarning("Campo obrigatório!");
    }
  }

  esquiciSenha() {  
    this.router.navigate(['/login/reset-senha']);
  }

  cadastrar(){
    this.router.navigate(['/login/cadastrar']);
  }

  errorValidUserName() {
    if(this.formulario.get(['userName'])?.invalid){
      return 'O campo tem que ser preechido!';
    }else{
      return false;
    }
  }

}
