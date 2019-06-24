import { Component, OnInit } from '@angular/core';
import {ModalController, NavParams} from '@ionic/angular';
import {AssettoService} from '../../services/assetto.service';
import {ComponentModel} from '../../model/component.model';
import {Assetto} from '../../model/assetto.model';

@Component({
  selector: 'app-modal-mid-component-part',
  templateUrl: './modal-mid-component-part.page.html',
  styleUrls: ['./modal-mid-component-part.page.scss'],
})
export class ModalMidComponentPartPage implements OnInit {

  private part: string;
  private newPart: ComponentModel;
  private currentAsset: Assetto;

  constructor(private  modal: ModalController,private service: AssettoService,private navParam: NavParams) { }


  ngOnInit() {
    this.part = this.navParam.get('part');
    this.currentAsset = this.navParam.get('asset');

  }



    closeModalPart() {
        this.modal.dismiss();
    }

  addPartOnMyAsset(entry: ComponentModel) {
      this.newPart = entry;
      AssettoService.addComponentPartOnMyAsset(this.currentAsset,this.part,this.newPart);
      this.modal.dismiss();
  }
}
