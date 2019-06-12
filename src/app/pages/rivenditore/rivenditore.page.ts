import { Component, OnInit } from '@angular/core';
import {NavController} from "@ionic/angular";
import {Utente} from '../../model/utente.model';
import {ComponentService} from '../../services/component.service';

@Component({
  selector: 'app-rivenditore',
  templateUrl: './rivenditore.page.html',
  styleUrls: ['./rivenditore.page.scss'],
})
export class RivenditorePage implements OnInit {
  private rivenditoreSession: Utente

  constructor( private navController: NavController,private  service : ComponentService) {
    this.rivenditoreSession = this.service.getRivenditoreSession();
  }

  goBack() {
    this.navController.navigateRoot('tabs');
  }

  ngOnInit() {
  }

}
