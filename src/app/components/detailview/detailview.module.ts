import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailviewComponent } from '../detailview/detailview.component';
import { DetailviewRoutingModule } from './detailview.routing.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [DetailviewComponent],
  imports: [CommonModule, DetailviewRoutingModule, ReactiveFormsModule],
  providers: []
})
export class DetailviewModule {}
