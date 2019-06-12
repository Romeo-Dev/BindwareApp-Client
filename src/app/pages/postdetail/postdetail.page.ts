import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {PostModel} from '../../model/post.model';
import {PostService} from '../../services/post.service';
import {NavController} from '@ionic/angular';
import {CommentiModel} from '../../model/commenti.model';

@Component({
  selector: 'app-postdetail',
  templateUrl: './postdetail.page.html',
  styleUrls: ['./postdetail.page.scss'],
})
export class PostdetailPage implements OnInit {

  private idPost: number;
  private detailPost: PostModel;
  private totcom: number;

  constructor(private  router: Router,private service: PostService,private navCtrl: NavController) {

    this.idPost = this.router.getCurrentNavigation().extras.state.id;
    console.log(this.idPost);
    this.getSinglePost();
  }

  ngOnInit() {
  }


  getSinglePost(){
    this.service.getDetailPost(this.idPost).subscribe(result =>{
      console.log("carico nella pagina il mio post"+ result);
      this.detailPost = result;
    });
  }

  getCountCommenti(): number{
    this.totcom = this.service.totCommenti ;
    console.log(this.totcom);
    return this.totcom;
  }

  goBack(){
    this.navCtrl.back();
  }

}
