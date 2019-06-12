import { Injectable } from '@angular/core';
import{Assetto} from "../model/assetto.model";
import {Utente} from "../model/utente.model";
import {Observable, of} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class AssettoService{

    private utenza$: Utente[] = [{
        id: 1,
        username: "Romeo"
    },
        {
            id: 2,
            username: "Lorenzo"
        },
        {
            id: 3,
            username: "Francesco"
        }
    ];

    private migliori$: Assetto[] = [
        {
        id: 1,
        utente:  this.utenza$[0],
        nome_assetto: "myGamingAssett",
        benchmark_ibrido: 15000,
        voto_medio: 3
        },
        {
        id: 2,
        utente:  this.utenza$[1],
        nome_assetto: "PersonalHomeAssett",
        benchmark_ibrido: 15000,
        voto_medio: 5
        },
        {
        id: 3,
        utente: this.utenza$[2],
        nome_assetto: "myOfficialRenderingAssett",
        benchmark_ibrido: 21058,
        voto_medio: 4
        },
        {
        id: 4,
        utente: this.utenza$[2],
        nome_assetto: "TheAsusBeast",
        benchmark_ibrido: 14960,
        voto_medio: 5
        },
        {
        id: 5,
        utente: this.utenza$[1],
        nome_assetto: "code-working",
        benchmark_ibrido: 17000,
        voto_medio: 4
        }
    ];


    constructor(){}

    getAllBestRated(): Observable<Assetto[]>{
        return of(this.migliori$);
    }
}
