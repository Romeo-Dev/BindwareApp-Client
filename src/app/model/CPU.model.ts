import {ComponentModel} from './component.model';
import {Utente} from './utente.model';

export class CPUModel extends ComponentModel{
    socket: string;
    core: number;
    frequenza: string;
    wattaggio: number;
    benchmark_cpu?: number;


    constructor(id: number, marca: string, serie: string, modello: string, immagine: String, rivenditore: Utente, prezzo: number, socket: string, core: number, frequenza: string, wattaggio: number, benchmark_cpu: number) {
        super(id, marca, serie, modello, immagine, rivenditore, prezzo);
        this.socket = socket;
        this.core = core;
        this.frequenza = frequenza;
        this.wattaggio = wattaggio;
        this.benchmark_cpu = benchmark_cpu;
    }
}
