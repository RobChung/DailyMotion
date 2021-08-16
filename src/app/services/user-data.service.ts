import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import Video from '../models/Video';


@Injectable({
    providedIn: 'root'
})
export class UserDataService {

    // Store
    currList: Video[] = [];
    // Subscribe to me, I will output you my data
    listObservable = new BehaviorSubject<Video[]>([]);

    constructor() { }

    // TO get
    getPlaylist = (): Video[] => {
        return this.currList;
    }

    addToPlaylist = (video:Video) => {
        // Push video into playlist
        this.currList.push(video);
        // Update the observable list; this is what the list looks like now, my subscribers
        this.listObservable.next(this.currList);
    }

    
}
