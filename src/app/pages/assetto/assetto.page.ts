import { Component, OnInit } from '@angular/core';
import {AssettoService} from '../../services/assetto.service';
import {ModalController, NavController, PopoverController, ToastController} from '@ionic/angular';
import {Utente} from '../../model/utente.model';
import {NavigationExtras, Router} from '@angular/router';
import {ModalMidAssetPage} from '../modal-mid-asset/modal-mid-asset.page';
import {ModalsystembuilderPage} from '../modalsystembuilder/modalsystembuilder.page';
import {Assetto} from '../../model/assetto.model';

@Component({
  selector: 'app-assetto',
  templateUrl: './assetto.page.html',
  styleUrls: ['./assetto.page.scss'],
})
export class AssettoPage implements OnInit {

  private userSession: Utente;

  constructor(private service: AssettoService,private navCtrl: NavController,private modal: ModalController,private toastCtrl: ToastController,private route: Router) { }

  ngOnInit() {
    this.userSession = this.service.getUtenteSession();
  }

  clearAsset() {
    this.navCtrl.navigateForward('dummy');
  }


  open(){
    if (this.service.countAssetByUser() > 4){

      console.log("Slot assetti pieni");
      this.openToastBlock();

    } else {
      console.log("cerco di entrare in model asset");
      this.openModelAsset()

    }

  }

  async openModelAsset(){
    const mymod = await this.modal.create({
      component: ModalMidAssetPage,
      componentProps: {
        utente: this.userSession
      },
      cssClass: 'my-custom-modal-css'
    });

    await mymod.present();
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

  async openSystemBuilder(ass: Assetto){
    const system = await this.modal.create({
      component: ModalsystembuilderPage,
      componentProps: {
        asset:ass
      }
    });
    await system.present();
  }
}
