
import {ComponentModel} from "./component.model";
import {Utente} from "./utente.model";

export class Disco extends ComponentModel{
	// id: number?
	capacita: number;
	velocita_transfer: string;
	wattaggio: number;


	constructor(id: number, marca: string, serie: string, modello: string, immagine: String, rivenditore: Utente, prezzo: number, capacita: number, velocita_transfer: string, wattaggio: number) {
		super(id, marca, serie, modello, immagine, rivenditore, prezzo);
		this.capacita = capacita;
		this.velocita_transfer = velocita_transfer;
		this.wattaggio = wattaggio;
	}
}
