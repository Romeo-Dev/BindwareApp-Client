import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {Utente} from '../model/utente.model';
import {Storage} from '@ionic/storage';
import {AUTH_TOKEN, UTENTE_STORAGE} from "../constants";
import {HttpResponse} from "@angular/common/http";




export interface Account {
  username: string;
  password: string;
  ruolo: string;
}

@Injectable({
  providedIn: 'root'
})
export class UtenteService {
  // manca token e gestione con il server
  private loggedIn$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private utente$: BehaviorSubject<Utente> = new BehaviorSubject<Utente>({} as Utente);
  constructor(private storage: Storage) { }

  login(account: Account): boolean{
    if (account.username === 'Romeo' && account.password ==='romeo'){
      //sostituire in futuro con chiamata rest che controlla il token
      this.storage.set('UTENTE_STORAGE', account);
      this.utente$.next(account);
      this.loggedIn$.next(true);
      return true;
    }else {
      console.log('errore login utente non registrato credenziali sbagliate');
      return false;
    }
}

  getUtente(): BehaviorSubject<Utente> {
    return this.utente$;
  }

  isLogged(): Observable<boolean> {
    return this.loggedIn$.asObservable();
  }


  updateProfilo(nuovoUtente: Utente): void{/*Observable<Utente> {
    return this.http.post<Utente>(URL.UPDATE_PROFILO, nuovoUtente, {observe: 'response'}).pipe(
        map((resp: HttpResponse<Utente>) => {
          // Aggiornamento dell'utente nello storage.
          // Utente memorizzato nello storage per evitare chiamata REST quando si vuole modificare il profilo
          // e se l'utente chiude la app e la riapre i dati sono gia' presenti
          this.storage.set(UTENTE_STORAGE, resp.body);
          // update dell'observable dell'utente
          this.utente$.next(resp.body);
          return resp.body;
        }));*/
  }

  logout() {
    //this.authToken = null;
    this.loggedIn$.next(true);
    this.storage.remove(AUTH_TOKEN);
    this.storage.remove(UTENTE_STORAGE);

    // Nessuna chiamata al server perche' JWT e' stateless quindi non prevede alcun logout.
    // Per gestirlo si dovrebbe fare lato server una blacklist.
  }

}
