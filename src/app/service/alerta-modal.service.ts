import { AlertaModalComponent } from './../shared/alerta-modal/alerta-modal.component';
import { Injectable } from "@angular/core";
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

export enum AlertaTipo{
    DANGER = 'danger',
    SUCCESS = 'success',
    WARNING = 'warning'
}

@Injectable({
    providedIn: 'root'
})

export class AlertaModalService {

    constructor(private modalService: BsModalService) { }


    private alertaModal(messagem: string, tipo: AlertaTipo) {
        const modalAlerta: BsModalRef = this.modalService.show(AlertaModalComponent);
        modalAlerta.content.tipo = tipo;
        modalAlerta.content.messagem = messagem;
    }

    AlertaDanger(messagem: string) {
        this.alertaModal(messagem, AlertaTipo.DANGER);
    }

    
    AlertaSucess(messagem: string) {
        this.alertaModal(messagem, AlertaTipo.SUCCESS);
    }

    
    AlertaWarning(messagem: string) {
        this.alertaModal(messagem, AlertaTipo.WARNING);
    }
}