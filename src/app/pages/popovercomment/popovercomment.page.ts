import { Component, OnInit } from '@angular/core';
import { NavParams, PopoverController} from '@ionic/angular';
import {PostModel} from '../../model/post.model';
import {CommentiModel} from '../../model/commenti.model';
import {Utente} from '../../model/utente.model';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {PostService} from '../../services/post.service';

@Component({
  selector: 'app-popovercomment',
  templateUrl: './popovercomment.page.html',
  styleUrls: ['./popovercomment.page.scss'],
})
export class PopovercommentPage implements OnInit {

  commenting: FormGroup;
  refpost: PostModel;
  newComment: CommentiModel;

  constructor(private popCtrl: PopoverController,private navParam: NavParams,private formBuilder: FormBuilder,private service: PostService) { }

  ngOnInit() {
    this.refpost = this.navParam.get("post");
    this.commenting = this.formBuilder.group({
      comment : ['',Validators.compose([Validators.required,Validators.minLength(5)])]
    });
  }

  closePopover(){
    this.popCtrl.dismiss();
  }

  addCommento() {
    console.log(this.commenting.value);
    let sc: string = this.commenting.controls['comment'].value;
    this.newComment = {
      id: 101,
    post: this.refpost,
    utente: this.refpost.utente,
    data: "13-07-2019",
    commento: sc
    };
    this.service.addComment(this.newComment);
    this.popCtrl.dismiss();
  }

}
