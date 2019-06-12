import {Utente} from './utente.model';
import {Assetto} from './assetto.model';

export class Vota {
	id: number;
	user: Utente;
	voto: number;
	asset: Assetto;
}