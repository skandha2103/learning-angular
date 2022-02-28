import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumListComponent } from './components/album-list/album-list.component';
import { HighlightComponent } from './components/highlight/highlight.component';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ParentComponent } from './components/parent/parent.component';
import { RegisterComponent } from './components/register/register.component';
import { SearchPipeComponent } from './components/search-pipe/search-pipe.component';

const routes: Routes = [
  {
    path: 'login', component: LoginComponent,
    // children:[
    //   {path:'register', component: RegisterComponent}
    // ]
  },
  {path:'register', component: RegisterComponent},
  {
    path:'communication', component:ParentComponent
  },
  {
    path:'http', component:AlbumListComponent
  },
  {
    path:'pipes', component:SearchPipeComponent
  },
  {
    path:'directive', component:HighlightComponent
  },
  {
    path:'',redirectTo:'login', pathMatch:'full'
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
