import { Component, OnInit } from '@angular/core';
import {NavController} from "@ionic/angular";

@Component({
  selector: 'app-rivenditore',
  templateUrl: './rivenditore.page.html',
  styleUrls: ['./rivenditore.page.scss'],
})
export class RivenditorePage implements OnInit {

  constructor( private navController: NavController,) { }

  goBack() {
    this.navController.navigateRoot('tabs');
  }

  ngOnInit() {
  }

}
