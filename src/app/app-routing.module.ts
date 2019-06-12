import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'tabs', pathMatch: 'full' },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'tabs', loadChildren: './pages/tabs/tabs.module#TabsPageModule' },

  { path: 'profilo', loadChildren: './pages/profilo/profilo.module#ProfiloPageModule' },
  { path: 'imieipost', loadChildren: './pages/imieipost/imieipost.module#ImieipostPageModule' },
  { path: 'rivenditore', loadChildren: './pages/rivenditore/rivenditore.module#RivenditorePageModule' },

  { path: 'post', loadChildren: './pages/post/post.module#PostPageModule' },
  { path: 'postdetail', loadChildren: './pages/postdetail/postdetail.module#PostdetailPageModule' },
  { path: 'dummy', loadChildren: './pages/dummy/dummy.module#DummyPageModule' },
  { path: 'registrazione', loadChildren: './pages/registrazione/registrazione.module#RegistrazionePageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
