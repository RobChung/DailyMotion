import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import Video from 'src/app/models/Video';
import { DailyMotionService } from 'src/app/services/daily-motion.service';
import { UserDataService } from 'src/app/services/user-data.service';

@Component({
    selector: 'app-video',
    templateUrl: './video.component.html',
    styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {

    // Inject user-data service for adding to playlist
    // Inject daily-motion service to have access to API data???
    constructor(private userData:UserDataService, private videoData:DailyMotionService) { }

    @Input() video:Video = {} as Video;
    isInPlaylist:boolean = false; // to prevent duplicates??
    // Subscribe to the observable list
    playlistSubscription = new Subscription();
    ngOnInit(): void {
        //Subscribe to updates in the video playlist
        this.playlistSubscription = this.userData.listObservable.subscribe(
            (updatedPlaylist) => {
                
            }
        );

    }

    addToPlaylistBtn = () => {
        console.log("add button pressed")
        this.userData.addToPlaylist(this.video);
        this.isInPlaylist = true;
    }
}
