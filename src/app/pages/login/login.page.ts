import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Storage} from '@ionic/storage';
import {Utentemodel} from '../../model/utentemodel';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  private loginForm : FormGroup;
  private utente: Utentemodel;  // TODO: rivedere il model nell aggiunta del servizio rest per utente

  constructor(private navCtrl: NavController, private formBuilder: FormBuilder,private store: Storage) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['',Validators.compose([Validators.required])],
      password: ['',Validators.compose([Validators.required,Validators.minLength(5)])]
    });

  }



  goBack(){
    this.navCtrl.navigateRoot('home');
  }

  onLogin(){
    /*
    ----------------------------------------------
    codice che fa chiamata rest al servizio checkUtente()
    ----------------------------------------------*/
    this.utente = new Utentemodel(this.loginForm.get('username').value, this.loginForm.get('password').value);
    console.log(this.utente);
    this.store.set('utente',this.utente);
    this.navCtrl.navigateRoot('home');
  }

}
