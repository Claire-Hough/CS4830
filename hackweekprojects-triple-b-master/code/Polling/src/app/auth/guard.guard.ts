import { Injectable } from '@angular/core';
import {
    ActivatedRouteSnapshot,
    CanActivate,
    Router,
    RouterStateSnapshot,
    UrlTree
} from '@angular/router';
import { Observable } from 'rxjs';
import { FirebaseService } from '../services/firebase.service';
import { map, take, tap } from 'rxjs/operators';

import { GeneralService } from '../services/general.service';

@Injectable({
    providedIn: 'root'
})

export class Guard implements CanActivate {
    constructor(private auth: FirebaseService, private router: Router, private general: GeneralService) { }

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> {
        return this.auth.user.pipe(
            take(1),
            map(user => {
                if (user === null || user.email === '') {
                    return false;
                } else {
                    return true;
                }
            }),
            tap(loggedIn => {
                if (!loggedIn) {
                    this.general.presentAlertForLogin();
                }
            })
        );
    }
}
