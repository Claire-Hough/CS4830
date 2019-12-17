## Link to running instance:
- https://www.clairehough.com/Challenges/Challenge5

## Important Note
- If the app appears to not be populating the data after switching between the archive and home page, swipe down to refresh the page. The data should populate as expected after that.

## Hybrid/Native Comparison
Making hybrid apps using angular and ionic is an easy way to quickly develop functional, visually pleasing apps that can be used on both the web and mobile devices. I like the fact that I didn't have to know how to develop mobile apps and was able to make my app in the same fashion that we've been making web pages this whole semester.

## Problems/Troubleshooting
1. I had problems with my form not being able to store the "archived" variable. I realized that I had named the form control item "archive", but since this was being stored directly in firebase, the rest of my app wasn't equating the "archive" value to "archived", as I have it in my Assignment interface.
2. I had slight problems with my form, which turned out to be me just not having all the required imports.
    - https://stackoverflow.com/questions/47372336/error-staticinjectorerrorformbuilder-when-running-ng-test
3. My app wasn't consistently populating the Archived and Home pages as I switched back and forth between them, so I had to add a refresh function so users could manually refresh the page and cause the page to populate.
    - https://ionicframework.com/docs/api/refresher-content
    - https://stackoverflow.com/questions/43985752/how-to-reload-page-the-whole-page-in-angular-2
4. Building my code as an Android application was a bit of a challenge. I decided to use capacitor since it had been recommended to me by serveral people. There are a lot less resources online for building apps with capacitor versus cordova, so I had to spend more time figuring out what commands I should run. I referenced these links when building my app:
    - https://capacitor.ionicframework.com/docs/getting-started/with-ionic/
    - https://github.com/angular/angularfire/issues/1563
    - https://capacitor.ionicframework.com/docs/getting-started/
    - https://www.joshmorony.com/deploying-capacitor-applications-to-android-development-distribution/
    - https://ionicframework.com/docs/building/android
    - https://ionicframework.com/docs/cli/commands/capacitor-run
    - https://developer.android.com/about/versions/nougat/android-7.0.html#apk_signature_v2

## Journal
I decided to make an Assignment Manager app for android using Firebase to persistently store data. I had to include persistent storage, which I figured out from this link.
    - https://github.com/angular/angularfire/issues/1563
I referenced these sites when making the app:
    - https://www.youtube.com/watch?v=H20l9ofyR54
    - https://www.npmjs.com/package/@angular/fire
    - https://stackoverflow.com/questions/47372336/error-staticinjectorerrorformbuilder-when-running-ng-test
    - https://ionicframework.com/docs/api/textarea
    - https://ionicframework.com/docs/v3/ionicons/
Then, I emulated my app on Android studio. After that worked, I tried to run my app on an old phone, which worked as well. The pictures below are of the app which is downloaded on the phone.
After testing that my app works on an actual phone, I built a production version of my app.

## Screenshots
1. This is what the app looks like when you first open it.
    - ![Picture](https://github.com/Mizzou-CSIT2830-CS7830-F19/challenge-5-hybrid-mobile-apps-Claire-Hough/blob/develop/screenshots/Cnhfg6Screenshots/1_opening_page.jpg)
    - ![Picture](https://github.com/Mizzou-CSIT2830-CS7830-F19/challenge-5-hybrid-mobile-apps-Claire-Hough/blob/develop/screenshots/Cnhfg6Screenshots/8_opening_page.png)
2. Click the "+" button on the right, and you can add an assignment. This is what the empty form looks like.
    - ![Picture](https://github.com/Mizzou-CSIT2830-CS7830-F19/challenge-5-hybrid-mobile-apps-Claire-Hough/blob/develop/screenshots/Cnhfg6Screenshots/2_form_page.jpg)
    - ![Picture](https://github.com/Mizzou-CSIT2830-CS7830-F19/challenge-5-hybrid-mobile-apps-Claire-Hough/blob/develop/screenshots/Cnhfg6Screenshots/9_details_page.png)
3. Here I have entered some test values into the form.
    - ![Picture](https://github.com/Mizzou-CSIT2830-CS7830-F19/challenge-5-hybrid-mobile-apps-Claire-Hough/blob/develop/screenshots/Cnhfg6Screenshots/3_form_filled_out.jpg)
    - ![Picture](https://github.com/Mizzou-CSIT2830-CS7830-F19/challenge-5-hybrid-mobile-apps-Claire-Hough/blob/develop/screenshots/Cnhfg6Screenshots/10_details_filled_out.png)
4. After clicking "Save", the assignment shows up on the home page. It displays the assignment name with the class name underneath it, and the due date on the right.
    - ![Picture](https://github.com/Mizzou-CSIT2830-CS7830-F19/challenge-5-hybrid-mobile-apps-Claire-Hough/blob/develop/screenshots/Cnhfg6Screenshots/4_assignment_added.jpg)
    - ![Picture](https://github.com/Mizzou-CSIT2830-CS7830-F19/challenge-5-hybrid-mobile-apps-Claire-Hough/blob/develop/screenshots/Cnhfg6Screenshots/11_assignment_added.png)
5. You can swipe left on an assignment to mark it as complete.
    - ![Picture](https://github.com/Mizzou-CSIT2830-CS7830-F19/challenge-5-hybrid-mobile-apps-Claire-Hough/blob/develop/screenshots/Cnhfg6Screenshots/5_archive_assignment.jpg)
    - ![Picture](https://github.com/Mizzou-CSIT2830-CS7830-F19/challenge-5-hybrid-mobile-apps-Claire-Hough/blob/develop/screenshots/Cnhfg6Screenshots/12_archive_assignment.png)
6. This is the archives page with the newly archived assignment being displayed.
    - ![Picture](https://github.com/Mizzou-CSIT2830-CS7830-F19/challenge-5-hybrid-mobile-apps-Claire-Hough/blob/develop/screenshots/Cnhfg6Screenshots/6_archives_page.jpg)
    - ![Picture](https://github.com/Mizzou-CSIT2830-CS7830-F19/challenge-5-hybrid-mobile-apps-Claire-Hough/blob/develop/screenshots/Cnhfg6Screenshots/13_archives_page.png)
7. You can swipe left on an archived assignment to delete it permanently.
    - ![Picture](https://github.com/Mizzou-CSIT2830-CS7830-F19/challenge-5-hybrid-mobile-apps-Claire-Hough/blob/develop/screenshots/Cnhfg6Screenshots/7_delete_archive.jpg)
    - ![Picture](https://github.com/Mizzou-CSIT2830-CS7830-F19/challenge-5-hybrid-mobile-apps-Claire-Hough/blob/develop/screenshots/Cnhfg6Screenshots/14_delete_archive.png)