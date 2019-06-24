import { Component, OnInit } from '@angular/core';
import {AlertController, ModalController, NavParams} from '@ionic/angular';
import {Assetto} from '../../model/assetto.model';
import {AssettoService} from '../../services/assetto.service';
import {ModalMidComponentPartPage} from '../modal-mid-component-part/modal-mid-component-part.page';

@Component({
  selector: 'app-modalsystembuilder',
  templateUrl: './modalsystembuilder.page.html',
  styleUrls: ['./modalsystembuilder.page.scss'],
})
export class ModalsystembuilderPage implements OnInit {

  private systemAsset: Assetto;

  constructor(private modal: ModalController,private navParams: NavParams,private service: AssettoService,private alertCtrl: AlertController,private currentModal: ModalController) { }

  ngOnInit() {
    this.systemAsset = this.navParams.get('asset');
    AssettoService.initWizard(this.systemAsset);

  }



    closeModal() {
        this.modal.dismiss();
    }



    async deleteAssettoPresent(){
      const alert = await this.alertCtrl.create({
        header: 'Attenzione!',
        message: 'Sicuro di voler cancellare l assetto corrente?',
        buttons: [
          {
            text: 'No',
            cssClass: 'danger',
            handler: () => {
              console.log('Annulla');
            }
          }, {
            text: 'Ok',
            handler: () => {
              this.service.deleteAssettoCurrent(this.systemAsset);
              this.modal.dismiss();
            }
          }
        ]
      });
      await alert.present();
    }


    removeComponentFromAsset(part: string){
    this.systemAsset = this.service.removePartFromAsset(this.systemAsset,part);
    }

  async openComponentPart(part: string) {

    const avaiable = await this.currentModal.create({
      component: ModalMidComponentPartPage,
      componentProps:{
        part: part,
        asset: this.systemAsset
      },
      cssClass: 'my-component-part-css',
    });

    await avaiable.present();
  }


}
