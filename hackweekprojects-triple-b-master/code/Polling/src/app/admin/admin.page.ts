import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { LoadingController, NavController } from '@ionic/angular';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FirebaseService } from '../services/firebase.service';
import { Poll } from '../types';
import { GeneralService } from '../services/general.service';
import { User } from '../types';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {

  poll: Poll;

  user: User;

  pollingForm = this.fb.group({
    url: ['', Validators.compose([Validators.required, Validators.maxLength(11), Validators.minLength(11), Validators.pattern("^[a-zA-Z0-9_-]*$")])],
    question: ['', Validators.compose([Validators.required, Validators.maxLength(200), Validators.pattern("^[a-zA-Z0-9 -'?]*$")])],
    choice1: ['', Validators.compose([Validators.required, Validators.maxLength(20), Validators.pattern("^[a-zA-Z0-9 -.']*$")])],
    choice2: ['', Validators.compose([Validators.required, Validators.maxLength(20), Validators.pattern("^[a-zA-Z0-9 -.']*$")])],
    creator: []
  });

  constructor(private fbService: FirebaseService,
              private route: ActivatedRoute,
              private loadingController: LoadingController,
              private nav: NavController,
              private fb: FormBuilder,
              private general: GeneralService
              ) { }

  ngOnInit() {

    this.fbService.user.subscribe(res => {
      if (res !== null) {
        this.user = res;
        this.fbService.userHold = this.user;
        
      } else {
        this.user = {
          uid: '',
          email: '',
          photoURL: 'https://www.civhc.org/wp-content/uploads/2018/10/question-mark.png',
          displayName: 'Guest',
          voted: []
        };
        this.fbService.userHold = this.user;
      }
    });
  }

  async savePoll() {
    const loading = await this.loadingController.create({
      message: 'Saving New Poll...'
    });
    await loading.present();

    this.pollingForm.value.url = 'https://www.youtube.com/embed/' + this.pollingForm.value.url + '?autoplay=1&enablejsapi=1';

    this.pollingForm.value.creator = this.user.email;

    const pollId = this.fbService.addPoll(this.pollingForm.value);
    this.fbService.createResult(pollId).then(() => {
      loading.dismiss();
      this.nav.navigateBack('home');
    });
  }

  helpVideoIdAlert() {
    const header = 'Video ID';
    const message = 'Video ID refers to the 11 characters found at the end of every YouTube url.';
    const subheader = 'For example, <br>the YouTube link \"https://www.youtube.com/watch?v=QesT67dsRbg\" has the Video ID \"QesT67dsRbg\"';

    this.general.formHelpAlert(header, subheader, message);
  }

  helpQuestionAlert() {
    const header = 'Question';
    const message = 'The question is the poll that users will be voting on.';
    const subheader = 'The question should be something that can be answered with two choices.';

    this.general.formHelpAlert(header, subheader, message);
  }

  helpChoiceAlert() {
    const header = 'Voting Choice';
    const message = 'Voting Choice refers to the two options users can click to cast their vote on the question.';
    const subheader = 'The choices should represent differing opinions.';

    this.general.formHelpAlert(header, subheader, message);
  }
}
