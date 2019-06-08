export class Utente {
    id: number;
    username: string;
    email?: string;
    password?: string;

    constructor(u:string,pas:string){
        this.username = u;
        this.password = pas;
    }
}
