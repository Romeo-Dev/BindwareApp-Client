import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AssettoService} from "../../services/assetto.service";
import {NavController} from "@ionic/angular";
import {ComponentModel} from "../../model/component.model";


@Component({
  selector: 'app-componentedetail',
  templateUrl: './componentedetail.page.html',
  styleUrls: ['./componentedetail.page.scss'],
})
export class ComponentedetailPage implements OnInit {

  private idAssetto: number;
  private idComponente: number;
  private detailComponente: ComponentModel;

  constructor(private  router: Router,private service: AssettoService,private navCtrl: NavController) {
    this.idComponente = this.router.getCurrentNavigation().extras.state.id;
    this.idAssetto = this.router.getCurrentNavigation().extras.state.idassetto;
    this.getSingleComponentebyAssetto();
  }

  getSingleComponentebyAssetto(){
    this.service.getDetailComponente(this.idComponente, this.idAssetto).subscribe(result =>{
      this.detailComponente = result;
    });
  }

  ngOnInit() {
  }

  goBack() {
    this.navCtrl.back();
  }
}
