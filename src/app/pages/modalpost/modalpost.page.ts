import { Component, OnInit } from '@angular/core';
import {ModalController, NavParams} from '@ionic/angular';
import {PostService} from '../../services/post.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Utente} from '../../model/utente.model';
import {PostModel} from '../../model/post.model';
import {CategoriaModel} from '../../model/categoria.model';

@Component({
  selector: 'app-modalpost',
  templateUrl: './modalpost.page.html',
  styleUrls: ['./modalpost.page.scss'],
})
export class ModalpostPage implements OnInit {

  private postForm: FormGroup;
  private utenteSession: Utente;

  constructor(private modal : ModalController,private service: PostService,private builder: FormBuilder,private navParam: NavParams){ }

  ngOnInit() {
    this.utenteSession = this.navParam.get('utente');

    this.postForm = this.builder.group({
      drop:['',Validators.required],
      title:['',Validators.compose([Validators.required,Validators.minLength(10),Validators.maxLength(350)])],
      desc:['',Validators.minLength(20)],
      datepost:['',Validators.required]
    });
  }

  closeModal() {
    this.modal.dismiss();
  }

  createPost() {
    console.log("metodo create fare check categoria");
    console.log("id categoria "+ this.postForm.controls['drop'].value);
    console.log(typeof (+ this.postForm.controls['drop'].value));
    let localCategory: CategoriaModel;
    if (this.postForm.controls['drop'].value != null){
      localCategory = this.service.getCategoryById(+this.postForm.controls['drop'].value);
    }else {
      console.log("drop is missing ");
      return;
    }


    let newPost: PostModel = {
      id: 201,
      titolo: this.postForm.controls['title'].value,
      descr: this.postForm.controls['desc'].value,
      data: this.postForm.controls['datepost'].value,
      categoria: localCategory,
      utente: this.utenteSession
    };
      this.service.insertIntoPost(newPost);
      this.modal.dismiss();
  }
}
