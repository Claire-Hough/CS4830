import { Injectable } from '@angular/core';
import { from, Observable, of } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { switchMap, map } from 'rxjs/operators';
import * as firebase from 'firebase';
import { User, Poll, Result } from '../types';

@Injectable({
    providedIn: 'root'
})
export class FirebaseService {

    user: Observable<User>;
    name = '';
    users: any[];
    userHold: any;
    retPolls: any[];
    results: any[];
    loggedIn = false;
    message = '';
    completedResults: any[] = [];
    private pollsCollection: AngularFirestoreCollection<Poll>;
    private polls: Observable<Poll[]>;
    private resultsCollection: AngularFirestoreCollection<Result>;
    private result: Observable<Result[]>;

    constructor(private auth: AngularFireAuth,
                private fs: AngularFirestore,
                private router: Router
    ) {
        this.user = this.auth.authState.pipe(
            switchMap(user => {
                if (user) {
                    return this.fs.doc<User>(`users/${user.uid}`).valueChanges();
                } else {
                    return of(null);
                }
            })
        );

        this.pollsCollection = fs.collection<Poll>('polls');

        this.polls = this.pollsCollection.snapshotChanges().pipe(
            map(actions => {
                return actions.map(a => {
                    const data = a.payload.doc.data();
                    const id = a.payload.doc.id;
                    return { id, ...data };
                });
            })
        );

        this.resultsCollection = fs.collection<Result>('results');

        this.result = this.resultsCollection.snapshotChanges().pipe(
            map(actions => {
                return actions.map(a => {
                    const data = a.payload.doc.data();
                    const id = a.payload.doc.id;
                    return { id, ...data };
                });
            })
        );
    }

    googleLogin() {
        if (this.loggedIn === true) {
            console.log('You are already logged in');
        } else {
            const provider = new firebase.auth.GoogleAuthProvider();
            return this.oAuthLogin(provider);
        }
    }

    anonymousLogin() {
        let obs: Observable<any>;
        if (this.loggedIn === true) {
            console.log('You are already logged in');
        } else {
            obs = from(firebase.auth().signInAnonymously()
                .then((credentials) => {
                    this.loggedIn = true;
                    this.updateUserData(credentials.user);
                }));
        }
        return obs;
    }

    emailLogin(email, password) {
        this.message = '';
        let obs: Observable<any>;
        if (this.loggedIn === true) {
            console.log('You are already logged in');
        } else {
            obs = from(firebase.auth().signInWithEmailAndPassword(email, password)
                .then((credentials) => {
                    this.loggedIn = true;
                    this.updateUserData(credentials.user);
                }).catch((error) => {
                    const errorCode = error.code;
                    console.log(errorCode);
                    const errorMessage = error.message;
                    this.message = errorMessage;
                    console.log(errorMessage);
                }));
        }
        return obs;
    }

    emailSignup(email, password, name) {
        this.name = name;
        let obs: Observable<any>;
        if (this.loggedIn === true) {
            console.log('You are already logged in');
        } else {
            obs = from(firebase.auth().createUserWithEmailAndPassword(email, password)
                .then((credentials) => {
                    this.loggedIn = true;
                    this.updateUserData(credentials.user);
                }).catch((error) => {
                    const errorCode = error.code;
                    console.log(errorCode);
                    const errorMessage = error.message;
                    this.message = errorMessage;
                    console.log(errorMessage);
                }));
        }
        return obs;
    }

    private oAuthLogin(provider) {
        this.loggedIn = true;
        return this.auth.auth.signInWithPopup(provider)
            .then((credentials) => {
                this.name = credentials.user.displayName;
                this.updateUserData(credentials.user);
            });
    }

    private updateUserData(user) {

        const userRef: AngularFirestoreDocument<any> = this.fs.doc(`users/${user.uid}`);
        userRef.get().toPromise()
            .then((res) => {
                let data: User;
                if (res.data() !== undefined) {
                    data = {
                        uid: res.data().uid,
                        email: res.data().email,
                        photoURL: res.data().photoURL,
                        displayName: res.data().displayName,
                        color: res.data().color,
                        voted: res.data().voted
                    };
                    this.userHold = data;
                    return userRef.set(data, { merge: true });
                } else {
                    if (user.email !== null && user.email !== undefined && user.email !== '') {
                        data = {
                            uid: user.uid,
                            displayName: this.name,
                            photoURL: 'https://www.civhc.org/wp-content/uploads/2018/10/question-mark.png',
                            color: 'tertiary',
                            email: user.email,
                            voted: []
                        };
                        this.userHold = data;
                        return userRef.set(data, { merge: true });
                    } else {
                        data = {
                            uid: user.uid,
                            displayName: 'Anon',
                            photoURL: 'https://www.civhc.org/wp-content/uploads/2018/10/question-mark.png',
                            color: 'tertiary',
                            email: '',
                            voted: []
                        };
                        this.userHold = data;
                        return userRef.set(data, { merge: true });
                    }

                }
            });
    }

