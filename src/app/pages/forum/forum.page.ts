import { Component, OnInit } from '@angular/core';
import {PostService} from '../../services/post.service';
import {NavigationExtras, Router} from '@angular/router';
import {NavController} from '@ionic/angular';
@Component({
  selector: 'app-forum',
  templateUrl: './forum.page.html',
  styleUrls: ['./forum.page.scss'],
})
export class ForumPage implements OnInit {

  constructor(private service: PostService,private route: Router,private navCtrl: NavController) { }

  ngOnInit() {
  }
goToPost(id: number) {
  //soluzione discutibile ma è solo al momento in cui non abbiamo il server
  if (id > 2) {
    console.log('entro nel dummy');
    this.navCtrl.navigateForward('dummy');
  } else {

    let extras: NavigationExtras = {
      state: {
        categoria: id
      }
    };
    this.route.navigate(['post'], extras);
  }
}

}
