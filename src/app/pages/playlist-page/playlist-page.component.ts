import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import Video from 'src/app/models/Video';
import { UserDataService } from 'src/app/services/user-data.service';

@Component({
    selector: 'app-playlist-page',
    templateUrl: './playlist-page.component.html',
    styleUrls: ['./playlist-page.component.css']
})
export class PlaylistPageComponent implements OnInit {

    constructor(private userData:UserDataService) { }

    // To store videos in user playlist
    currPlaylist: Video[] = [];
    // To subscribe to changes in the UserData service
    playlistSubscription = new Subscription();

    ngOnInit(): void {
        // Subscribe to updates in the video playlist
        this.playlistSubscription = this.userData.listObservable.subscribe(
             (dataFromObservable) => {
                 this.currPlaylist = dataFromObservable;
             }
        );
    }

}
