import { Component, OnInit } from '@angular/core';
import {PostService} from '../../services/post.service';
import {NavController} from '@ionic/angular';
import {NavigationExtras, Router} from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.page.html',
  styleUrls: ['./post.page.scss'],
})
export class PostPage implements OnInit {

  private categoria: number;
  constructor(private service: PostService,private navCtrl: NavController, private router: Router) {

    this.categoria = this.router.getCurrentNavigation().extras.state.categoria;
    console.log(this.categoria);
  }

  ngOnInit() {

  }

  goBack(){
    this.navCtrl.back();
  }
  goToDetail(id: number){
    console.log("Sono nel controller della vista di POST_PAGE");
    let extras: NavigationExtras = {
      state: {
        id: id
      }
    };
    this.router.navigate(['postdetail'], extras);
  }
}