    watchUsers() {
        let watch: Observable<any>;
        watch = this.fs.collection('users').valueChanges();
        return watch;
    }

    watchPolls() {
        let watch: Observable<any>;
        watch = this.fs.collection('polls').valueChanges();
        return watch;
    }

    watchResults() {
        let watch: Observable<any>;
        watch = this.fs.collection('results').valueChanges();
        return watch;
    }

    getUsers() {
        this.users = [];
        let obs: Observable<any>;
        obs = from(this.fs.collection('users').get().toPromise()
            .then((snapshot) => {
                snapshot.forEach((doc => {
                    this.users.push(doc.data().displayName);
                }));
            }));

        return obs;
    }

    updateUser(user) {
        this.fs.collection('users').doc(user.uid).update(user);
    }

    getPolls() {
        let obs: Observable<any>;
        obs = from(this.fs.collection('polls').get().toPromise()
            .then((snapshot) => {
                this.retPolls = [];
                snapshot.forEach((doc => {
                    let data = doc.data();
                    data = {
                        choice1: data.choice1,
                        choice2: data.choice2,
                        creator: data.creator,
                        question: data.question,
                        url: data.url,
                        id: doc.id
                    };
                    this.retPolls.push(data);
                }));
            }));

        return obs;
    }

    getPoll(resultId: string) {
        this.retPolls = [];
        let obs: Observable<any>;
        obs = from(this.fs.collection('polls').get().toPromise()
            .then((snapshot) => {
                snapshot.forEach((doc => {
                    if (doc.id === resultId) {
                        this.retPolls.push(doc.data());
                    }
                }));
            }));
        return obs;
    }

    getResult(poll) {
        this.results = [];
        let obs: Observable<any>;
        obs = from(this.fs.collection('results').get().toPromise()
            .then((snapshot) => {
                snapshot.forEach((doc => {
                    if (doc.data().pollID === poll) {
                        this.results.push(doc.data());
                    }
                }));
            }));
        return obs;
    }

    getResults() {
        this.results = [];
        let obs: Observable<any>;
        obs = from(this.fs.collection('results').get().toPromise()
            .then((snapshot) => {
                snapshot.forEach((doc => {
                    let data = doc.data();
                    data = {
                        choice1: data.choice1,
                        choice2: data.choice2,
                        pollID: data.pollID
                    };
                    this.results.push(data);
                }));
            }));

        return obs;
    }

    addResult(option, poll) {
        let obs: Observable<any>;
        obs = from(this.fs.collection('results', ref => ref.where('pollID', '==', poll)).get().toPromise());
        obs.subscribe(ret => {
            let one = ret.docs[0].data().choice1 as number;
            let two = ret.docs[0].data().choice2 as number;
            if (option === 1) {
                one++;
                this.fs.collection('results').doc(ret.docs[0].id).update({ choice1: one });
            } else {
                two++;
                this.fs.collection('results').doc(ret.docs[0].id).update({ choice2: two });
            }

        });
        return obs;

    }

    getCompletedResults() {
        let obs: Observable<any>;
        obs = from(this.fs.collection('results', ref => ref.where('completed', '==', true)).get().toPromise()
            .then(ret => {
                ret.docs.forEach((e) => {
                    if (e.data().completed === true) {
                        this.completedResults.push(e.data());
                    }
                });
            }));
        return obs;
    }

    updateResult(resultPollId: string) {
        let resultId = '';
        let obs: Observable<any>;
        obs = from(this.fs.collection('results').get().toPromise()
            .then((snapshot) => {
                snapshot.forEach((doc => {
                    if (doc.data().pollID === resultPollId) {
                        resultId = doc.id;
                        this.fs.collection('results').doc(resultId).update({completed: true});
                    }
                }));
            }));
    }

    signOut() {
        this.loggedIn = false;
        this.auth.auth.signOut();
    }

    addPoll(poll: Poll) {
        const id = this.fs.createId();
        this.pollsCollection.doc(id).set(poll);
        console.log(id);
        return id;
    }

    createResult(pollId: string) {
        return this.resultsCollection.add({
            choice1: 0,
            choice2: 0,
            pollID: pollId,
            completed: false
        });
    }

    checkIfVoted(user: User, selectedPoll: string): boolean {
        for (let i = 0; i < user.voted.length; i++) {
            if (user.voted[i] === selectedPoll) {
                return true;
            }
        }
        return false;
    }
}
