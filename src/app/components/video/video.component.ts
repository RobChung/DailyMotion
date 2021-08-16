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
    constructor(private userData:UserDataService) { }

    @Input() video:Video = {} as Video;
    isInPlaylist:boolean = false; // to prevent duplicates??
    // Subscribe to the observable list
    playlistSubscription = new Subscription();

    ngOnInit(): void {
        //Subscribe to updates in the video playlist
        this.playlistSubscription = this.userData.listObservable.subscribe(
            (updatedPlaylist) => {
                // Check to see if video is in playlist
                let found = false;
                for(let i = 0; i < updatedPlaylist.length; i++){
                    if(updatedPlaylist[i].id === this.video.id){
                        found = true;
                        break;
                    }
                }
                if(found == false){
                    this.isInPlaylist = false;
                } else{
                    // do nothing
                }
            }
        );
    }

    addToPlaylistBtn = () => {
        // console.log("add button pressed")
        this.userData.addToPlaylist(this.video); //Observable list gets updated here
        this.isInPlaylist = true;
    }
}
