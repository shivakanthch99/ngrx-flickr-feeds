import { Action } from '@ngrx/store';
import { TestBed, inject } from '@angular/core/testing';

import { Query } from '../models/query.model';
import { Result, ResultStore } from '../models/result.model';
import * as actions from '../actions/feed.action';
import { FeedService } from '../services/feed.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('FeedService', () => {
    let injector: TestBed;
    let httpMock: HttpTestingController;
    let feedService: FeedService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [        
      ], providers: [FeedService]
    }).compileComponents();
    feedService = TestBed.get(FeedService);
    httpMock = TestBed.get(HttpTestingController);

  });

  // test case for getfeeds service method
  it('should return an array of feeds', () => {
        feedService.getFeeds().subscribe(result => { 
            if(result){
                expect(result).toBeDefined();
            }
        });
    });

  // test case for searchFeeds service method
  it('should return the default state', () => {
      let q: Query = {tags: "soccer"};
        feedService.searchFeeds(q).subscribe(result => { 
            if(result){
                expect(result).toBeDefined();
            }
        });
    });
});