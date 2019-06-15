import { Component, OnInit } from '@angular/core';
import {ModalController, NavController} from '@ionic/angular';
import {Utente} from '../../model/utente.model';
import {ComponentService} from '../../services/component.service';
import {ModalrivenditorePage} from '../modalrivenditore/modalrivenditore.page';

@Component({
  selector: 'app-rivenditore',
  templateUrl: './rivenditore.page.html',
  styleUrls: ['./rivenditore.page.scss'],
})
export class RivenditorePage implements OnInit {
  private rivenditoreSession: Utente

  constructor( private navController: NavController,private  service : ComponentService,private modal: ModalController) {
    this.rivenditoreSession = this.service.getRivenditoreSession();
  }

  goBack() {
    this.navController.navigateRoot('tabs');
  }

  ngOnInit() {
  }

    async openModalRivenditore() {
        const mod = await this.modal.create({
          component: ModalrivenditorePage,
          componentProps: {
            utente: this.rivenditoreSession
          }
        });
        await mod.present();
    }
}
