import { Action } from '@ngrx/store';
import { TestBed, inject } from '@angular/core/testing';

import { Query } from '../models/query.model';
import { Result, ResultStore } from '../models/result.model';
import * as actions from '../actions/feed.action';
import * as reducer from './feed.reducer';
import { FeedService } from '../services/feed.service';
import { HttpClient } from '@angular/common/http';

describe('FeedsReducer', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
      ],
      declarations: [        
      ], providers: [FeedService]
    }).compileComponents();
  });

  // test case for undefined action
  it('should return the default state', () => {
        const action = {} as any;
        const result = reducer.feedReducer(undefined, action);
        expect(result).toEqual(reducer.initialState);
    });

// test case for get initial feeds. should return a non empty array
  it('should return feeds with non empty array', () => {
        let testPayload =
            [
                {
                    title: "",
                    link: "",
                    media: null,
                    date_taken: "",
                    description: "",
                    published: "",
                    author: "",
                    author_id: "",
                    tags: ""
                }
            ]
        
        let state = reducer.feedReducer(reducer.initialState, new actions.GetFeedsAction(testPayload));
        expect(state).toEqual(testPayload);
    });

// test case for get initial feeds. should return a non empty array
    it('should return feeds with non empty array', () => {    
        let query: Query = { tags: 'soccer'};
        let testPayload =
            [
                {
                    title: "",
                    link: "",
                    media: null,
                    date_taken: "",
                    description: "",
                    published: "",
                    author: "",
                    author_id: "",
                    tags: ""
                }
            ]
        
        reducer.feedReducer(reducer.initialState, new actions.SearchFeedsAction(query));
        let state = reducer.feedReducer(reducer.initialState, new actions.SearchFeedsAction(query));
        expect(state).toEqual(testPayload);
    });
});