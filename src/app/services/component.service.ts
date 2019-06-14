import { Injectable } from '@angular/core';
import {Utente} from '../model/utente.model';
import {ComponentModel} from '../model/component.model';
import {RAMModel} from '../model/RAM.model';
import {CPUModel} from '../model/CPU.model';
import {Observable, of} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ComponentService {

  //array di utenti rivenditori
  private rivenditori$: Utente[] =[{
      id: 20,
    username: "Amazon.it",
    ruolo: "rivenditore"
  },{
    id: 21,
    username: "Assetta Ind.",
    ruolo: "rivenditore"
  },{
    id: 22,
    username: "LorenzaGatti15",
    ruolo: "normale"
  },
  ];

  private component$: ComponentModel[] = [
      new RAMModel(1,"Corsair","Memory d4 3000 16gb c15 corsair ven k2","CMK16GX4M2B3000C15","",this.rivenditori$[0],80,"DDR4",16,"3000Mhz"),
      new RAMModel(2,"G.Skill","Trident Z RGB 16GB DDR4","202715","",this.rivenditori$[1],110,"DDR4",16,"3200Mhz"),
      new RAMModel(3,"tHyperX","HyperX Fury","HX426C15FBK2","",this.rivenditori$[1],53,"DDR4",8,"2666Mhz"),
      new RAMModel(4,"Ballistix","Ballistix Sport LT DDR4 2400 MT/s","BLS2K4G4D240FSB","",this.rivenditori$[1],77,"DDR4",16,"2440Mhz"),
      new CPUModel(11,"AMD","5 2600","YD2600BBAFBOX","",this.rivenditori$[1],140,"3.4 GHz",100,"1500",95,13006),
      new CPUModel(12,"Intel","i7 6900k","RGB600BOX","",this.rivenditori$[1],255,"4.0 Ghz",100,"3000",98, 14000),
];
  constructor() { }


  getRivenditoreSession(id: number = 21): Utente{
    let localRiv: Utente;
    for (let user of this.rivenditori$){
      if (user.id === id){
        localRiv = user;
        return localRiv;
      }
    }
  }

  getComponentByRiver(id : number): Observable<ComponentModel[]>{
    let localComponent: ComponentModel[] = [];
    for (let entry of this.component$){
      if (entry.rivenditore.id === id){
        localComponent.push(entry);
      }
    }
    return of(localComponent);

  }



}
