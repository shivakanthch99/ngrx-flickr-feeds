import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of }  from 'rxjs';
import { switchMap, map, take, tap, mergeMap, catchError } from 'rxjs/operators';

import * as actions from '../actions/feed.action';
import * as model from '../models/result.model';
import { Query } from '../models/query.model';
import { FeedService } from '../services/feed.service';

/**
 * Effects class which defines the methods for the actions defines in the actions class
 */
@Injectable()
export class FeedEffects {
    
    constructor(private actionGetFeeds$: Actions<actions.GetFeedsAction>,
        private actionSearchFeeds$: Actions<actions.SearchFeedsAction>,
        private feedService: FeedService) {  }

    /**
     * Effect that is used to manage the action GET_FEEDS that is dispatched to the store
     */
    @Effect()
    getFeeds$: Observable<Action> = this.actionGetFeeds$.pipe(
        ofType<actions.GetFeedsAction>(actions.GET_FEEDS),
        switchMap(() => 
            this.feedService.getFeeds().pipe(
                // return a success action when everything went OK
                map((feed: any) => new actions.FeedsSuccessAction({ items: feed.items })),
                // return a failed actions when something went wrong
                // FeedsFailedAction should handle error
                catchError(error => of(new actions.FeedsFailedAction(error))),
            ),
         ),
    );
    
    /**
     * Effect that is used to manage the action SEARCH_FEEDS that is dispatched to the store
     */
    @Effect()
    searchFeeds$: Observable<Action> = this.actionSearchFeeds$.pipe(
        ofType<actions.SearchFeedsAction>(actions.SEARCH_FEEDS),
        mergeMap((action: actions.SearchFeedsAction) => 
            this.feedService.searchFeeds(action.payload).pipe(
                // return a success action when everything went OK
                map((feed: any) => new actions.FeedsSuccessAction({ items: feed.items })),
                // return a failed actions when something went wrong
                // FeedsFailedAction should handle error
                catchError(error => of(new actions.FeedsFailedAction(error))),
            ),
         ),         
    );
}