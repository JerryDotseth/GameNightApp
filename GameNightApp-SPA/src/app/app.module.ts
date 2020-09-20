import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import {AuthService} from './_services/auth.service';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { ErrorInterceptorProvider } from './_services/error.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListsComponent } from './lists/lists.component';
import { MessagesComponent } from './messages/messages.component';
import { SuspectListComponent } from './suspect-list/suspect-list.component';
import { EvidenceComponent } from './evidence/evidence.component';
import { DocumentsComponent } from './documents/documents.component';
import { MemberListComponent } from './member-list/member-list.component';
import { EpisodeComponent } from './episode/episode.component';
import { appRoutes } from './routes';

@NgModule({
  declarations: [							
    AppComponent,
    NavComponent,
    HomeComponent,
    RegisterComponent,
      ListsComponent,
      MessagesComponent,
      SuspectListComponent,
      EvidenceComponent,
      DocumentsComponent,
      MemberListComponent,
      EpisodeComponent
   ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    AuthService,
    ErrorInterceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
