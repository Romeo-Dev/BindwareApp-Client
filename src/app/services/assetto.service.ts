import { Injectable } from '@angular/core';
import{Assetto} from "../model/assetto.model";
import {Utente} from "../model/utente.model";
import {Observable, of} from "rxjs";
import {ComponentModel} from "../model/component.model";
import {RAMModel} from "../model/RAM.model";
import {CPUModel} from "../model/CPU.model";
import {MOBO} from "../model/mobo.model";
import {GPU} from "../model/gpu.model";

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
    // Array di migliori assetti
    private migliori$: Assetto[] = [
        {
            id: 0,
            famiglia_cpu: "intel",
            utente:  this.utenza$[0],
            nome_assetto: "myGamingAssett",
            benchmark_ibrido: 15000,
            voto_medio: 5,
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



    // Array di componenti per fabbricare assetti
    private listOfComponent$: ComponentModel[] = [
        new RAMModel(1,"Corsair","Memory d4 3000 16gb c15 corsair ven k2","CMK16GX4M2B3000C15","",this.rivenditori$[0],80,"DDR4",16,"3000Mhz"),
        new RAMModel(2,"G.Skill","Trident Z RGB 16GB DDR4","202715","",this.rivenditori$[1],110,"DDR4",16,"3200Mhz"),
        new CPUModel(11,"AMD","5 2600","YD2600BBAFBOX","",this.rivenditori$[1],140,"3.4 GHz",100,"1500",95,13006),
        new CPUModel(12,"Intel","i7 6900k","RGB600BOX","",this.rivenditori$[1],255,"4.0 Ghz",100,"3000",98, 14000),
        new GPU(12,"SAPPHIRE","Sapphire Radeon VII","ATX","",this.rivenditori$[0],688,650,16,16500),
        new GPU(14,"MSI","Radeon RX 570 ARMOR 8G OC","ATX","",this.rivenditori$[0],171.50,450,8,11500),
        new MOBO(31,"Asus","PRIME B450-PLUS","AMD4","",this.rivenditori$[0],99,"ATX","AMD","AM4","DDR4",4),
        new MOBO(32,"Gigabyte","B450 AORUS PRO","AMD4","",this.rivenditori$[0],121.98,"ATX","AMD","AM4","DDR4",4),
    ];

    //--------------------Array per la famiglia dell assetto sempre nella vista my asseets

    private famiglia: string[] = ['Intel','Amd'];

    //--------------------Array per la famiglia dell assetto sempre nella vista my asseets


    //---------------------Array dei miei assetti

    private myassets$: Assetto[] = [{
        id: 0,
        famiglia_cpu: this.famiglia[0],
        utente:  this.utenza$[0],
        nome_assetto: "Thunder Bird 5000GT",
        benchmark_ibrido: 15000,
        voto_medio: 5,
       cpu: <CPUModel>this.listOfComponent$[3],
        mobo: <MOBO>this.listOfComponent$[7],
        ram: <RAMModel>this.listOfComponent$[0],
        gpu: <GPU>this.listOfComponent$[5],
        pubblicato: true,
        completato: true
    },{
        id: 1,
    famiglia_cpu: this.famiglia[1],
    utente: this.utenza$[0],
    nome_assetto: "Laboratorio scuola Superiore",
    completato: false,
    pubblicato: false,
        cpu:  <CPUModel>this.listOfComponent$[3],
        ram: <RAMModel>this.listOfComponent$[0],
        gpu: <GPU>this.listOfComponent$[5]
    },{
        id: 2,
        famiglia_cpu: this.famiglia[0],
        utente: this.utenza$[0],
        nome_assetto: "Assetto da casa con Navigazione",
        completato: true,
        pubblicato: false,
        ram: <RAMModel>this.listOfComponent$[1],
        mobo: <MOBO>this.listOfComponent$[6]

    }

    ];

    //---------------------Array dei miei assetti


    //-----------------Utility

    static initWizard(ass: Assetto): void{
        let money: number = 0;
        let watt: number = 0;
        let bench: number = 0;

        //calcolo il wattaggio
        if (ass.cpu != undefined && ass.cpu.wattaggio != undefined) watt += ass.cpu.wattaggio;
        if (ass.gpu != undefined && ass.gpu.wattaggio != undefined) watt += (ass.gpu.wattaggio + 100);
        //calcolo bench
        if (ass.cpu != undefined && ass.cpu.benchmark_cpu != undefined) bench += ass.cpu.benchmark_cpu;
        if (ass.gpu != undefined && ass.gpu.benchmark_gpu != undefined) bench += ass.gpu.benchmark_gpu;
        //calcolo i money
        if (ass.cpu != undefined && ass.cpu.prezzo != undefined) money += ass.cpu.prezzo;
        if (ass.mobo != undefined && ass.mobo.prezzo != undefined) money += ass.mobo.prezzo;
        if (ass.ram != undefined && ass.ram.prezzo != undefined) money += ass.ram.prezzo;
        if (ass.gpu != undefined && ass.gpu.prezzo != undefined) money += ass.gpu.prezzo;
        if (ass.disco != undefined && ass.disco.prezzo != undefined) money += ass.disco.prezzo;
        if (ass.alimentatore != undefined && ass.alimentatore.prezzo != undefined) money += ass.alimentatore.prezzo;
        if (ass.computercase != undefined && ass.computercase.prezzo != undefined) money += ass.computercase.prezzo;

        // assegnamento
        ass.wattaggio = watt;
        ass.benchmark_ibrido = bench;
        ass.prezzotot = money;
    }

    //-----------------Utility




    constructor(){}



    //-----------------metodi della pagina Assetto

    getAssetsByUtenteSession(utente: Utente = this.utenza$[0]): Observable<Assetto[]>{
        let localAssetti: Assetto[] = [];

        for (let entry of this.myassets$){
            if (entry.utente === utente){
                localAssetti.push(entry);
            }
        }
        return  of (localAssetti);

    }



    getFamily(): Observable<string[]>{
        return of(this.famiglia);
    }

    getUtenteSession(user: Utente = this.utenza$[0]): Utente{
            return user;
    }


    addAsset(newAsset: Assetto) {
            this.myassets$.push(newAsset);
    }

    countAssetByUser(utente: Utente = this.utenza$[0]): number{

        let countAssets = 0;
        for (let entry of this.myassets$){
            if (entry.utente === utente){
                countAssets++;
            }
        }
        return countAssets;
    }

    //-----------------metodi della pagina Assetto







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


    deleteAssettoCurrent(systemAsset: Assetto):void {
        console.log('prima del remove assetto '+this.myassets$.length)
        this.myassets$ = this.myassets$.filter(item => item.id != systemAsset.id)
        console.log('dopo del remove assetto '+this.myassets$.length);
    }

    removePartFromAsset(systemAsset: Assetto, part: string): Assetto {

        switch (part) {

            case 'CPU':{
                for (let current of this.myassets$){
                    if (current.id === systemAsset.id){
                        delete current.cpu;
                        delete systemAsset.cpu;
                    }
                }

                break;
            }
            case 'MOBO':{
                for (let current of this.myassets$){
                    if (current.id === systemAsset.id){
                        delete current.mobo;
                        delete systemAsset.mobo;
                    }
                }

                break;
            }
            case 'RAM':{
                for (let current of this.myassets$){
                    if (current.id === systemAsset.id){
                        delete current.ram;
                        delete systemAsset.ram;
                    }
                }

                break;
            }
            case 'GPU':{
                for (let current of this.myassets$){
                    if (current.id === systemAsset.id){
                        delete current.gpu;
                        delete systemAsset.gpu;
                    }
                }

                break;
            }
            case 'DISCO':{
                for (let current of this.myassets$){
                    if (current.id === systemAsset.id){
                        delete current.disco;
                        delete systemAsset.disco;
                    }
                }

                break;
            }
            case 'ALIM':{
                for (let current of this.myassets$){
                    if (current.id === systemAsset.id){
                        delete current.alimentatore;
                        delete systemAsset.alimentatore;
                    }
                }

                break;
            }
            case 'CASE':{
                for (let current of this.myassets$){
                    if (current.id === systemAsset.id){
                        delete current.computercase;
                        delete systemAsset.computercase;
                    }
                }

                break;
            }

        }
        AssettoService.initWizard(systemAsset);
        return systemAsset;
    }
}
