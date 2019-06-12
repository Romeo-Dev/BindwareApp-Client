import { Component, OnInit } from '@angular/core';
import {NavController} from "@ionic/angular";
import {AssettoService} from "../../services/assetto.service";

@Component({
  selector: 'app-migliori',
  templateUrl: './migliori.page.html',
  styleUrls: ['./migliori.page.scss'],
})
export class MiglioriPage implements OnInit {

  constructor(private navCtrl: NavController, private service: AssettoService) { }

  ngOnInit() {
  }


}
