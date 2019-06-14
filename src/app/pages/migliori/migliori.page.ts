import { Component, OnInit } from '@angular/core';
import {NavController} from "@ionic/angular";
import {AssettoService} from "../../services/assetto.service";
import {NavigationExtras, Router} from "@angular/router";

@Component({
  selector: 'app-migliori',
  templateUrl: './migliori.page.html',
  styleUrls: ['./migliori.page.scss'],
})
export class MiglioriPage implements OnInit {

  constructor(private service: AssettoService,private navCtrl: NavController, private router: Router) { }

  ngOnInit() {
  }

  goToDetail(id: number){
    let extras: NavigationExtras = {
      state: {
        id: id
      }
    };
    this.router.navigate(['assettodetail'], extras);
  }

}
