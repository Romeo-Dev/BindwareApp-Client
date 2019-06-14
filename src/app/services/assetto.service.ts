import { Injectable } from '@angular/core';
import{Assetto} from "../model/assetto.model";
import {Utente} from "../model/utente.model";
import {Observable, of} from "rxjs";
import {ComponentModel} from "../model/component.model";
import {RAMModel} from "../model/RAM.model";
import {CPUModel} from "../model/CPU.model";
import {MOBO} from "../model/mobo.model";
import {GPU} from "../model/gpu.model";
import {Alimentatore} from "../model/alimentatore.model";
import {Disco} from "../model/disco.model";
import {Case} from "../model/case.model";
import {PostModel} from "../model/post.model";

@Injectable({
    providedIn: 'root'
})
export class AssettoService{


    // array di utenti
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


    //array di utenti rivenditori
    private rivenditori$: Utente[] =[{
        id: 20,
        username: "Amazon.it",
        ruolo: "rivenditore"
    },{
        id: 21,
        username: "Assetta Ind.",
        ruolo: "rivenditore"
    },{
        id: 22,
        username: "LorenzaGatti15",
        ruolo: "normale"
    },
    ];

    // componenti per l'assetto di prova
    private ram$: RAMModel = new RAMModel(1,"Corsair","Memory d4 3000 16gb c15 corsair ven k2","CMK16GX4M2B3000C15","assets/img/assetto1/ram.jpg",this.rivenditori$[0], 80,"DDR4",16,"3000Mhz");
    private cpu$: CPUModel = new CPUModel(12,"Intel","i7 6900k","RGB600BOX","assets/img/assetto1/cpu.jpg",this.rivenditori$[1],255,"4.0 Ghz",100,"3000",95,13000);
    private mobo$: MOBO = new MOBO(13,"Asus","ROG","MAXIMUS XI HERO","assets/img/assetto1/mobo.jpg",this.rivenditori$[1],302,"ATX", "Intel Z390", "LGA 1151", "DDR4 SDRAM", 4);
    private gpu$: GPU = new GPU (14,"Asus","ROG","STRIX GTX1050","assets/img/assetto1/gpu.jpg",this.rivenditori$[1],170, 70, 2, 111170);
    private alim$: Alimentatore = new Alimentatore(15,"Corsair","vs","550","assets/img/assetto1/alim.jpg",this.rivenditori$[1],48,550,"80 PLUS","ATX");
    private disco$: Disco = new Disco(16,"WD", "WD10EZEX","WD10EZEX-60WN4A0","assets/img/assetto1/disco.jpg",this.rivenditori$[1],37,1000,"750 MB",1);
    private case$: Case = new Case(17, "Corsair", "SPEC Omega", "CC-9011119-WW","assets/img/assetto1/case.jpg", this.rivenditori$[1], 78, "bianco", 7.56, "mid-tower");



    // Array di migliori assetti
    private migliori$: Assetto[] = [
        {
        id: 0,
        famiglia_cpu: "intel",
        utente:  this.utenza$[0],
        nome_assetto: "myGamingAssett",
        benchmark_ibrido: 15000,
        voto_medio: 5,
        cpu: this.cpu$,
        mobo:this.mobo$,
        ram:this.ram$,
        gpu:this.gpu$,
        alimentatore:this.alim$,
        disco:this.disco$,
        computercase:this.case$
        },
        {
        id: 1,
            famiglia_cpu: "amd",
        utente:  this.utenza$[1],
        nome_assetto: "PersonalHomeAssett",
        benchmark_ibrido: 15000,
        voto_medio: 5
        },
        {
        id: 2,
            famiglia_cpu: "amd",
        utente: this.utenza$[2],
        nome_assetto: "myOfficialRenderingAssett",
        benchmark_ibrido: 21058,
        voto_medio: 4
        },
        {
        id: 3,
            famiglia_cpu: "intel",
        utente: this.utenza$[2],
        nome_assetto: "TheAsusBeast",
        benchmark_ibrido: 14960,
        voto_medio: 4
        },
        {
        id: 4,
            famiglia_cpu: "intel",
        utente: this.utenza$[1],
        nome_assetto: "code-working",
        benchmark_ibrido: 17000,
        voto_medio: 3
        }
    ];


    constructor(){}

    getAllBestRated(): Observable<Assetto[]>{
        return of(this.migliori$);
    }

    getDetailAssett(id: number): Observable<Assetto>{

        let singleAssett: Assetto;

        for (let entry of this.migliori$) {
            if (id === entry.id){
                singleAssett = entry;
                return of (singleAssett);
            }

        }

    }

    getDetailComponente(id: number, idassetto: number): Observable<ComponentModel> {

        let singleComponent: ComponentModel;
        let singleAssetto: Assetto;

        for (let entry of this.migliori$) {
            if (idassetto === entry.id) {
                singleAssetto = entry;
            }
        }

            if (id === singleAssetto.cpu.id) {
                singleComponent = singleAssetto.cpu;
                return of(singleComponent);
            }
            if(id === singleAssetto.mobo.id) {
                singleComponent = singleAssetto.mobo;
                return of(singleComponent);
            }
        if(id === singleAssetto.ram.id) {
            singleComponent = singleAssetto.ram;
            return of(singleComponent);
        }
        if(id === singleAssetto.gpu.id) {
            singleComponent = singleAssetto.gpu;
            return of(singleComponent);
        }
        if(id === singleAssetto.alimentatore.id) {
            singleComponent = singleAssetto.alimentatore;
            return of(singleComponent);
        }
        if(id ===singleAssetto.disco.id) {
            singleComponent = singleAssetto.disco;
            return of(singleComponent);
        }
        if(id === singleAssetto.computercase.id) {
            singleComponent = singleAssetto.computercase;
            return of(singleComponent);
        }

    }
}
