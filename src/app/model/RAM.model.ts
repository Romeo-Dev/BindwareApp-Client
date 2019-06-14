import {ComponentModel} from './component.model';
import {Utente} from './utente.model';

export class RAMModel extends ComponentModel{

    tecnologia: string;
    capacita: number;
    frequenza: string;


    constructor(id: number, marca: string, serie: string, modello: string, immagine: String, rivenditore: Utente, prezzo: number, tecnologia: string, capacita: number, frequenza: string) {
        super(id, marca, serie, modello, immagine, rivenditore, prezzo);
        this.tecnologia = tecnologia;
        this.capacita = capacita;
        this.frequenza = frequenza;
    }
}
