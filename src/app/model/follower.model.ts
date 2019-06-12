import {Utente} from './utente.model';
import {PostModel} from './post.model';

export class FollowerModel {
    id: number;
    utente: Utente;
    post: PostModel;
    follow: boolean;
}
