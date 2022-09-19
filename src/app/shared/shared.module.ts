import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertaModalComponent } from './alerta-modal/alerta-modal.component';



@NgModule({
  declarations: [
    AlertaModalComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AlertaModalComponent
  ],
  entryComponents: [
    AlertaModalComponent
  ]
})
export class SharedModule { }
