import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListviewComponent } from './listview.component';

const routes: Routes = [
  {
    path: '',
    component: ListviewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListviewRoutingModule {}
