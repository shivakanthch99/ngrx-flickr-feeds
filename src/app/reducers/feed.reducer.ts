import { Action, State } from '@ngrx/store';

import { Query } from '../models/query.model';
import { Result, ResultStore } from '../models/result.model';
import * as actions from '../actions/feed.action';
import { FeedActions } from '../actions/feed.action';

/**
 * The below constant defines the initial state of the application
 */
export const initialState =
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

/**
 * Main reducer function of the application which handles all the success/failure actions
 * @param state that defines the state of the application
 * @param action that defines which action is to be handled by this reducer function
 */
export function feedReducer(state: Array<Result> = initialState, action: actions.FeedActions) {
    switch(action.type){
        case actions.FEEDS_SUCCESS:
            return action.payload.items; // these are the items in the feeds, can be stored in the store but in this example its not required
        case actions.FEEDS_FAILED:
            return action.payload // this is the error object passed to the subscriber, so it can display the error occcured
        default: 
            return state;
    }
}

// the store object defined at single place so it cannot be tampered.
export const feedStore = 'feedStore';