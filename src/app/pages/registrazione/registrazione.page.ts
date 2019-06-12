import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {NavController} from "@ionic/angular";
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-registrazione',
  templateUrl: './registrazione.page.html',
  styleUrls: ['./registrazione.page.scss'],
})
export class RegistrazionePage implements OnInit {
    registerForm:  FormGroup;
  private registerSubTitle: string;
  private registerTitle: string;

  constructor(private navCtrl: NavController, private formBuilder: FormBuilder,private translateService: TranslateService) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      username: ['',Validators.compose([Validators.required])],
      email: ['',Validators.compose([Validators.required])],
      password: ['',Validators.compose([Validators.required,Validators.minLength(5)])],
      confirmpassword: ['',Validators.compose([Validators.required,Validators.minLength(5)])],
      utentenormale: [''],
      rivenditore: [''],
      partitaiva: ['',Validators.compose([Validators.required])],
      fatturazione: ['',Validators.compose([Validators.required])],
      link: ['',Validators.compose([Validators.required])],
    });
    this.initTranslate();
  }

  goBack(){
    this.navCtrl.navigateRoot('tabs');
  }

  register() {

  }


  private initTranslate() {
    this.translateService.get('REGISTER_ERROR_SUB_TITLE').subscribe((data) => {
      this.registerSubTitle = data;
    });
    this.translateService.get('REGISTER_ERROR_TITLE').subscribe((data) => {
      this.registerTitle = data;
    });
  }
}
