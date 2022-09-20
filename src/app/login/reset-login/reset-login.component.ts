import { AlertaModalService } from './../../service/alerta-modal.service';
import { FormBuilder, Validators } from '@angular/forms';
import { LoginService } from 'src/app/service/login-service.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reset-login',
  templateUrl: './reset-login.component.html',
  styleUrls: ['./reset-login.component.scss']
})
export class ResetLoginComponent implements OnInit {

  redefinirSenha: boolean = false;
  salvarEmailBotao: boolean = false;
  enviarEmailBotao: boolean = true;

  stringToken: any;

  formEnviarEmail = this.formBuilder.group({
    email: [null, [Validators.required, Validators.email]],
  });
  formRedefinirSenha = this.formBuilder.group({
    email: [null, [Validators.required, Validators.email]],
    password: [null, [Validators.required]],
    rePassword: [null, [Validators.required]],
    token: [null, [Validators.required]]
  })

  constructor(private router: Router,
              private loginService: LoginService,
              private formBuilder: FormBuilder,
              private alertaModalService: AlertaModalService
              ) { }

  ngOnInit(): void {
  }

  

  enviarEmail() {
    this.loginService.solicitaReset(this.formEnviarEmail.value).subscribe(resposta => {
       let token: any = resposta;
       this.stringToken = token[0].message;
       
       this.redefinirSenha = true;
       this.salvarEmailBotao = true;
       this.enviarEmailBotao = false;
    },
    erro => {
        this.alertaModalService.AlertaDanger("Email invalida!");
    }
    );
  }

  redefinirSenhaSalvar(){
    this.formRedefinirSenha.value.token = this.stringToken;
    this.loginService.resetarSenhar(this.formRedefinirSenha.value).subscribe(resposta => {
      this.router.navigate(['/login'])
      this.alertaModalService.AlertaSucess("Senha redefinida com sucesso!");
   },
   erro => {
       this.alertaModalService.AlertaDanger("Senha invalida!");
   }
   );
  }

  cancelar(){
    this.router.navigate(['/login']);
  }

}
