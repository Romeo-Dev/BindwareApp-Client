import { Component, OnInit } from '@angular/core';
import {ModalController, NavParams} from '@ionic/angular';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Assetto} from '../../model/assetto.model';
import {Utente} from '../../model/utente.model';
import {AssettoService} from '../../services/assetto.service';

@Component({
  selector: 'app-modal-mid-asset',
  templateUrl: './modal-mid-asset.page.html',
  styleUrls: ['./modal-mid-asset.page.scss'],
})
export class ModalMidAssetPage implements OnInit {

  private assetForm: FormGroup;
  private utenteSession: Utente;

  constructor(private modal: ModalController,private builder: FormBuilder,private navParam: NavParams,private service: AssettoService) { }

  ngOnInit() {
    this.utenteSession = this.navParam.get('utente');

    this.assetForm = this.builder.group({
        nome: ['',Validators.required]
    });
  }


  addAsset() {
    console.log(this.utenteSession);
    let newAsset: Assetto;

    newAsset = {
      id: 301,
      nome_assetto: this.assetForm.controls['nome'].value,
      utente: this.utenteSession,
      completato: false,
      pubblicato: false
    } ;

    this.service.addAsset(newAsset);
    this.modal.dismiss();
    console.log(this.service.countAssetByUser());
  }



    closeModal() {
        this.modal.dismiss();
    }
}
