import { Injectable } from '@angular/core';
import {CategoriaModel} from '../model/categoria.model';
import {Observable, of} from 'rxjs';
import {PostModel} from '../model/post.model';
import {Utente} from '../model/utente.model';
import {CommentiModel} from '../model/commenti.model';
import {FollowerModel} from '../model/follower.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {


   public totCommenti: number;
  //-------------------Array di category-----------------------------------
  private categories$: CategoriaModel[] = [{
    id: 1,
    nome: "Gaming",
    icon: "logo-game-controller-a"
  },{
    id: 2,
    nome: "Lavoro",
    icon: "filing"
  },{
    id: 3,
    nome: "Navigazione",
    icon: "globe"
  },{
    id: 4,
    nome: "Render-Grafico",
    icon: "podium"
  },{
    id: 5,
    nome: "Sistemi Linux",
    icon: "code-working"
  },
  ] ;
  //-------------------Array di category-----------------------------------

  //-------------------Utenti che hanno creato un post-----------------------------------
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
    },
  ];

  //-------------------Utenti che hanno creato un post-----------------------------------

  //-------------------Array di Post-----------------------------------
  private postAll$: PostModel[] =[{
    id: 1,
    titolo: "GTX 970 deprecata o ancora abile per giocare ?",
   descr: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
   data: "November-2010",
   categoria: this.categories$[0],
    utente: this.utenza$[0],
    color: "tertiary"
  },{
    id: 2,
    titolo: "CPU i9 7700k va bene con le trident? Se si a che frequenza?",
    descr: "t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
    data: "Dicember-2010",
    categoria: this.categories$[0],
    utente: this.utenza$[1],
    color: "light"
  },
    {
      id: 3,
      titolo: "Non ci siamo con la potenza guarda il mio asseto e ditemi se riesco a giocare a mhw?",
      descr: "t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
      data: "Agosto-2018",
      categoria: this.categories$[0],
      utente: this.utenza$[1],
      color: "tertiary"
    },
    {
      id: 4,
      titolo: "Scheda madre per i5 6700k ormai fuori produzione cosa mi consigliate di fare?",
      descr: "t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
      data: "September-2009",
      categoria: this.categories$[0],
      utente: this.utenza$[2],
      color: "light"
    },{
    id: 8,
    titolo: "Quanta potenza al livello di benchmark mi serve per poter lavorare sul pc?",
    descr: "en an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    data: "November-2010",
    categoria: this.categories$[1],
    utente: this.utenza$[0],
    color: "light"
  },{
    id: 5,
    titolo: "Sono un programmatore potete dirmi se l assetto in allegato puo andar bene ?",
    descr: "has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type ais simply dummy text of the printing and typesetting industry. Lorem Ipsum nd scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    data: "November-2019",
    categoria: this.categories$[1],
    utente: this.utenza$[1],
    color: "tertiary"
  },{
    id: 6,
    titolo: "Riesco a creare un assetto migliore di questo in allegato con piu potenza stessi soldi?",
    descr: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc..",
    data: "Genuary-2010",
    categoria: this.categories$[1],
    utente: this.utenza$[0],
    color: "light"
  },{
    id: 7,
    titolo: "con il mio assetto riesco a farci girare workbench?",
    descr: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    data: "May-2011",
    categoria: this.categories$[1],
    utente: this.utenza$[1],
    color: "light"
  },
  ];
  //-------------------Array di Post----------------------------------
  //-------------------Array di Commenti-----------------------------------
  private commenti$: CommentiModel[] = [{
    id: 1,
  post: this.postAll$[1],
  utente: this.utenza$[0],
  data: "12-06-2012",
  commento: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute ",
  },
    {
      id: 2,
      post: this.postAll$[1],
      utente: this.utenza$[1],
      data: "11-05-2012",
      commento: " ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud Lorem  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute ",
    },{
      id: 3,
      post: this.postAll$[1],
      utente: this.utenza$[2],
      data: "11-10-2012",
      commento: "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute ",
    },{
      id: 4,
      post: this.postAll$[0],
      utente: this.utenza$[0],
      data: "12-06-2012",
      commento: "Laoreet non curabitur gravida arcu ac tortor dignissim. Quis vel eros donec ac odio tempor orci dapibus ultrices. In hac habitasse platea dictumst quisque sagittis. At in tellus integer feugiat scelerisque varius morbi. Sit amet mattis vulputate enim nulla aliquet porttitor lacus. Vitae auctor eu augue ut lectus arcu bibendum at varius. Tempor orci eu ",
    },
    {
      id: 5,
      post: this.postAll$[0],
      utente: this.utenza$[1],
      data: "11-05-2012",
      commento: " feugiat scelerisque varius morbi. Sit amet mattis vulputate enim nulla aliquet porttitor lacus. Vitae auctor eu augue ut lectus arcu bibendum at varius. Tempor orci eu",
    },{
      id: 6,
      post: this.postAll$[4],
      utente: this.utenza$[2],
      data: "11-10-2012",
      commento: "eros donec ac odio tempor orci dapibus ultrices. In hac habitasse platea dictumst quisque sagittis. At in tellus integer feugiat scelerisque varius morbi. Sit amet mattis vulputate enim nulla aliquet porttitor lacus. Vitae auctor eu augue ut lectus arcu bibendum at varius. Tempor orci eu",
    },{
      id: 7,
      post: this.postAll$[5],
      utente: this.utenza$[1],
      data: "11-10-2012",
      commento: "eros donec ac odio tempor orci dapibus ultrices. In hac habitasse platea dictumst quisque sagittis. At in tellus integer feugiat scelerisque varius morbi. Sit amet mattis vulputate enim nulla aliquet porttitor lacus. Vitae auctor eu augue ut lectus arcu bibendum at varius. Tempor orci eu",
    },{
      id: 8,
      post: this.postAll$[5],
      utente: this.utenza$[2],
      data: "11-10-2012",
      commento: "eros donec ac odio tempor orci dapibus ultrices. In hac habitasse platea dictumst quisque sagittis. At in tellus integer feugiat scelerisque varius morbi. Sit amet mattis vulputate enim nulla aliquet porttitor lacus. Vitae auctor eu augue ut lectus arcu bibendum at varius. Tempor orci eu",
    },
];
  //-------------------Array di Follower o piu semplicemente i Preferiti-----------------------------------

  private followers$: FollowerModel[] = [{
    id: 1,
  utente: this.utenza$[0],
  post: this.postAll$[2],
  follow: true
  },{
    id: 2,
    utente: this.utenza$[0],
    post: this.postAll$[1],
    follow: true
  },{
    id: 3,
    utente: this.utenza$[0],
    post: this.postAll$[3],
    follow: true
  }
  ];



  //-------------------Array di Follower o piu semplicemente i Preferiti-----------------------------------


  //-------------------Array di Commenti-----------------------------------
  constructor() { }

  getAllCategories(): Observable<CategoriaModel[]>{
    return of(this.categories$);
  }

  getCategoryById(id: number):CategoriaModel{
    let search: CategoriaModel;
    for (let entry of this.categories$){
      if (entry.id === id){
        search = entry;
      }
    }
    return search;
  }

  //-------------metodi dei post from category
  getAllPostByCategory(id: number): Observable<PostModel[]> {
    let localPost: PostModel[] =[];

      for (let entry of this.postAll$){
        if (id === entry.categoria.id) {
          localPost.push(entry);
        }
      }
      return of (localPost);
  }
  //-------------metodi dei post from category

  //-------------------metodi di Detail Post

  getDetailPost(id: number): Observable<PostModel>{

    console.log(id);
    let singlePost: PostModel;

    for (let entry of this.postAll$) {
      if (id === entry.id){
        singlePost = entry;
        return of (singlePost);
      }
    }
  }

  insertIntoPost(mypost: PostModel){
    this.postAll$.push(mypost);
  }
  //-------------------metodi di Detail Post


  //-------------------metodi commenti by post


  getCommentByPost(idPost: number): Observable<CommentiModel[]> {
    let localComment: CommentiModel[] = [];

    for (let entry of this.commenti$) {

      if (idPost === entry.post.id) {
        localComment.push(entry);
      }

    }
    this.totCommenti = localComment.length;

    return of(localComment);
  }

  addComment(commento: CommentiModel){
    this.commenti$.push(commento);
  }

  //-------------------metodi commenti by post


  //-------------------metodi dei miei post inizializzo l utente il primo se non glielo passo in futuro passero quello autenticato

  getMyPost(sessionUser:Utente = this.utenza$[0]): Observable<PostModel[]>{
      let myPost$: PostModel[] = [];
      for(let entry of this.postAll$){
        if (entry.utente.id === sessionUser.id){
          myPost$.push(entry);
        }
      }
      return of(myPost$);
  }

getUtenteSession(sessionUser:Utente = this.utenza$[0]): Utente{
    return sessionUser;
}

            //follower

  getMyFollower(sessionUser:Utente = this.utenza$[0]): Observable<PostModel[]>{
    let myfollower: PostModel[] = [];
    for (let entry of this.followers$){
      if (entry.utente.id === sessionUser.id){
        myfollower.push(entry.post);
      }
    }
    return of(myfollower);
  }
  //-------------------metodi dei miei post

}
