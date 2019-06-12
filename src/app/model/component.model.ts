import {Utente} from './utente.model';

export class ComponentModel  {
    id: number;
    marca: string;
    serie: string;
    modello: string;
    dimensione?: string;
    image?: Blob;
    rivenditore: Utente;
    prezzo: number;

    constructor(idc:number,marc: string,serieC: string,mod: string,riv: Utente,sim:number){
        this.id = idc;
        this.marca = marc;
        this.serie = serieC;
        this.modello = mod;
        this.rivenditore = riv;
        this.prezzo = sim;

    }
}
