import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";
import Video from '../models/Video';


@Injectable({
    providedIn: 'root'
})
export class DailyMotionService {

    // videoList: Video[] = [

    // ];

    constructor(private http:HttpClient) { }

    getVideosFromAPI = (query:string): Observable<Video[]> => {
        const url = `https://api.dailymotion.com/videos?fields=id%2Cthumbnail_360_url%2Ccreated_time%2Cviews_total%2Ctitle%2Cowner.username%2cowner.avatar_80_url&search=`
        return this.http.get<Video[]>
            (url + `${query}`);
    }
    // getVideosFromAPI = (query:string): Observable<Video[]> => {
    //     // const url = `https://api.dailymotion.com/videos?fields=id%2Cthumbnail_360_url%2C
    //     // created_time%2Cviews_total%2Ctitle%2Cowner.username%2cowner.avatar_80_url&search=`
    //     return this.http.get<Video[]>
    //         (`https://api.dailymotion.com/videos?fields=id%2Cthumbnail_360_url%2C
    //         created_time%2Cviews_total%2Ctitle%2Cowner.username%2cowner.avatar_80_url&search=basketball`);
    // }

}
