/**
 * The result is the model class that defines the structure of the feed
 */
export class Result {
    public title: string;
    public link: string;
    public media: Media;
    public date_taken: string;
    public description: string;
    public published: string;
    public author: string;
    public author_id: string;
    public tags: string;
}

/**
 * This class defines the model for the store object
 */
export class ResultStore {
    public items: Array<Result>;
}

/** This is a class defines the type of media that contains the feed */
export class Media
{
    //Property holds the media
    public m: string;
}

// This class defines the model class that is returned from the flickrfeed
export class Feed
{
    public description: string;
    public generator: string;
    public link: string;
    public modified: string;
    public title: string;
    public items: Array<Result>;
}
