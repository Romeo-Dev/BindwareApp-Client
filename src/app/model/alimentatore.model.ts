
import {ComponentModel} from "./component.model";
import {Utente} from "./utente.model";

export class Alimentatore extends ComponentModel {
	// id: number;
	wattaggio: number;
	certificazione: string;
	stile: string;


	constructor(id: number, marca: string, serie: string, modello: string, immagine: String, rivenditore: Utente, prezzo: number, wattaggio: number, certificazione: string, stile: string) {
		super(id, marca, serie, modello, immagine, rivenditore, prezzo);
		this.wattaggio = wattaggio;
		this.certificazione = certificazione;
		this.stile = stile;
	}
}
