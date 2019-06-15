import { Component, OnInit } from '@angular/core';
import {ModalController, NavParams, ToastController} from '@ionic/angular';
import {ComponentService} from '../../services/component.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CPUModel} from '../../model/CPU.model';
import {Utente} from '../../model/utente.model';
import {RAMModel} from '../../model/RAM.model';

@Component({
  selector: 'app-modalrivenditore',
  templateUrl: './modalrivenditore.page.html',
  styleUrls: ['./modalrivenditore.page.scss'],
})
export class ModalrivenditorePage implements OnInit {

 private componentForm: FormGroup;
  private cpuForm: FormGroup;
  private ramForm: FormGroup;
  private currentRiv: Utente;

  constructor(private modal: ModalController,private service: ComponentService,private builder: FormBuilder,private navParam: NavParams,private toastCtrl: ToastController) { }

  ngOnInit() {
this.currentRiv = this.navParam.get('utente');
    this.componentForm = this.builder.group({
      marca:['',Validators.compose([Validators.required,Validators.maxLength(50)])],
      serie: ['',Validators.compose([Validators.required,Validators.maxLength(100),Validators.minLength(3)])],
      modello: ['',Validators.compose([Validators.required,Validators.maxLength(100),Validators.minLength(3)])],
      prezzo:['',Validators.compose([Validators.required,Validators.minLength(1),Validators.maxLength(10)])],
      switch:['',Validators.required]
    });

    this.cpuForm = this.builder.group({
      socket:['',Validators.compose([Validators.required,Validators.maxLength(10)])],
      core:['',Validators.compose([Validators.required,Validators.maxLength(10)])],
      freqcpu:['',Validators.compose([Validators.required,Validators.maxLength(10)])],
      watt:['',Validators.compose([Validators.required,Validators.maxLength(5)])],
      bench:['',Validators.compose([Validators.required,Validators.maxLength(10)])]
    });

    this.ramForm = this.builder.group({
       tec:['',Validators.compose([Validators.required,Validators.maxLength(8)])],
       capacity:['',Validators.compose([Validators.required,Validators.maxLength(8)])],
       freqram:['',Validators.compose([Validators.required,Validators.maxLength(8)])],
    });
  }

    closeModal() {
        this.modal.dismiss();
    }

    addComponent() {
      switch (this.componentForm.controls['switch'].value) {
          case "CPU":{
              if (!this.cpuForm.valid){
                  console.log("form della cpu non e valida");
                  this.presentToastWithOptions();
              } else {

                let cpu : CPUModel;
                let idcpu: number = 2002;

                  cpu = new CPUModel(idcpu,this.componentForm.controls['marca'].value,this.componentForm.controls['serie'].value,this.componentForm.controls['modello'].value,"empty-folder.png",this.currentRiv,this.componentForm.controls['prezzo'].value,
                this.cpuForm.controls['socket'].value, this.cpuForm.controls['core'].value, this.cpuForm.controls['freqcpu'].value, this.cpuForm.controls['watt'].value,this.cpuForm.controls['bench'].value);
                this.service.addComponentService(cpu);

                this.modal.dismiss();
              }
              break;
          }
          case "RAM":{
              if (!this.ramForm.valid){
                  console.log("form della ram non e valida");
                  this.presentToastWithOptions();
              } else {

                  let ram : RAMModel;
                  ram = new RAMModel(2003,this.componentForm.controls['marca'].value,this.componentForm.controls['serie'].value,this.componentForm.controls['modello'].value,"empty-folder.png",this.currentRiv,this.componentForm.controls['prezzo'].value,
                      this.ramForm.controls['tec'].value, this.ramForm.controls['capacity'].value, this.ramForm.controls['freqram'].value);
                  this.service.addComponentService(ram);

                  this.modal.dismiss();
              }

              break;
          }
          default: {
              console.log("prego reinserire dati");
              break;
          }

      }

    }


    async presentToastWithOptions() {
        const toast = await this.toastCtrl.create({
            header: 'Attenzione !!!',
            message: 'Prego finire di compilare i (Dettagli Specifici)',
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
}
