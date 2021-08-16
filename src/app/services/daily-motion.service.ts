import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";
import Video from '../models/Video';


@Injectable({
    providedIn: 'root'
})
export class DailyMotionService {

    // store videos
    videoList:Video[] = [];

    // observable; subscribe to me and I will show you data
    videoListObservable = new BehaviorSubject<Video[]>([]);

    constructor(private http:HttpClient) { }

    getVideosFromAPI = (query:string): Observable<Video[]> => {
        const url = `https://api.dailymotion.com/videos?fields=id%2Cthumbnail_360_url%2Ccreated_time%2Cviews_total%2Ctitle%2Cowner.username%2cowner.avatar_80_url&search=`
        return this.http.get<Video[]>
            (url + `${query}`);
    }

}
