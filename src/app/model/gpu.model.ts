
import {ComponentModel} from "./component.model";
import {Utente} from "./utente.model";

export class GPU extends ComponentModel{
	// id: number;
	wattaggio: number;	
	memoria: number;
	benchmark_gpu: number;


	constructor(id: number, marca: string, serie: string, modello: string, immagine: String, rivenditore: Utente, prezzo: number, wattaggio: number, memoria: number, benchmark_gpu: number) {
		super(id, marca, serie, modello, immagine, rivenditore, prezzo);
		this.wattaggio = wattaggio;
		this.memoria = memoria;
		this.benchmark_gpu = benchmark_gpu;
	}
}
