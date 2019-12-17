import { Component, Injectable, OnInit, ViewChild } from '@angular/core';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player/ngx';
import { SafePipeModule } from 'safe-pipe';
import { DomSanitizer } from '@angular/platform-browser';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { FirebaseService } from '../services/firebase.service';
import { Label, Color } from 'ng2-charts';
import { User, Result } from '../types';
import { AppComponent } from '../app.component';

import { GeneralService } from '../services/general.service';
import {YoutubeService } from '../services/youtube.service';
import { ModalPage } from '../user/modal.page';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  currentURL = '';
  first = 0;
  second = 0;
  choice1 = '';
  choice2 = '';
  completed = false;
  id: string;
  question = '';
  safeUrl: any;
  disabled = false;
  user: User;
  selectedPoll = '';
  creator = '';

  barChartOptions: ChartOptions = {
    responsive: true,
    scales: {
      yAxes: [{ id: 'y-axis-1', type: 'linear', position: 'left', ticks: { min: 0 } }],
      xAxes: [{ display: false }],
    }
  };
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];

  polls: any[];
  results: any[];
  videos: any[];

  constructor(private youtube: YoutubeVideoPlayer,
              private safe: SafePipeModule,
              private sanitizer: DomSanitizer,
              private service: FirebaseService,
              private app: AppComponent,
              private general: GeneralService,
              private ytService: YoutubeService
              ) {
    this.sanitizer = sanitizer;
  }

  ngOnInit() {
    this.videos = [];
    this.service.user.subscribe(res => {
      if (res !== null) {
        this.user = res;
        this.app.color = this.user.color;
        this.service.userHold = this.user;
      } else {
        this.user = {
          uid: '',
          email: '',
          photoURL: 'https://www.civhc.org/wp-content/uploads/2018/10/question-mark.png',
          displayName: 'Guest',
          voted: []
        };
        this.service.userHold = this.user;
      }
    });
    this.service.watchPolls().subscribe(res => {
      this.services();
    });
    this.service.watchResults().subscribe(res => {
      if (this.selectedPoll) {
        this.service.getResult(this.selectedPoll).subscribe(ret => {
          this.results = this.service.results;
          this.first = this.results[0].choice1;
          this.second = this.results[0].choice2;
          this.completed = this.results[0].completed;
        });
      }

    });
    this.services();

  }

  services() {
    this.service.getPolls().subscribe(res => {
      this.polls = this.service.retPolls;
      this.getVideos();

    });
  }

  ionViewDidEnter() {
    
    this.videos = [];
    this.services();
    const frames = document.getElementsByTagName('iframe');

    for (let i = 0; i < frames.length; i++) {
      const iframe = frames[i].contentWindow;
      iframe.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
    }
  }

  ionViewWillLeave() {
    const frames = document.getElementsByTagName('iframe');

    for (let i = 0; i < frames.length; i++) {
      const iframe = frames[i].contentWindow;
      iframe.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
    }
  }

  getTrustedUrl(url: any) {
    this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  option1() {
    if (this.completed === true) {
      this.disabled = true;
      this.general.presentOkAlert('This poll has ended, you cannot vote on finished polls.', 'Poll Has Finished');
    } else {
      this.disabled = false;
      this.user = this.service.userHold;
      if (this.user !== undefined && this.user.uid !== '') {

        // if the user hasn't vote on the poll...
        if ( !this.service.checkIfVoted(this.user, this.selectedPoll) ) {
          console.log('user hasn\'t voted on poll');
          this.service.addResult(1, this.id).subscribe(ret => { });
          this.setVotedValueToTrue();
        } else {
          this.alertOk();
        }
      } else {
        this.alertGuest();
      }
    }
  }

  option2() {
    if (this.completed === true) {
      this.disabled = true;
      this.general.presentOkAlert('This poll has ended, you cannot vote on finished polls.', 'Poll Has Finished');
    } else {
      this.disabled = false;
      this.user = this.service.userHold;
      if (this.user !== undefined && this.user.uid !== '') {

        // if the user hasn't voted on the poll...
        if ( !this.service.checkIfVoted(this.user, this.selectedPoll) ) {
          console.log('user hasn\'t voted on poll');
          this.service.addResult(2, this.id).subscribe(ret => { });
          this.setVotedValueToTrue();
        } else {
          this.alertOk();
        }
      } else {
        this.alertGuest();
      }
    }
  }

  pollSelected(poll) {
    this.id = poll.id;
    this.question = poll.question;
    this.choice1 = poll.choice1;
    this.choice2 = poll.choice2;
    this.currentURL = poll.url;
    this.creator = poll.creator;
    this.getTrustedUrl(this.currentURL);

    this.service.getResult(this.id).subscribe(ret => {
      this.results = this.service.results;
      this.first = this.results[0].choice1;
      this.second = this.results[0].choice2;
      this.completed = this.results[0].completed;
      this.selectedPoll = poll.id;
      console.log(this.first + ' ' + this.second);
    });
  }

  setVotedValueToTrue() {
    this.user.voted.push(this.selectedPoll);
    this.service.updateUser(this.user);
  }

  alertOk() {
    const subheader = 'You have already voted!';
    const message = 'You cannot vote more than once on this poll.';

    this.general.presentOkAlert(message, subheader);
  }

  alertGuest() {
    const subheader = 'You are a guest!';
    const message = 'Guests cannot vote or create a new pole. <br> Please login anonymously or with an account to vote';

    this.general.presentOkAlert(message, subheader);
  }

  async getVideos() {
    let i = 0;
    for (const poll of this.polls) {
      i++;
      const rawId = poll.url.substr(30, 11);
      await this.youtubeServiceCall(rawId);
    
    }
  }

  youtubeServiceCall(pollId: string): Observable<any> {
    const obs = this.ytService.getYoutubeVideo(pollId);
    obs.subscribe(data => {
      this.videos.push(data);
    });
    return obs;
  }

  setFinished(resultPollId: string) {
    this.service.updateResult(resultPollId);

    const subheader = 'Poll is now complete';
    const message = 'You have marked this poll as complete. It will no longer appear on the home screen and will be added to the results page.';
    this.general.presentOkAlert(message, subheader);
    this.selectedPoll = '';
  }

}
