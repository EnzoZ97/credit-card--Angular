import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AddCardComponent } from './add-card/add-card.component';
import { CardListComponent } from './add-card/card-list/card-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TitleComponent } from './title/title.component';

@NgModule({
  declarations: [
    AppComponent,
    AddCardComponent,
    CardListComponent,
    TitleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
