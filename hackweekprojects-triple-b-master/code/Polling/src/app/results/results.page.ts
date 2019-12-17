import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType } from 'chart.js';
import { FirebaseService } from '../services/firebase.service';
import {Poll, Result} from '../types';

@Component({
  selector: 'app-results',
  templateUrl: './results.page.html',
  styleUrls: ['./results.page.scss'],
})
export class ResultsPage implements OnInit {

  polls: Poll[] = [{
    url: '',
    question: '',
    choice1: '',
    choice2: '',
    creator: ''
  }];
  results: Result[] = [{
    choice1: 0,
    choice2: 0,
    pollID: '',
    completed: false
  }];
  question = '';
  winner: string[] = [];

  barChartOptions: ChartOptions = {
    responsive: false,
    scales: {
      yAxes: [{ id: 'y-axis-1', type: 'linear', position: 'left', ticks: { min: 0 } }],
      xAxes: [{display: false}]
    }
  };
  barChartType: ChartType = 'bar';
  barChartLegend = false;
  barChartPlugins = [];
  foundPolls: any[] = [];
  ready = false;
  i: number;
  
  constructor(private service: FirebaseService) { }

  ngOnInit() {
    this.service.watchResults().subscribe(res => {
      this.getAllResults();
    });
  }

  getSpecificPoll(resultId: string, choice1, choice2): any {
    let selectedPoll: any;

    this.service.getPoll(resultId).subscribe(res => {
      this.polls = this.service.retPolls;
      this.foundPolls.push(this.service.retPolls[this.i]);
      this.i++;
      if (choice1 > choice2) {
        this.winner.push(this.polls[0].choice1);
      } else {
        if (choice1 === choice2) {
          this.winner.push('Tie!');
        } else {
          this.winner.push(this.polls[0].choice2);
        }
      }
    });

    selectedPoll = this.polls;
    return selectedPoll;
  }

  getAllResults() {
    this.i = 0;
    this.service.getCompletedResults().subscribe(res => {
      this.results = this.service.completedResults;
      this.results.forEach(e => {
        this.getSpecificPoll(e.pollID, e.choice1, e.choice2);
      });
      this.ready = true;
    });
  }

}
