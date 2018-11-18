import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Store } from "@ngrx/store";
import { NgForm, FormControl, Validators } from "@angular/forms";
import { Masonry, MasonryGridItem } from 'ng-masonry-grid';

import * as query from '../../models/query.model';
import { Result, ResultStore } from '../../models/result.model';
import { feedStore, initialState } from '../../reducers/feed.reducer'
import * as actions from '../../actions/feed.action';
import { Observable } from 'rxjs'


@Component({
    selector: 'feed',
    templateUrl: './feed.component.html',
    styleUrls: ['./feed.component.scss']
})
/**
 * Parent component which layouts the structure for the feeds
 */
export class FeedComponent implements OnInit {
    // the result is an observer which get the data as and when the store is updated with new data
    result: Array<Result> = [];
    _masonry: Masonry;
    // form control for the search field
    search = new FormControl(query.messageEmpty, [Validators.required]);

    constructor(private store: Store<ResultStore>) {
        store.select(feedStore).subscribe(r => {
            if(r && r != initialState) {   
                this.addDataToGrid(r);
            }
        });
    }

    /**
     * Init method which is used to fire an on load event to load the data
     */
    ngOnInit() {
        this.store.dispatch(new actions.GetFeedsAction());
    }

    /** Event that initializes the grid */
    onNgMasonryInit($event: Masonry) {
        this._masonry = $event;
    }

    /**
     * Method to validate search input.
     */
    get validateSearchInput() {
        if (this.search.hasError(query.required)) {
            return query.messageRequired;
        } else {
            return query.messageEmpty;
        }
    }

    /**
     * Method used to dispatch and event to store with the search parameters that user has entered.
     */
    onSearch() {
        if (this.search.valid) {
            this.removeAllItems();
            let q = new query.Query();
            q.tags = this.search.value;
            this.store.dispatch(new actions.SearchFeedsAction(q));
        }
    }

    /** Method that takes care of adding data to the grid */
    addDataToGrid(data: Array<Result>) {
        if(this._masonry && data) {
            this._masonry.setAddStatus('add');
            this.result = [];
            this.result.push(...data);
        }
    }

    // Event that takes care of unsubscribing all the data before reloading
    removeAllItems() {
        if(this._masonry) {
            this._masonry.removeAllItems()
            .subscribe((items: MasonryGridItem) => {
                
            });
        }
    }
}
