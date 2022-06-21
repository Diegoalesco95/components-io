import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';
import { ListPageModule } from '../list/list.module';
import { CheckboxPageModule } from '../checkbox/checkbox.module';

const routes: Routes = [
  { path: '', redirectTo: '/tabs/account', pathMatch: 'full' },
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'account',
        loadChildren: () =>
          import('src/app/pages/avatar/avatar.module').then(
            (m) => m.AvatarPageModule
          ),
      },
      {
        path: 'contact',
        loadChildren: () =>
          import('src/app/pages/list/list.module').then(
            (m) => m.ListPageModule
          ),
      },
      {
        path: 'settings',
        loadChildren: () =>
          import('src/app/pages/checkbox/checkbox.module').then(
            (m) => m.CheckboxPageModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
