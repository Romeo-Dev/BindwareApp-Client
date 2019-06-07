import { Component, OnInit } from '@angular/core';
import {PostService} from '../../services/post.service';
import {NavigationExtras, Router} from '@angular/router';
@Component({
  selector: 'app-forum',
  templateUrl: './forum.page.html',
  styleUrls: ['./forum.page.scss'],
})
export class ForumPage implements OnInit {

  constructor(private service: PostService,private route: Router) { }

  ngOnInit() {
  }
goToPost(nome: string){

  let extras: NavigationExtras = {
    state: {
      categoria: nome
    }
  };
  this.route.navigate(['post'], extras);
}

}
