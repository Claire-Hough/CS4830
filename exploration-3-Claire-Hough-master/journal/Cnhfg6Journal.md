## Link to running code:
- https://www.clairehough.com/Challenges/Exploration3

## What did you explore?
For this exploration I decided to look into Ionic and incorporate it into my Exploration 2, which used Angular and Firebase.
With Ionic, I worked with forms, alerts, buttons, and the layout of ionic apps.

## Problems:
- The tutorial I originally followed uses an outdated version of Angular, so I had to figure out how to correctly install and import firebase, as well as change a couple methods for Angular 8. People listed out corrections in the comments of the video which was helpful.
- The tutorial used a template-based form rather than a reactive form. I decided to change my app to use a reactive form since the Save button was saving the form even when data was incomplete. I was able to work this out by referencing my Challenge 4 and a few online resources, since ionic forms are different than regular angular forms.
https://ionicthemes.com/tutorials/about/forms-and-validation-in-ionic
https://www.joshmorony.com/advanced-forms-validation-in-ionic-2/
- After changing over to using a reactive form, I realized that my update function no longer worked, and it had been depending on the properties of ngModel to repopulate the form when the user chose to update an entry. I finally found that I needed to use this.myForm.controls.MYINPUT.setValue('new value'); in order to populate the form. 
https://forum.ionicframework.com/t/dynamically-set-input-values-in-form-using-formbuilder/69384
- When I built my app and put it on my server, I noticed that my website didn’t show the ion-icons on my buttons. This is strange because the icons worked normally on my localhost. I added a script tag in my index.html file which enables ion-icons and adding this worked. My buttons now have their icons after building the app.
https://ionicons.com/usage/

## Journal:
For this exploration I decided to look into Ionic and incorporate it into my Exploration 2, which used Angular and Firebase. First, I made a new blank ionic-angular project. Then, I followed this tutorial: https://www.youtube.com/watch?v=H20l9ofyR54. Since it was made using an earlier version of Angular, I had to change some of the imports and methods he used. After I got a working todo list app, the first thing I did was add a function to sort the data when it was displayed. The guy who made the tutorial included a “priority” field on the Todo object, so I made a function that would order the data the user entered depending on how they prioritized it.
Then I went about changing my basic todo app into a Disney todo app. I changed the structure of my Todo interface a little to include a “park” value, and I used this to sort data entries by park on the home page. 
As I was testing my app, I realized that I was able to create incomplete or incorrectly filled out todo items when the user should be prevented from doing that. The tutorial I followed used template-driven forms, so I knew I needed to switch to reactive forms if I wanted to have proper form validation on my app.
Once I changed my form to a reactive form, I tried to add a “time” value to my Todo interface so users could mark a day and time that they wanted to go ride a certain ride. I tried to use my update function to edit a todo item and found that the form was showing up blank like I was creating a new item, rather than populated with the current info like I expected it to. I thought this was caused by adding the time value to my Todo interface, so I spent a long time trying to debug this. Finally, I realized that the form had been able to populate with the current info when it was coming from a template-driven form, but now that I had switched over to a reactive form, that was no longer happening. I decided since the form validation was used for both my add and update functions, and the populated form was only used for the update function, that I would leave the update form as it was in order to preserve my form validation and reactive form.
Once I figured that out, I changed the way data was displayed on the home page so it would be organized by Disney park. I also added the “time” value back into my Todo interface, changed the colors on the app’s headers, changed the “park” and “priority” values to ion-select-options in my form, and added an About button to tell users what all they can do with the app via an alert.
Then, I built and uploaded my app to my server. Everything worked as it did on my localhost except my buttons no longer had visible icons on them, so they were just left blank. 
I went back and tried to figure out how to populate a reactive form, since I figured there must be some way to do that if you can do it with template-driven forms. I found a forum online and figured it out! So now my app uses reactive forms AND has a properly working update function.
After that success, I tried again to figure out why my ion-icons weren’t showing on my built app. I added a script tag to enable ion-icons as though I hadn’t imported Ionic and that fixed the issue.

