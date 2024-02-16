import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children:[
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then( m => m.HomePageModule)
      },  
      {
        path: 'about',
        loadChildren: () => import('../pages/about/about.module').then( m => m.AboutPageModule)
      },
      {
        path: 'list',
        loadChildren: () => import('../pages/list/list.module').then( m => m.ListPageModule)
      },
      {
        path: 'list/:id',
        loadChildren: () => import('../show/show.module').then( m => m.ShowPageModule)
      },
      {
        path: 'edit',
        loadChildren: () => import('../pages/edit/edit.module').then( m => m.EditPageModule)
      },
      {
        path: 'create',
        loadChildren: () => import('../pages/create/create.module').then( m => m.CreatePageModule)
      },

      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      },

    ]

  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
