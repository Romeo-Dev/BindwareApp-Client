import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {PostModel} from '../../model/post.model';
import {PostService} from '../../services/post.service';
import {NavController, PopoverController} from '@ionic/angular';
import {CommentiModel} from '../../model/commenti.model';
import {PopovercommentPage} from '../popovercomment/popovercomment.page';

@Component({
  selector: 'app-postdetail',
  templateUrl: './postdetail.page.html',
  styleUrls: ['./postdetail.page.scss'],
})
export class PostdetailPage implements OnInit {

  private idPost: number;
  private detailPost: PostModel;
  private totcom: number;

  constructor(private  router: Router,private service: PostService,private navCtrl: NavController,private popCtrl: PopoverController) {

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


  async  openPopover(ev: Event,post: PostModel){
      console.log("popover evento partito");
    const over = await this.popCtrl.create({
        component: PopovercommentPage,
        componentProps: {
          post: post
        },
        event: ev
    });
    over.present();
  }
}
