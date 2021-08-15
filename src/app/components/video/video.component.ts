import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
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

    video:Video = {} as Video;
    // @Input() currVideo:Video = {} as Video;
    isInPlaylist:boolean = false; // to prevent duplicates??

    ngOnInit(): void {
        // this.videoData.getVideosFromAPI.
    }

    addToPlaylistBtn = () => {
        this.userData.addToPlaylist(this.video);
    }
}
