import {ComponentModel} from './component.model';
import {Utente} from './utente.model';

export class RAMModel extends ComponentModel{

    tecnologia: string;
    capacita: number;
    frequenza: string;

    constructor(idc:number,marc: string,serieC: string,mod: string,riv: Utente,sim:number,tec:string,cap:number,freq:string){
        super(idc,marc,serieC,mod,riv,sim);
        this.tecnologia = tec;
        this.capacita = cap;
        this.frequenza = freq;
    }
}
