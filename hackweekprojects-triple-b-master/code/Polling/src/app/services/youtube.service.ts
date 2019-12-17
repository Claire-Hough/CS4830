import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  apiKey = 'AIzaSyC0XNxHezoPOOmC0OCBZYmN-c1Vgy6Zj2s'

  constructor(private http: HttpClient) { }

  getYoutubeVideo(videoID: string): Observable<any> {
    const obs = this.http.get(
        'https://www.googleapis.com/youtube/v3/videos?id=' + videoID + '&key=' + this.apiKey + '&part=snippet'
    );
    return obs;
  }

}
