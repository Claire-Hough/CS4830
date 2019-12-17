## Link to running code:
- https://www.clairehough.com/Challenges/Exploration3

## Link to GitHub Repositiory
- https://github.com/Mizzou-CSIT2830-CS7830-F19/exploration-3-Claire-Hough/tree/master

## Problems:
- The tutorial I originally followed uses an outdated version of Angular, so I had to figure out how to correctly install and import firebase, as well as change a couple methods for Angular 8. People listed out corrections in the comments of the video which was helpful.
- The tutorial used a template-based form rather than a reactive form. I decided to change my app to use a reactive form since the Save button was saving the form even when data was incomplete. I was able to work this out by referencing my Challenge 4 and a few online resources, since ionic forms are different than regular angular forms.
https://ionicthemes.com/tutorials/about/forms-and-validation-in-ionic
https://www.joshmorony.com/advanced-forms-validation-in-ionic-2/
- After changing over to using a reactive form, I realized that my update function no longer worked, and it had been depending on the properties of ngModel to repopulate the form when the user chose to update an entry. I finally found that I needed to use this.myForm.controls.MYINPUT.setValue('new value'); in order to populate the form. 
https://forum.ionicframework.com/t/dynamically-set-input-values-in-form-using-formbuilder/69384
- When I built my app and put it on my server, I noticed that my website didn’t show the ion-icons on my buttons. This is strange because the icons worked normally on my localhost. I added a script tag in my index.html file which enables ion-icons and adding this worked. My buttons now have their icons after building the app.
https://ionicons.com/usage/

## Documentation:
- https://ionicframework.com/docs
- https://firebase.google.com
- https://angular.io

## Sources:
- Tutorial I followed: https://www.youtube.com/watch?v=H20l9ofyR54
- How to sort my data from firebase: https://stackoverflow.com/questions/48973200/sorting-list-array-from-firebase-database
- Ionic: 
Getting started: https://ionicframework.com/getting-started#cli
Ion-label: https://ionicframework.com/docs/api/label
Ion-alert: https://ionicframework.com/docs/api/alert
Form validation: https://ionicthemes.com/tutorials/about/forms-and-validation-in-ionic
Form validation: https://www.joshmorony.com/advanced-forms-validation-in-ionic-2/
Forms: https://ionicframework.com/docs/v3/developer-resources/forms/
Populate form: https://forum.ionicframework.com/t/dynamically-set-input-values-in-form-using-formbuilder/69384
Ion-select: https://ionicframework.com/docs/api/select
Icons: https://ionicframework.com/docs/v3/ionicons/
Color types: https://ionicframework.com/docs/api/button
Ion-datetime: https://ionicframework.com/docs/api/datetime
Ion-icons: https://ionicons.com/usage/
