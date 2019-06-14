
import {ComponentModel} from "./component.model";
import {Utente} from "./utente.model";

export class Case extends ComponentModel {
	// id: number;
	colore: string;
	peso: number;
	formato: string;


	constructor(id: number, marca: string, serie: string, modello: string, immagine: String, rivenditore: Utente, prezzo: number, colore: string, peso: number, formato: string) {
		super(id, marca, serie, modello, immagine, rivenditore, prezzo);
		this.colore = colore;
		this.peso = peso;
		this.formato = formato;
	}
}
