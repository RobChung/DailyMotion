import { Component, OnInit, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import Video from 'src/app/models/Video';
import { DailyMotionService } from 'src/app/services/daily-motion.service';
import { UserDataService } from 'src/app/services/user-data.service';

@Component({
    selector: 'app-video-listing',
    templateUrl: './video-listing.component.html',
    styleUrls: ['./video-listing.component.css']
})
export class VideoListingComponent implements OnInit {
    // For home/list of searched videos
    @Input() currVideoList:Video[] = [];
    // For playlist/list of videos in user playlist
    @Input() currPlaylist:Video[] = [];
    // isInPlaylist: boolean = false; // to prevent duplicates??


    constructor(private userData: UserDataService, private videoData: DailyMotionService) { }

    ngOnInit(): void {


    }
}


