import {Utente} from './utente.model';
import {CPUModel} from "./CPU.model";
import {RAMModel} from "./RAM.model";
import {Disco} from "./disco.model";
import {MOBO} from "./mobo.model";
import {GPU} from "./gpu.model";
import {Alimentatore} from "./alimentatore.model";
import {Case} from "./case.model";
import {ComponentModel} from "./component.model";

export class Assetto {
	id: number;
	famiglia_cpu?: string;
	utente: Utente;
	nome_assetto: string;
	benchmark_ibrido?: number;
	completato?: boolean;
	pubblicato?: boolean;
	voto_medio?: number;
	//vincoli?: Vincoli;
	cpu?: CPUModel;
	mobo?:MOBO;
	ram?: RAMModel;
	gpu?: GPU;
	alimentatore?: Alimentatore;
	disco?: Disco;
	computercase?: Case;

}
