import { Routes } from '@angular/router';
import { MatchesListComponent } from './matches/matches-list.component/matches-list.component';

export const routes: Routes = [
  { path: '', redirectTo: '/matches', pathMatch: 'full' }, // default route
  { path: 'matches', component: MatchesListComponent },
//   { path: 'bets', component: BetsComponent },
//   { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: '/matches' } // wildcard route
];
