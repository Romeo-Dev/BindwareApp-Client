import {Utente} from './utente.model';

export class ComponentModel  {
    id: number;
    marca: string;
    serie: string;
    modello: string;
    dimensione?: string;
    //image?: Blob;
    immagine?: String;
    rivenditore: Utente;
    prezzo: number;


    constructor(id: number, marca: string, serie: string, modello: string, immagine: String, rivenditore: Utente, prezzo: number) {
        this.id = id;
        this.marca = marca;
        this.serie = serie;
        this.modello = modello;
        this.immagine = immagine;
        this.rivenditore = rivenditore;
        this.prezzo = prezzo;
    }
}
