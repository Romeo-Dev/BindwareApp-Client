import { Component, OnInit } from '@angular/core';
import {ModalController, NavParams} from '@ionic/angular';
import {PostModel} from '../../model/post.model';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {PostService} from '../../services/post.service';

@Component({
  selector: 'app-modal-mid-comment',
  templateUrl: './modal-mid-comment.page.html',
  styleUrls: ['./modal-mid-comment.page.scss'],
})
export class ModalMidCommentPage implements OnInit {

  private  currentPost: PostModel;
  private commentoForm: FormGroup;
  constructor(private modal: ModalController,private navParam: NavParams,private builder: FormBuilder,private service: PostService) { }

  ngOnInit() {
    this.currentPost = this.navParam.get('post');
    this.commentoForm = this.builder.group({
      commento: ['',Validators.required]
    });

  }




    closeModal() {
        this.modal.dismiss();
    }

  addCommento() {
    console.log(this.commentoForm.value);
    let sc: string = this.commentoForm.controls['commento'].value;
    let newComment = {
      id: 101,
      post: this.currentPost,
      utente: this.currentPost.utente,
      data: "13-07-2019",
      commento: sc
    };
    this.service.addComment(newComment);
    this.modal.dismiss();
  }
}
