import { Component, OnInit } from '@angular/core';
import {AlertController, NavController} from '@ionic/angular';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Storage} from '@ionic/storage';
import {Utente} from '../../model/utente.model';
import {TranslateService} from '@ngx-translate/core';
import {Account, UtenteService} from '../../services/utente.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  private loginForm : FormGroup;
  private utente: Utente;
  private loginSubTitle: string;
  private loginTitle: string;

  // TODO: rivedere il model nell aggiunta del servizio rest per utente

  constructor(private navCtrl: NavController, private formBuilder: FormBuilder,private store: Storage,private translateService: TranslateService,private alertController: AlertController,private utenteService: UtenteService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['',Validators.compose([Validators.required])],
      password: ['',Validators.compose([Validators.required,Validators.minLength(5)])]
    });
        this.initTranslate();
  }



  goBack(){
    this.navCtrl.navigateRoot('tabs');
  }

  onLogin(){
    /*
    ----------------------------------------------
    codice che fa chiamata rest al servizio checkUtente()
    true: resetto campi e procedo nella mia home da utente loggato
    false: error chiamo showLoginForm rimango in tale pagina
    ----------------------------------------------*/
    const account: Account = this.loginForm.value;
    console.log('non stampa'+account);
    if(this.utenteService.login(account)){
      console.log('Login con successo');
      this.navCtrl.navigateRoot('tabs');
    }else {
      this.showLoginError();
    }


  }


  async showLoginError(){
    // chiamare tale metodo in onLogin in caso si giunge al ramo else della chiamata rest checkUtente()
    const alert = await this.alertController.create({
      header: this.loginTitle,
      message: this.loginSubTitle,
      buttons: ['OK']
    });

    await alert.present();
  }

  goToRegister(){
    this.navCtrl.navigateForward('register');
  }


  private initTranslate() {
    this.translateService.get('LOGIN_ERROR_SUB_TITLE').subscribe((data) => {
      this.loginSubTitle = data;
    });
    this.translateService.get('LOGIN_ERROR_TITLE').subscribe((data) => {
      this.loginTitle = data;
    });
  }

}
