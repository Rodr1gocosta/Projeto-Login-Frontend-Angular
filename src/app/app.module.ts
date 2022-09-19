import { SharedModule } from './shared/shared.module';
import { AutoGuarda } from './guarda/auto-guarda';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ModalModule } from 'ngx-bootstrap/modal';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login/login.component';
import { SistemaComponent } from './sistema/sistema/sistema.component';
import { CadastrarLoginComponent } from './login/cadastrar-login/cadastrar-login.component';

import { LoginService } from './service/login-service.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SistemaComponent,
    CadastrarLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ModalModule.forRoot(),
    SharedModule
  ],
  providers: [LoginService, AutoGuarda],
  bootstrap: [AppComponent]
})
export class AppModule { }
