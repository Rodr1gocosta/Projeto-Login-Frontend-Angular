import { AlertaModalService } from './../../service/alerta-modal.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/service/login-service.service';

@Component({
  selector: 'app-cadastrar-login',
  templateUrl: './cadastrar-login.component.html',
  styleUrls: ['./cadastrar-login.component.scss']
})
export class CadastrarLoginComponent implements OnInit {


  cadastroLogin = this.formBuilder.group({
    username: [null, [Validators.required]],
    email: [null, [Validators.required, Validators.email]],
    password: [null, [Validators.required]],
    rePassword: [null, [Validators.required]],
    status: [null, Validators.required],
    ativo: [null, Validators.required]
  })

  constructor(private router: Router,
              private formBuilder: FormBuilder,
              private loginService: LoginService,
              private alertaModalService: AlertaModalService) { }

  ngOnInit(): void {
  }

  cadastrar(){
    this.loginService.cadastrarLogin(this.cadastroLogin.value).subscribe(response => {
      this.router.navigate(['/login'])
      this.alertaModalService.AlertaSucess("Cadastro realizado com sucesso! Confirme seu cadastro por email para poder acessar.");
    },
    erro => {
      this.alertaModalService.AlertaDanger("Não foi possivel cadastrar!");
    }
    );
  }

  cancelar(){
    this.router.navigate(['/login']);
  }

  errorValidUserName() {
    if(this.cadastroLogin.get(['userName'])?.invalid){
      return 'O campo tem que ser preechido!';
    }else{
      return false;
    }
  }

}
