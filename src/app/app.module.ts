import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { SidebarComponent } from './sidebar/sidebar.component';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCardModule} from '@angular/material/card';
import { InvoiceHeaderComponent } from './invoice-header/invoice-header.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { InvoiceComponent } from './invoice/invoice.component';
import { InvoiceListComponent } from './invoice-list/invoice-list.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    InvoiceHeaderComponent,
    InvoiceComponent,
    InvoiceListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatButtonToggleModule,
    MatCardModule,
    MatSidenavModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
