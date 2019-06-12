import {ComponentModel} from './component.model';
import {Utente} from './utente.model';

export class CPUModel extends ComponentModel{
    socket: string;
    core: number;
    frequenza: string;
    wattaggio: number;
    benchmark_cpu: number;

    constructor(idc:number,marc: string,serieC: string,mod: string,riv: Utente,sim:number,freq:string,wat:number,bench:number,sok:string){
        super(idc,marc,serieC,mod,riv,sim);
        this.socket = sok;
        this.frequenza = freq;
        this.wattaggio = wat;
        this.benchmark_cpu = bench;
        }
}
