import {CategoriaModel} from './categoria.model';
import {Utente} from './utente.model';

export class PostModel {
    id?: number;
    titolo: string;
    descr: string;
    data: string;
    categoria: CategoriaModel;
    color?: string;
    utente: Utente;

    //manca Assetto per il momento
}
