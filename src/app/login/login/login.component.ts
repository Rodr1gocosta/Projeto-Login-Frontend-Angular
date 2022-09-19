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
              private router: Router) { }

  ngOnInit(): void {
    this.form = this.formGroup.group({
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required]]
   })
  }

  fazerLogin() {
    this.loginService.validarteste(this.form.value);
  }

  esquiciSenha() {
    
  }

  cadastrar(){
    this.router.navigate(['/login/cadastrar']);
  }

  errorValidEmail() {
    if(this.form.get(['email'])?.invalid){
      return 'O campo tem que ser preechido!';
    }else{
      return false;
    }
  }

}
