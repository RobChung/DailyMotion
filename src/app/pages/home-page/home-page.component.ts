import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import Video from 'src/app/models/Video';
import { DailyMotionService } from 'src/app/services/daily-motion.service';

@Component({
    selector: 'app-home-page',
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

    constructor(private data: DailyMotionService) { }

    // to store user input
    values:string = "";

    // list of searched videos from API
    currVideoList:Video[] = [];
    // To subscribe to view API changes
    videoListSubscription = new Subscription();

    ngOnInit(): void {
        // Subscribe to changes in daily-motion API
        this.videoListSubscription = this.data.videoListObservable.subscribe(
            (dataFromObservable) => {
                this.currVideoList = dataFromObservable;
            }
        )
    }

    // To get user input
    userInput = (e: any) => {
        let userInput = e.target.value;
        this.values = userInput;
        console.log(this.values);
    }

    searchVideos = () => {
        this.data.getVideosFromAPI(this.values).subscribe((dataFromAPI:any) => {
            this.currVideoList = dataFromAPI["list"];        
            // Updates the observable list with currVideoList
            this.data.videoListObservable.next(this.currVideoList);
        });
    }
}
