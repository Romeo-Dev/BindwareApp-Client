import {Utente} from './utente.model';
import {Vota} from './vota.model';

export class Assetto {
	id: number;
	utente: Utente;
	nome_assetto: string;
	benchmark_ibrido: number;
	completato?: boolean;
	pubblicato?: boolean;
	voto_medio: number;

}
