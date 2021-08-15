import { Injectable } from '@angular/core';
import Video from '../models/Video';


@Injectable({
    providedIn: 'root'
})
export class UserDataService {

    playlist: Video[] = [];

    constructor() { }

    getPlaylist = (): Video[] => {
        return this.playlist;
    }

    addToPlaylist = (video:Video) => {
        this.playlist.push(video);
    }

    
}
