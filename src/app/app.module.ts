import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContentCardComponent } from './content-card/content-card.component';
import { ContentListComponent } from './content-list/content-list.component';
import { ContentFilterPipe } from './content-filter.pipe';
import {FormsModule} from "@angular/forms";
import { ContentExistPipe } from './content-exist.pipe';

// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    ContentCardComponent,
    ContentListComponent,
    ContentFilterPipe,
    ContentExistPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule{ }
