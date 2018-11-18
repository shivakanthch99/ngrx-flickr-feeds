import { Action } from '@ngrx/store';
import { Query } from '../models/query.model';
import { Result, ResultStore } from "src/app/models/result.model";

export const GET_FEEDS = 'GET_FEEDS';
export const SEARCH_FEEDS = 'SEARCH_FEEDS';
export const FEEDS_SUCCESS = 'FEEDS_SUCCESS';
export const FEEDS_FAILED = 'FEEDS_FAILED';

/**
 * This class defines the action for the GetFeeds
 */
export class GetFeedsAction implements Action
{
    readonly type = GET_FEEDS;
    constructor(public payload?: any) { }
}

/**
 * This class defines the action for the SearchFeeds where the search params are passed in the payload
 */
export class SearchFeedsAction implements Action
{
    readonly type = SEARCH_FEEDS;
    
    constructor(public payload: Query) { }
}

/**
 * This class defines the action for the FeedsSuccess where the result is fetched in the payload
 */
export class FeedsSuccessAction implements Action {
    readonly type = FEEDS_SUCCESS;
    
    constructor(public payload: ResultStore) {        
    }
}

/**
 * This class defines the action for the Feeds failure where the error is returned to the observer in the payload
 */
export class FeedsFailedAction implements Action
{
    readonly type = FEEDS_FAILED;

    // here payload for failed action would be error object got from exception
    constructor(public payload: any) { }
}

export type FeedActions = GetFeedsAction | SearchFeedsAction | FeedsSuccessAction | FeedsFailedAction;