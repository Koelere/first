import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';
import {SharedService} from './shared.service';

import { AppComponent } from './app.component';
import { EntryComponent } from './entry/entry.component';
import { DisplayComponent } from './display/display.component';

const name:Routes = [
  {path:'entry',component:EntryComponent},
  {path:'display',component:DisplayComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    EntryComponent,
    DisplayComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(name),FormsModule,
    FormsModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
