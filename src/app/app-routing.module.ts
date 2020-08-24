import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/lobby' },
  {
    path: 'lobby',
    loadChildren: () =>
      import('./pages/lobby.module').then((m) => m.LobbyModule),
  },
  {
    path: 'everything',
    loadChildren: () =>
      import('./pages/everything.module').then((m) => m.EverythingModule),
  },
  {
    path: 'around',
    loadChildren: () =>
      import('./pages/around.module').then((m) => m.AroundModule),
  },
  {
    path: 'business',
    loadChildren: () =>
      import('./pages/business.module').then((m) => m.BusinessModule),
  },
  {
    path: 'mother',
    loadChildren: () =>
      import('./pages/mother.module').then((m) => m.MotherModule),
  },
  {
    path: 'nanny',
    loadChildren: () =>
      import('./pages/nanny.module').then((m) => m.NannyModule),
  },
  {
    path: 'store',
    loadChildren: () =>
      import('./pages/store.module').then((m) => m.StoreModule),
  },
  {
    path: 'view',
    loadChildren: () =>
      import('./pages/view.module').then((m) => m.ViewModule),
  },
  {
    path: 'line',
    loadChildren: () =>
      import('./pages/line.module').then((m) => m.LineModule),
  },
  {
    path: 'unknown',
    loadChildren: () =>
      import('./pages/unknown.module').then((m) => m.UnknownModule),
  },
  {
    path: 'neighbor',
    loadChildren: () =>
      import('./pages/neighbor.module').then((m) => m.NeighborModule),
  },
  {
    path: 'contact-us',
    loadChildren: () =>
      import('./pages/contact-us.module').then((m) => m.ContactUsModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
