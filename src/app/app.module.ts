import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';

import { LayoutModule } from './shared/layout/layout.module';
import { ListviewModule } from './components/listview/listview.module';
import { DetailviewModule } from './components/detailview/detailview.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

    HttpClientJsonpModule,
    LayoutModule,
    ListviewModule,
    DetailviewModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
