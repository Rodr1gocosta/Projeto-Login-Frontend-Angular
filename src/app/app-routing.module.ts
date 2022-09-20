import { ResetLoginComponent } from './login/reset-login/reset-login.component';
import { CadastrarLoginComponent } from './login/cadastrar-login/cadastrar-login.component';
import { SistemaComponent } from './sistema/sistema/sistema.component';
import { LoginComponent } from './login/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutoGuarda } from './guarda/auto-guarda'

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'login/cadastrar', component: CadastrarLoginComponent },
  { path: 'login/reset-senha', component: ResetLoginComponent },
  { path: '', component: SistemaComponent, canActivate: [AutoGuarda] },  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
