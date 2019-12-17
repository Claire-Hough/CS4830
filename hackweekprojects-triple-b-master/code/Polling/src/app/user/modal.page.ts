import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import { AppComponent } from '../app.component';
import { User } from '../types';
import { FormBuilder, Validators } from '@angular/forms';
import { LoadingController, NavController } from '@ionic/angular';
import { GeneralService } from '../services/general.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  toLogin = false;
  toEmail = false;
  signUp = false;
  passwordsMatch = false;
  pass = '';
  conf = '';
  message = '';
  user: User = {
    uid: 'none',
    email: 'none',
    photoURL: 'https://www.civhc.org/wp-content/uploads/2018/10/question-mark.png',
    displayName: 'Guest',
    voted: []
  };

  userForm = this.fb.group({
    email: ['', Validators.compose([Validators.required, Validators.maxLength(64), Validators.pattern("^(([^<>()\\[\\]\\\\.,;:\\s@\"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@\"]+)*)|(\".+\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$")])],
    password: ['', Validators.compose([Validators.required, Validators.maxLength(200)])]
  });

  signUpForm = this.fb.group({
    name: ['', Validators.compose([Validators.required, Validators.maxLength(100), Validators.pattern("^[a-zA-Z0-9]*$")])],
    email: ['', Validators.compose([Validators.required, Validators.maxLength(100), Validators.pattern("^(([^<>()\\[\\]\\\\.,;:\\s@\"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@\"]+)*)|(\".+\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$")])],
    password: ['', Validators.compose([Validators.required, Validators.maxLength(100), Validators.minLength(8)])],
    confirm: ['', Validators.compose([Validators.required, Validators.maxLength(100)])]
  });

  constructor(private service: FirebaseService,
              private app: AppComponent,
              private loadingController: LoadingController,
              private nav: NavController,
              private fb: FormBuilder,
              private general: GeneralService
              ) { }

  ngOnInit() {
    this.service.user.subscribe(res => {
      if (res !== undefined && res !== null) {
        this.user = res;
        this.app.color = this.user.color;
      } else {
        this.user.displayName = 'Guest';
      }
    });
  }

  ionViewWillLeave() {
    this.toLogin = false;
    this.toEmail = false;
    this.signUp = false;
    this.userForm.reset();
    this.signUpForm.reset();
  }

  color(color) {
    this.app.color = color;
    this.user.color = color;
    if (this.user.displayName !== 'Guest') {
      this.service.updateUser(this.user);
    }
    console.log(this.app.color);
  }

  match(value) {
    if (this.pass === value) {
      console.log(this.pass);
      console.log(this.conf);
      this.passwordsMatch = true;
    } else {
      console.log(this.pass);
      console.log(this.conf);
      this.passwordsMatch = false;
    }
  }

  anon() {
    this.user = {
      uid: 'none',
      email: 'none',
      photoURL: 'https://www.civhc.org/wp-content/uploads/2018/10/question-mark.png',
      displayName: 'Anon',
      voted: []
    };
    this.service.anonymousLogin().toPromise().then((res) => {
      this.toLogin = false;
    });
  }

  google() {
    this.service.googleLogin().then((res) => {
      this.toLogin = false;
    });
  }

  logout() {

    if (this.user.displayName !== 'Guest') {

      const subHeader = 'Logging Out';

      const message = 'You are now logged out.'

      this.general.presentLogoutAlert(message, subHeader);

      this.user = {
        uid: '',
        email: '',
        photoURL: 'https://www.civhc.org/wp-content/uploads/2018/10/question-mark.png',
        displayName: 'Guest',
        voted: []
      };
      this.service.userHold = this.user;
      this.service.signOut();
    } else {

      const subHeader = 'Logout Error'
      const message = 'You are not logged in with any kind of account, nothing to log out of.';

      this.general.presentLogoutAlert(message, subHeader);
    }


  }

  async sendCredentials() {
    const loading = await this.loadingController.create({
      message: 'Sending Credentials...'
    });
    await loading.present();
    if (this.signUp === true) {
      this.service.emailSignup(this.signUpForm.value.email, this.signUpForm.value.password, this.signUpForm.value.name).toPromise()
        .then(() => {
          this.message = this.service.message;
          if (this.message === '' || this.message === 'The email address is badly formatted.') {
            this.signUpForm.reset();
            this.cancel();
            loading.dismiss();
          }
        });
    }
    this.service.emailLogin(this.userForm.value.email, this.userForm.value.password).toPromise().then(() => {
      this.message = this.service.message;
      loading.dismiss();
      if (this.message === '' || this.message === 'The email address is badly formatted.') {
        this.userForm.reset();
        this.cancel();
        this.toLogin = false;
      }
    });
  }

  email() {
    this.toEmail = true;
    this.signUp = true;
  }

  cancel() {
    this.toEmail = false;
    this.signUp = false;
  }
}
