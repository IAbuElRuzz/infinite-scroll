import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutComponent } from './shared/layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./components/listview/listview.module').then(
            (m) => m.ListviewModule
          )
      },
      {
        path: 'detail/:name',
        loadChildren: () =>
          import('./components/detailview/detailview.module').then(
            (m) => m.DetailviewModule
          )
      }
    ]
  },

  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
