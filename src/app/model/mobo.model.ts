
import {ComponentModel} from "./component.model";
import {Utente} from "./utente.model";

export class MOBO extends ComponentModel{
	// id: number?
	formato: string;
	famiglia_cpu: string;
	socket: string;
	tipo_ram: string;
	n_banchi: number;


	constructor(id: number, marca: string, serie: string, modello: string, immagine: String, rivenditore: Utente, prezzo: number, formato: string, famiglia_cpu: string, socket: string, tipo_ram: string, n_banchi: number) {
		super(id, marca, serie, modello, immagine, rivenditore, prezzo);
		this.formato = formato;
		this.famiglia_cpu = famiglia_cpu;
		this.socket = socket;
		this.tipo_ram = tipo_ram;
		this.n_banchi = n_banchi;
	}
}
