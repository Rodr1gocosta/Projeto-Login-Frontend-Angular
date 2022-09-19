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
    email: [null, Validators.email],
    senha: [null, Validators.required],
    senhaNovamente: [null, Validators.required],
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
      this.alertaModalService.AlertaSucess("Cadastro realizado com sucesso!");
    });
  }

  cancelar(){
    this.router.navigate(['/login']);
  }

}
