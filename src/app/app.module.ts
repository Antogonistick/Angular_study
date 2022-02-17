import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { ProductTableComponent } from './product-table/product-table.component';
import { SomethingComponent } from './something/something.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {HttpService} from "./product-table/http.service";

@NgModule({
  declarations: [
    AppComponent,
    ProductTableComponent,
    SomethingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
