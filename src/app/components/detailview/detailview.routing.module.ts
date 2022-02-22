import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailviewComponent } from '../detailview/detailview.component';

const routes: Routes = [
  {
    path: '',
    component: DetailviewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailviewRoutingModule {}
