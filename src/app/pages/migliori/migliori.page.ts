import { Component, OnInit } from '@angular/core';
import {NavController} from "@ionic/angular";

@Component({
  selector: 'app-migliori',
  templateUrl: './migliori.page.html',
  styleUrls: ['./migliori.page.scss'],
})
export class MiglioriPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  goToLogin(){
    this.navCtrl.navigateForward('login');
  }

}
