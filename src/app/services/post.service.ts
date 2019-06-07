import { Injectable } from '@angular/core';
import {CategoriaModel} from '../model/categoria.model';
import {Observable, of} from 'rxjs';
import {PostModel} from '../model/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  //-------------------Array di category-----------------------------------
  private categories$: CategoriaModel[] = [{
    nome: "Gaming",
    icon: "logo-game-controller-a"
  },{
    nome: "Lavoro",
    icon: "filing"
  },{
    nome: "Navigazione",
    icon: "globe"
  },{
    nome: "Render-Grafico",
    icon: "podium"
  },{
    nome: "Sistemi Linux",
    icon: "code-working"
  },
  ] ;
  //-------------------Array di category-----------------------------------

  //-------------------Array di Post Gaming-----------------------------------
  private postGaming$: PostModel[] =[{
    titolo: "GTX 970 deprecata o ancora abile per giocare ?",
   descr: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
   data: "November-2010",
   categoria: this.categories$[0],
    color: "tertiary"
  },{
    titolo: "CPU i9 7700k va bene con le trident? Se si a che frequenza?",
    descr: "t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
    data: "Dicember-2010",
    categoria: this.categories$[0],
    color: "light"
  },
    {
      titolo: "Non ci siamo con la potenza guarda il mio asseto e ditemi se riesco a giocare a mhw?",
      descr: "t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
      data: "Agosto-2018",
      categoria: this.categories$[0],
      color: "tertiary"
    },
    {
      titolo: "Scheda madre per i5 6700k ormai fuori produzione cosa mi consigliate di fare?",
      descr: "t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
      data: "September-2009",
      categoria: this.categories$[0],
      color: "light"
    },

  ];
  //-------------------Array di Post Gaming-----------------------------------


  //-------------------Array di Post Lavoro-----------------------------------
  private postLavoro$: PostModel[]=[{
    titolo: "Quanta potenza al livello di benchmark mi serve per poter lavorare sul pc?",
    descr: "en an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    data: "November-2010",
    categoria: this.categories$[1],
    color: "light"
  },{
    titolo: "Sono un programmatore potete dirmi se l assetto in allegato puo andar bene ?",
    descr: "has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type ais simply dummy text of the printing and typesetting industry. Lorem Ipsum nd scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    data: "November-2019",
    categoria: this.categories$[1],
    color: "tertiary"
  },{
    titolo: "Riesco a creare un assetto migliore di questo in allegato con piu potenza stessi soldi?",
    descr: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc..",
    data: "Genuary-2010",
    categoria: this.categories$[1],
    color: "light"
  },{
    titolo: "con il mio assetto riesco a farci girare workbench?",
    descr: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    data: "May-2011",
    categoria: this.categories$[1],
    color: "light"
  },
  ];
  //-------------------Array di Post Lavoro-----------------------------------
  constructor() { }



  getAllCategories(): Observable<CategoriaModel[]>{
    return of(this.categories$);
  }

  //-------------metodi dei post from category
  getAllPostByCategory(name: string): Observable<PostModel[]> {
    if (name === this.categories$[0].nome) {
      console.log("categoria selezionata " + this.categories$[0].nome);
      return this.getAllPostGaming();
    } else if (name == this.categories$[1].nome) {
      console.log("categoria selezionata " + this.categories$[1].nome);
      return this.getAllPostLavoro();
      /* else if che continuo ma faccio solo sti 2 per praticita poiche tale metodo sara sostituito
      con una chiamata rest che filtrera i post per categoria*/
    }
  }
  getAllPostGaming(): Observable<PostModel[]>{
    return of(this.postGaming$);
  }
  getAllPostLavoro(): Observable<PostModel[]>{
    return of(this.postLavoro$);
  }
  //-------------metodi dei post from category
}
