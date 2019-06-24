import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {IonicStorageModule} from '@ionic/storage';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {ModalpostPageModule} from './pages/modalpost/modalpost.module';
import {ModalrivenditorePageModule} from './pages/modalrivenditore/modalrivenditore.module';
import {ModalMidCommentPageModule} from './pages/modal-mid-comment/modal-mid-comment.module';
import {ModalMidAssetPageModule} from './pages/modal-mid-asset/modal-mid-asset.module';
import {ModalsystembuilderPageModule} from './pages/modalsystembuilder/modalsystembuilder.module';
import {ModalMidComponentPartPageModule} from './pages/modal-mid-component-part/modal-mid-component-part.module';

// Carico il loader delle translate

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule,
    ModalpostPageModule,
    ModalrivenditorePageModule,
      ModalsystembuilderPageModule,
      ModalMidCommentPageModule,
      ModalMidAssetPageModule,
    ModalMidComponentPartPageModule,
    IonicModule.forRoot(),
      HttpClientModule,
    IonicStorageModule.forRoot({
      name: '__mydb',
      driverOrder: ['indexeddb', 'sqlite', 'websql']
    }),
  TranslateModule.forRoot({
    loader: {
      provide: TranslateLoader,
      useFactory: (createTranslateLoader),
      deps: [HttpClient]
    }
  }),
    AppRoutingModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
