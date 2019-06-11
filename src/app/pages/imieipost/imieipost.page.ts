import { Component, OnInit } from '@angular/core';
import {AlertController, NavController} from '@ionic/angular';
import {Utente} from '../../model/utente.model';
import {PostService} from '../../services/post.service';
import {NavigationExtras, Router} from '@angular/router';

@Component({
  selector: 'app-imieipost',
  templateUrl: './imieipost.page.html',
  styleUrls: ['./imieipost.page.scss'],
})
export class ImieipostPage implements OnInit {

  private utenteSession: Utente;

  constructor(
      private navController: NavController,private service: PostService,private router: Router) {
      this.utenteSession = this.service.getUtenteSession();
  }

  ngOnInit() {
  }

    goBack() {
      this.navController.navigateRoot('tabs');
    }

    goToDetail(idPost: number){

      let extras: NavigationExtras = {
        state: {
          id: idPost
        }
      };
      this.router.navigate(['postdetail'], extras);
    }
}
