import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './modules/material.module';
import { NgMasonryGridModule } from 'ng-masonry-grid';

import { feedReducer } from './reducers/feed.reducer';
import { FeedEffects } from './effects/feed.effect';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FeedComponent } from './components/feed/feed.component';
import { FeedDetailsComponent } from './components/feed-details/feed-details.component';
import { FeedService } from './services/feed.service';

@NgModule({
  declarations: [
    AppComponent,
    FeedComponent,
    FeedDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MaterialModule,
    NgMasonryGridModule,
    HttpClientModule,
    HttpClientJsonpModule,
    StoreModule.forRoot({feedStore: feedReducer}),
    EffectsModule.forRoot([FeedEffects])
  ],
  providers: [FeedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
