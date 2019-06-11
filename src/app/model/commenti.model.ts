import {Utente} from './utente.model';
import {PostModel} from './post.model';

export class CommentiModel {
    id: number;
    post: PostModel;
    utente: Utente;
    data: string;
    commento: string;
}
