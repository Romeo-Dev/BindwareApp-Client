import { Component, OnInit } from '@angular/core';
import {AssettoService} from '../../services/assetto.service';
import {NavController, PopoverController, ToastController} from '@ionic/angular';
import {PopoverassetPage} from '../popoverasset/popoverasset.page';
import {Utente} from '../../model/utente.model';
import {NavigationExtras, Router} from '@angular/router';

@Component({
  selector: 'app-assetto',
  templateUrl: './assetto.page.html',
  styleUrls: ['./assetto.page.scss'],
})
export class AssettoPage implements OnInit {

  private userSession: Utente;

  constructor(private service: AssettoService,private navCtrl: NavController,private popCtrl: PopoverController,private toastCtrl: ToastController,private route: Router) { }

  ngOnInit() {
    this.userSession = this.service.getUtenteSession();
  }

  clearAsset() {
    this.navCtrl.navigateForward('dummy');
  }


  openFormAsset(ev: Event,utente: Utente){

    if (this.service.countAssetByUser() > 4){

      console.log("Slot assetti pieni");
      this.openToastBlock();

    } else {

      console.log("procedo all add assetto");
      console.log(utente);
      this.openPopoverAsset(ev,utente);

    }

  }



   async openPopoverAsset(ev: Event,utente: Utente = this.userSession) {
    const pop = await this.popCtrl.create({
      component: PopoverassetPage,
      componentProps:{
        utente: utente
      },
      event: ev
    });
    await pop.present();
  }

  async  openToastBlock(){
    const toast = await this.toastCtrl.create({
      header: 'Attenzione !!!',
      message: 'Raggiunto limite di assetti eliminarne uno se si desidera continuare',
      color:'warning',
      duration:3500,
      position: 'bottom',
      buttons: [
        {
          side: 'end',
          icon: 'close-circle',
          handler: () => {
            this.toastCtrl.dismiss();
          }
        }
      ]
    });
    toast.present();
  }

  goToDetail(id: number) {

    if (id != 0) {
      this.navCtrl.navigateForward('dummy');
    } else {

      let extras: NavigationExtras = {
        state: {
          id: id
        }
      };
      this.route.navigate(['assettodetail'], extras);
    }
  }
}
