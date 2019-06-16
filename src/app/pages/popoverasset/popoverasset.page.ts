import { Component, OnInit } from '@angular/core';
import {NavParams, PopoverController} from '@ionic/angular';
import {AssettoService} from '../../services/assetto.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Assetto} from '../../model/assetto.model';
import {Utente} from '../../model/utente.model';

@Component({
  selector: 'app-popoverasset',
  templateUrl: './popoverasset.page.html',
  styleUrls: ['./popoverasset.page.scss'],
})
export class PopoverassetPage implements OnInit {

  private assetForm: FormGroup;
  private utenteSession: Utente;

  constructor(private popCtrl: PopoverController,private service: AssettoService,private formBuilder: FormBuilder,private navParam: NavParams) { }

  ngOnInit() {

      this.utenteSession = this.navParam.get('utente');

    this.assetForm = this.formBuilder.group({
      nome:['',Validators.compose([Validators.required,Validators.minLength(3),Validators.maxLength(30)])],
      select:['',Validators.required]
    });

  }

    closePopover() {
        this.popCtrl.dismiss();
    }

  addAsset() {

    console.log(this.service.countAssetByUser());
    console.log(this.utenteSession);
      let newAsset: Assetto;

      newAsset = {
        id: 301,
        famiglia_cpu: this.assetForm.controls['select'].value,
        nome_assetto: this.assetForm.controls['nome'].value,
        utente: this.utenteSession,
        completato: false,
        pubblicato: false
      } ;

      this.service.addAsset(newAsset);
      this.popCtrl.dismiss();
      console.log(this.service.countAssetByUser());
  }
}
