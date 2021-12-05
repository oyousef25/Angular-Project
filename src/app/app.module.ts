import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContentCardComponent } from './content-card/content-card.component';
import { ContentListComponent } from './content-list/content-list.component';
import { ContentFilterPipe } from './content-filter.pipe';
import {FormsModule} from "@angular/forms";
import { ContentExistPipe } from './content-exist.pipe';
import { UnderlineDirective } from './underline.directive';
import { CreateContentComponent } from './create-content/create-content.component';
import { MessagesComponent } from './messages/messages.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatDialog, MatDialogModule} from "@angular/material/dialog";
import { CreateDialogComponent } from './create-dialog/create-dialog.component';
import { NotFoundComponent } from './not-found/not-found.component';
import {RouterModule} from "@angular/router";
import { ContentDetailComponent } from './content-detail/content-detail.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";
import {InMemoryDataService} from "./services/in-memory-data.service";
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    ContentCardComponent,
    ContentListComponent,
    ContentFilterPipe,
    ContentExistPipe,
    UnderlineDirective,
    CreateContentComponent,
    MessagesComponent,
    CreateDialogComponent,
    NotFoundComponent,
    ContentDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatDialogModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, {
        dataEncapsulation: false,
        delay: 1000
    }),
    RouterModule.forRoot([
      {
        path: 'content/:id',
        component: ContentDetailComponent
      },
      {
        path: 'content',
        component: ContentListComponent
      },
      {
        path: '',
        component: AppComponent
      },
      {
        path: '**',
        component: NotFoundComponent
      }

    ]),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule{ }
