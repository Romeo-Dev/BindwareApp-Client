import { Component, OnInit } from '@angular/core';
import {AlertController, NavController} from '@ionic/angular';

@Component({
  selector: 'app-imieipost',
  templateUrl: './imieipost.page.html',
  styleUrls: ['./imieipost.page.scss'],
})
export class ImieipostPage implements OnInit {

  constructor(
      private navController: NavController,
  ) { }

  ngOnInit() {
  }

    goBack() {
      this.navController.navigateRoot('tabs');
    }
}
