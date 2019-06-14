import { Component, OnInit } from '@angular/core';
import {Assetto} from "../../model/assetto.model";
import {NavigationExtras, Router} from "@angular/router";
import {NavController} from "@ionic/angular";
import {AssettoService} from "../../services/assetto.service";

@Component({
  selector: 'app-assettodetail',
  templateUrl: './assettodetail.page.html',
  styleUrls: ['./assettodetail.page.scss'],
})
export class AssettodetailPage implements OnInit {

  private idAssetto: number;
  private detailAssetto: Assetto;

  constructor(private  router: Router,private service: AssettoService,private navCtrl: NavController) {
    this.idAssetto = this.router.getCurrentNavigation().extras.state.id;
    this.getSingleAssetto();
  }

  ngOnInit() {
  }

  getSingleAssetto(){
    this.service.getDetailAssett(this.idAssetto).subscribe(result =>{
      this.detailAssetto = result;
    });
  }

  goBack(){
    this.navCtrl.back();
  }

  goToComponentDetail(id: number, id_assett: number) {
    let extras: NavigationExtras = {
      state: {
        id: id,
        idassetto: id_assett
      }
    };
    this.router.navigate(['componentedetail'], extras);
  }
}
