import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EpisodeComponent } from './episode/episode.component';
import { DocumentsComponent } from './documents/documents.component';
import { SuspectListComponent } from './suspect-list/suspect-list.component';
import { EvidenceComponent } from './evidence/evidence.component';
import { MessagesComponent } from './messages/messages.component';
import { AuthGuard } from './_guards/auth.guard';

export const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {
        path: '',
        runGuardsAndResolvers: 'always',
        canActivate: [AuthGuard],
        children: [
            {path: 'episode', component: EpisodeComponent},
            {path: 'documents', component: DocumentsComponent},
            {path: 'suspects', component: SuspectListComponent},
            {path: 'evidence', component: EvidenceComponent},
            {path: 'messages', component: MessagesComponent},
        ]
    },

    {path: '**', redirectTo: '', pathMatch: 'full'}
];
