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

    // playlistObservable = new BehaviorSubject<Video[]>([]);

    constructor() { }

    // TO get
    getPlaylist = (): Video[] => {
        return this.currList;
    }

    // To set the behavior; array normally static, using behavior allows for it to be more dynamic
    // setPlaylist(data:any) {
    //     this.currList = data;
    //     // Publish list to any subscribers
    //     this.listObservable.next(this.currList);
    // }

    addToPlaylist = (video:Video) => {
        // Push video into playlist
        this.currList.push(video);
        // Update the observable list; this is what the list looks like now, my subscribers
        this.listObservable.next(this.currList);
    }

    
}
