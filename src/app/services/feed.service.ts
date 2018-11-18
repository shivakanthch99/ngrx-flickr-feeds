import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Query } from '../models/query.model';

/**
 * FeedService class that is used to maintain the service method to be able to call the flickr service endpoints
 */
@Injectable()
export class FeedService {
    private _feedUrl = 'https://api.flickr.com/services/feeds/photos_public.gne?format=json&jsoncallback=JSONP_CALLBACK';

    constructor(private http: HttpClient) { }

    /** This service method is used to fire a request to flickr feed service to get the public feeds */
    getFeeds() {
        return this.http.jsonp(this._feedUrl, 'JSONP_CALLBACK');
    }
    
    /** This service method is used to fire a request to flickr feed service wich some search tags to get the public feeds with relevant search tags*/
    searchFeeds(searchQuery: Query) {
        let searchUrl = this._feedUrl;
        if(searchQuery && searchQuery.tags){
             searchUrl += "&tags=" + searchQuery.tags;
        }
        return this.http.jsonp(searchUrl, 'JSONP_CALLBACK');
    }   
}