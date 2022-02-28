import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Child1Component } from './components/child1/child1.component';
import { Child2Component } from './components/child2/child2.component';
import { AlbumListComponent } from './components/album-list/album-list.component';
import { SearchPipeComponent } from './components/search-pipe/search-pipe.component';
import { ListfilterPipe } from './pipes/listfilter.pipe';
import { HighlightColorDirective } from './directives/highlight-color.directive';
import { ParentComponent } from './components/parent/parent.component';
import { HighlightComponent } from './components/highlight/highlight.component';
import { LoginComponent } from './components/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { RegisterComponent } from './components/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    Child1Component,
    Child2Component,
    AlbumListComponent,
    SearchPipeComponent,
    ListfilterPipe,
    HighlightColorDirective,
    ParentComponent,
    HighlightComponent,
    LoginComponent,
    PageNotFoundComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
