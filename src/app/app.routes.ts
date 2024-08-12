import { Routes } from '@angular/router';
import { BoardgamesComponent } from './boardgames/boardgames.component';

export const routes: Routes = [
  // { path: 'boardgames', component: BoardgamesComponent },
  { path: '', component: BoardgamesComponent },
  // { path: '**', redirectTo: '/boardgames' },
];
