import {CategoriaModel} from './categoria.model';

export class PostModel {
    id?: number;
    titolo: string;
    descr: string;
    data: string;
    categoria: CategoriaModel;
    color: string;

    //manca Assetto per il momento
}
