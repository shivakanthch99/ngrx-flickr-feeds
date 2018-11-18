import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { MaterialModule } from './modules/material.module';
import { FeedComponent } from './components/feed/feed.component';
import { FeedDetailsComponent } from './components/feed-details/feed-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgMasonryGridModule } from 'ng-masonry-grid';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { FlexLayoutModule } from '@angular/flex-layout';
import { feedReducer } from './reducers/feed.reducer';
import { FeedEffects } from './effects/feed.effect';
import { FeedService } from './services/feed.service';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserModule,
        BrowserAnimationsModule,
        RouterTestingModule, 
        MaterialModule,
        FormsModule,
        ReactiveFormsModule,
        NgMasonryGridModule,
        HttpClientModule,
        HttpClientJsonpModule,
        StoreModule.forRoot({feedStore: feedReducer}),
        EffectsModule.forRoot([FeedEffects])
      ],
      declarations: [
        AppComponent, 
        FeedComponent,
        FeedDetailsComponent
      ],
      providers: [FeedService],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'FlickrFeeds'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('FlickrFeeds');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('span').textContent).toContain('Welcome to Flickr public Feeds!');
  });
});