## What did you learn?
With this exploration I became more familiar with Ionic, reactive forms, form validation, and Firebase. Since I struggled with using reactive forms on Challenge 4, it was good practice to revisit it this week. Also, the tutorial I followed showed me how to implement update and delete functions. This week I found myself being very conscious of user-input and ways that people could enter incorrect values, so I made sure that most of the options on the form were drop-box options, rather than open-ended text fields which took a little extra learning to figure out.

## Screenshots
- This is the home page of the app.
    - ![Picture](https://github.com/Mizzou-CSIT2830-CS7830-F19/exploration-3-Claire-Hough/blob/develop/screenshots/Cnhfg6Screenshots/1_home_page.png)
- You can click the button on the left to read about what all users can do on the app.
    - ![Picture](https://github.com/Mizzou-CSIT2830-CS7830-F19/exploration-3-Claire-Hough/blob/develop/screenshots/Cnhfg6Screenshots/2_about_alert.png)
- Clicking the button on the right allows users to add a new item to the list.
    - ![Picture](https://github.com/Mizzou-CSIT2830-CS7830-F19/exploration-3-Claire-Hough/blob/develop/screenshots/Cnhfg6Screenshots/3_item_form.png)
- Users choose one of the four parks.
    - ![Picture](https://github.com/Mizzou-CSIT2830-CS7830-F19/exploration-3-Claire-Hough/blob/develop/screenshots/Cnhfg6Screenshots/4_park_option.png)
- Users enter the date and time they plan on visiting the attraction they entered.
    - ![Picture](https://github.com/Mizzou-CSIT2830-CS7830-F19/exploration-3-Claire-Hough/blob/develop/screenshots/Cnhfg6Screenshots/5_date_option.png)
- Users then choose how they want to prioritize the attraction.
    - ![Picture](https://github.com/Mizzou-CSIT2830-CS7830-F19/exploration-3-Claire-Hough/blob/develop/screenshots/Cnhfg6Screenshots/6_priority_option.png)
- This is the fully completed form.
    - ![Picture](https://github.com/Mizzou-CSIT2830-CS7830-F19/exploration-3-Claire-Hough/blob/develop/screenshots/Cnhfg6Screenshots/7_completed_form.png)
- The item is added under the appropriate park.
    - ![Picture](https://github.com/Mizzou-CSIT2830-CS7830-F19/exploration-3-Claire-Hough/blob/develop/screenshots/Cnhfg6Screenshots/8_item_added.png)
- Users can delete the item from their list by swiping left and clicking the check button.
    - ![Picture](https://github.com/Mizzou-CSIT2830-CS7830-F19/exploration-3-Claire-Hough/blob/develop/screenshots/Cnhfg6Screenshots/9_delete_function.png)
- Here's the code for my reactive form.
    - ![Picture](https://github.com/Mizzou-CSIT2830-CS7830-F19/exploration-3-Claire-Hough/blob/develop/screenshots/Cnhfg6Screenshots/10_form.png)
- My loadTodo and SaveTodo functions.
    - ![Picture](https://github.com/Mizzou-CSIT2830-CS7830-F19/exploration-3-Claire-Hough/blob/develop/screenshots/Cnhfg6Screenshots/11_load_and_save_todo.png)
- Here's some of the code in my todo.service.ts file.
    - ![Picture](https://github.com/Mizzou-CSIT2830-CS7830-F19/exploration-3-Claire-Hough/blob/develop/screenshots/Cnhfg6Screenshots/12_todo.service.ts.png)
- Here's how I'm displaying data on the home page.
    - ![Picture](https://github.com/Mizzou-CSIT2830-CS7830-F19/exploration-3-Claire-Hough/blob/develop/screenshots/Cnhfg6Screenshots/13_home_page_html.png)
