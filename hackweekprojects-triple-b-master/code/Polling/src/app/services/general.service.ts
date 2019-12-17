import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  constructor(private alertController: AlertController, private router: Router) { }

  async presentAlertForLogin() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Must be logged in!',
      message: 'In order to make your own poll, you must first login.' +
        '<br><br>If you are currently an anonymous user to vote, ' +
        'you must login with an actual account to access this feature.',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
        },
        {
          text: 'Login',
          handler: () => {
            this.router.navigate(['/modal']);
          }
        }
      ]
    });

    await alert.present();
    const result = await alert.onDidDismiss();
  
  }

  async presentOkAlert(message: string, subHeader: string) {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader,
      message,
      buttons: ['OK']
    });

    await alert.present();
  }

  async formHelpAlert(header: string, message: string, subHeader: string) {
    const alert = await this.alertController.create({
      header,
      subHeader,
      message,
      buttons: ['OK']
    });

    await alert.present();
  }

  async presentLogoutAlert(message: string, subHeader: string) {
    const alert = await this.alertController.create({
      header: 'Authentication Alert',
      subHeader,
      message,
      buttons: ['OK']
    });

    await alert.present();
  }
}
