import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

import { Result, ResultStore } from '../../models/result.model';

@Component({
    selector: 'feed-details',
    templateUrl: './feed-details.component.html',
    styleUrls: ['./feed-details.component.scss']
})

/**
 * Class that defines the tile component to hold an image recieved from the feed
 */
export class FeedDetailsComponent {
    // input property that is received from the parent
    @Input() feed: Result;

    // method that gives the title from the input submitted from html
    getTitle(input: string) {
        if(input){
            return input.substring(input.indexOf('"') + 1, input.length -2);
        }
        return input;
    }
}
