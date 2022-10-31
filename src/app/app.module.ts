import { SharedModule } from './shared/shared.module';
import { AutoGuarda } from './guarda/auto-guarda';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ModalModule } from 'ngx-bootstrap/modal';
import { RecaptchaModule } from 'ng-recaptcha';



import { AppComponent } from './app.component';
import { LoginComponent } from './login/login/login.component';
import { SistemaComponent } from './sistema/sistema/sistema.component';
import { CadastrarLoginComponent } from './login/cadastrar-login/cadastrar-login.component';
import { ResetLoginComponent } from './login/reset-login/reset-login.component';

import { LoginService } from './service/login-service.service';
import { AtendenteComponent } from './atendente/atendente.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SistemaComponent,
    CadastrarLoginComponent,
    ResetLoginComponent,
    AtendenteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ModalModule.forRoot(),
    SharedModule,
    RecaptchaModule,
  ],
  providers: [LoginService, AutoGuarda],
  bootstrap: [AppComponent]
})
export class AppModule { }
