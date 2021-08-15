import { Component, Input, OnInit } from '@angular/core';
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
    @Input() videoListFromAPI:Video[] = [];

    ngOnInit(): void {
    }

    userInput = (e: any) => {
        let userInput = e.target.value;
        this.values = userInput;
        console.log(this.values);
    }

    searchVideos = () => {
        this.data.getVideosFromAPI(this.values).subscribe((dataFromAPI: Video[]) => {
            console.log(dataFromAPI);
            this.videoListFromAPI = dataFromAPI;
        });
    }
}
