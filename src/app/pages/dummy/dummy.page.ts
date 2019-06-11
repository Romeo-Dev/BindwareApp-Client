import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-dummy',
  templateUrl: './dummy.page.html',
  styleUrls: ['./dummy.page.scss'],
})
export class DummyPage implements OnInit {

  constructor(private navCtrl: NavController ) { }

  ngOnInit() {
  }





    goBack() {
        this.navCtrl.back();
    }
}
