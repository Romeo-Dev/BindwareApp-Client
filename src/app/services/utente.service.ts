import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {Utente} from '../model/utente.model';
import {Storage} from '@ionic/storage';




export interface Account {
  username: string;
  password: string;

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

}
