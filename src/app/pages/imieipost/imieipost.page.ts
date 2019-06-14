import { Component, OnInit } from '@angular/core';
import {AlertController, ModalController, NavController} from '@ionic/angular';
import {Utente} from '../../model/utente.model';
import {PostService} from '../../services/post.service';
import {NavigationExtras, Router} from '@angular/router';
import {ModalpostPage} from '../modalpost/modalpost.page';

@Component({
  selector: 'app-imieipost',
  templateUrl: './imieipost.page.html',
  styleUrls: ['./imieipost.page.scss'],
})
export class ImieipostPage implements OnInit {

  private utenteSession: Utente;

  constructor(
      private navController: NavController,private service: PostService,private router: Router,private modal: ModalController) {
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

  deletePost() {
    this.navController.navigateForward('dummy');
  }


  async  openModalCreatePost() {
    console.log("apro modal di insert post");
    const modal = await this.modal.create({
      component: ModalpostPage,
      componentProps: {
        utente: this.utenteSession
      }
    });
    await modal.present();
  }
}
