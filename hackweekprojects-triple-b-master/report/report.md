 ## Link to Running Instance
 https://www.clairehough.com/Polling
 
 ## Introduction
 1. Group Name
    - Triple B
2. Group Members
    - Brad Schinker
    - Brock Weekley
    - Claire Hough
3. What we worked on
    - We created a polling app where users can login, vote on polls, create polls for others to vote on, view results, and close polls.
4. How to use the application
    - Every user, logged in or not, will be directed to the Home Page. Here you can see all of the polls that have been created by users. You can click on the poll you want to view, and you will be able to see the video, question, answer buttons, and dynamic chart displaying the most current poll results. 
    - If you are logged in, you will have access to the New Poll page where you can submit a new poll for users to vote on. To do this, you find the YouTube video of your choice and copy and paste the last 11 characters from the video’s url into the form. This is the Video ID. 
    - From there, you Write your question and two choices that people can vote on. Once you click submit, you will be redirected to the Home Page and should be able to see the new poll listed. 
    - Users are allowed to vote on each poll once. If you attempt to vote again, you will see an alert message informing you that you can only vote once. 
    - Creators of polls have the ability to end polls and close voting on them. If a poll is ended by its creator, you will see an alert informing you so if you attempt to vote on a completed poll. 
    - The Results Page displays all of the results for closed polls. You can see the question asked, and the chart that display which option won. 
    - The About Page describes what each page on the app is used for. Icons on the right side of each description help users associate the page name to the icons they see on the navbar. Users can click on each description to be linked to the page they just read about. 
    - The Login Page, accessible on the top right of the screen or from the About Page, allows users to login with their Google account, email, or view parts of the app anonymously. To login with your email, you must first create an account and set up your password before attempting to login with your information. On the login page, users can change the color of the navbar to the color of their choice.

## The Problem
- People often form strong opinions that are reinforced when they associate with like-minded individuals. We wanted to shine light on differing opinions by allowing people to see the true majority opinion on certain topics as well as give people the opportunity to see what they have in common in a live setting.

## Our Solution
- Our solution to the problem was to create a polling app where users can upload YouTube videos of which they would like to know others’ opinions, and vote on whether they agree or disagree with the question being asked. There is a bar chart next to the video which dynamically displays the current result of the poll. This way, users can clearly and easily see which opinion is the majority.

## Implementation
1. Technologies we used: Angular, Ionic, Firebase, YouTube API, Chart.js (ng2-charts)
    - This satisfies the “Responsive” requirement since we used Angular with Ionic, which looks nice on multiple devices.

2. Home Page
    - src/app/home
    - Implemented by Brad and Brock
    - This page utilizes Angular directives to dynamically create cards that display all of the polls open in our database. These polls can be identified by the question that is asked on the poll, as well as the title and thumbnail from the YouTube video that the poll is about. To do this, we took advantage of the Youtube API, which allows us to pass the user submitted YouTube video ID to google, and the API returns a JSON object that contains a large variety of information about that video to be displayed (located in src/app/services/youtube.service.ts). Other such information shown is a “live” status, where a red indicator will appear on the card to show that that particular poll contains voting on a live video.
    - When a poll card is clicked on, the user will be shown the detailed page for that poll. This includes the actual video being voted on, and a bar graph that shows the live results of the poll. Voting will continue until the creator of the poll clicks the “Finish Poll” button to declare that poll complete. Voting will then cease, and the result will be shown on the results page. Finished polls are still shown on the basic home page to be viewed, but the user will be presented with an error alert saying that the poll is closed.
    - This page is fully optimized for mobile, and displays the information differently based on screen size.
    - This satisfies the “Consistent Design and User Experience” requirement by dynamically changing based on user interaction.
    - This satisfies the “Persistent” requirement since data is loaded here from Firebase and users can refresh the page without the data being deleted.
    - This satisfies the “Provide some Security” requirement since users who are not logged in are blocked from voting on polls.
    - This satisfies the “Content” requirement since new visitors to the page will immediately see the polls that are available to be voted on.
    - This satisfies the “Error Handling” requirement because users will see an alert if they try to vote on a poll but are not logged in. Users will also see an alert if they try to vote on a poll multiple times, or try to vote on a poll that has been closed.
    - Referenced https://ionicons.com/usage/ for the ion-icons script tag as a backup on index.html.
    - Referenced https://ionicframework.com/docs/layout/grid#responsive-attributes for information on how to make the page size dynamic and optimized for mobile.
    - Referenced https://valor-software.com/ng2-charts/ for information on utilizing dynamic charts in our project.

3. New Poll Page
    - src/app/admin
    - src/app/services/general.service.ts (lines 49-58)
    - src/app/services/firebase.service.ts (lines 343-357)
    - Implemented by Claire
    - Code for alert referenced from Brad
    - Users who are logged in are able to submit the Video ID of the YouTube video they would like people to watch, the question they want people to answer, and two choices which people can vote on. Users will see descriptive errors under an input line if what they enter does not pass the form validation. If users are confused about what should be entered for each value, help icons located to the right of each input can be clicked on to display an alert that provides more information about what is required.
    - This satisfies the “Persistent” requirement since the data users enter into the form is saved to firebase upon submission.
    - This satisfies the “Provide some Security” requirement since this page is protected by auth guards. Also, form validators keep users from submitting illegal characters that may mess up the app.
    - This satisfies the “Error Handling” requirement because users will see informative error messages under each form input if the data they’ve entered does not pass validation.
    - Referenced https://ionicons.com/ for icons.
    - Referenced https://github.com/Mizzou-CSIT2830-CS7830-F19/challenge4-mvc-Claire-Hough for form validation.
    - Referenced https://forum.ionicframework.com/t/show-error-messages-when-form-validation/141804 for trouble when displaying error messages.

4. Results Page
    - src/app/results
    - Implemented by Brock and Brad
    - Once a poll is marked as finished on the home page by the poll creator (src/app/home/home.page.ts lines 238-245), it will appear in a card on the results page. Each card will display the question asked, a small bar graph showing the votes from when the poll was marked as finished, and the calculated winner of the poll based on those numbers. 
    - This page is fully optimized for mobile, so the number of card columns will be determined by how big the screen size is. All cards will be shown in a single row on all phones. 
    - We are having a small bug with the results page. When a poll is marked as finished on the home page, if the user goes directly to the results page after the operation, the result page will most likely duplicate all of the result cards. To fix this, all that needs to be done is a page refresh. We are unsure what causes this bug to occur. 
    - This satisfies the “Persistent” requirement since data is loaded here from Firebase and users can refresh the page without the data being deleted.
    - Referenced https://ionicframework.com/docs/layout/grid#responsive-attributes for information on how to make the page size dynamic and optimized for mobile.

5. Login Page
    - src/app/modal
    - Implemented by Brock
    - https://angularfirebase.com/lessons/google-user-auth-with-firestore-custom-data/
    - This satisfies the “Authentication” requirement since users are able to login with their Google account or other email in order to view private content which is the New Poll page, and the ability to vote on the Home Page.
    - This satisfies the “Provide some Security” requirement since form validators keep users from submitting illegal characters that may mess up the app and prevents unauthenticated users from voting and only email verified users can create a poll.
    - This satisfies the “Error Handling” requirement because users will see error messages if their password is incorrect, and when they create a new account if the password they enter twice isn’t the same. They will also see error messages if their password is too short and if the email they enter isn’t written like a valid email address.
    - Referenced,     
    - https://angular.io/api/forms/FormControl
    - https://www.concretepage.com/angular-2/angular-2-formcontrol-example for form validation.

6. About Page
    - src/app/about/about
    - Implemented by Claire
    - The About Page describes what each page, accessible from the navbar, is used for. Each description can be clicked on for users to easily visit the page they just read about, and the icons on the right help the user associate the information they are reading with the icons seen on the navbar.
    - This satisfies the “Overall Purpose” requirement since this page is where users can read about what each page is used for and it provides a description of the creators of the app and why we chose this as our project.
    - Referenced https://ionicons.com/ for icons.

7. NavBar
    - src/app/app.component.html
    - Implemented by Brock
    - https://ionicframework.com/docs/v3/api/components/toolbar/Navbar/
    - It’s an ionic navbar with router links
    - Can be changed on the user profile page using ionic’s across app styles
    - This satisfies the “Consistent Design and User Experience” requirement by making the app have a cohesive appearance.
    - This satisfies the “Well-Structured” requirement because making changes to this file changes the navbar on all pages of the app.

8. Firebase Service
    - src/app/services/firebase.service.ts
    - Lines (43-65, 343-366) implemented by Claire
        - The first lines in the constructor are used to initialize FireStore collections for Polls and Results.
        - The functions addPoll and createResult are used by the New Poll page (src/app/admin/admin.ts) to add the form data submitted by the user to firebase. AddPoll returns the pollId stored in Firebase in order to store it in the result document by calling createResult and effectively link it to the newly created poll.
        - Referenced https://github.com/angular/angularfire/blob/master/docs/firestore/collections.md for the Firebase ID creation in addPoll.
    - Lines (324-336) implemented by Brad
        - This function is called from the home.page.ts file when the creator of a poll clicks the “finish poll button”. Since we do not store the Id of the result document on the document for quick access, this function required a bit more machinery to find the right document to update. After it finds the correct document based on the PollId we did actually store, the finished boolean is updated to true. That way, future result queries will be filtered to display this poll on the results page. 
    - Lines (33-41, 68-322, 338-341) implemented by Brock
        - Brock created the following functions: googleLogin, anonymousLogin, emailLogin, emailSignup, oAuthLogin, updateUserData, watchUsers, watchPolls, watchResults, getUsers, updateUser, getPolls, getPoll, getResult, getResults, addResult, getCompletedResults, and signOut. These functions provide the apps authentication, watch the firestore db for updates, and get the firebase values, respectively. 
    - This satisfies the “Well-Structured” requirement because having services allows us to reuse methods and make changes in one central location.
    - This satisfies the “Architecture” requirement because this service (the model) is separate from the View.
    - This satisfies the “Persistent” requirement because Firebase offers persistent storage.

9. General Service
    - src/app/services/general.service.ts
    - Lines (12-49, 60-69) implemented by Brad
        - The presentOkAlert() is a general function that allows you to pass a subheader and message to the function. This will create a simple “okay to confirm” alert that is used in many places throughout the app to let the user know about changes that are occurring 
        - The presentAlertForLogin() let the user know that they must be logged in with either gmail or a general email to access the create a poll/admin page. This alert function will only be called if the user is not logged in and do not meet those parameters. 
        - The presentLogoutAlert() will be used to alert the user that they have either successfully logged out, or that they are not logged into anything as it is. It is very similar to the present ok function. 
    - Lines (49-58) implemented by Claire
        - The formHelpAlert is called when users are filling out the form on the New Poll Page (arc/app/admin/admin.page.ts) and they click the Help icons to see a description of what each form value requires. It is similar to presentOkAlert, which displays alerts that just need an “Ok” button, but this function takes in the header parameter as well, rather than just displaying it as “Alert”.
    - This satisfies the “Well-Structured” requirement because having services allows us to reuse methods and make changes in one central location.
    - This satisfies the “Architecture” requirement because this service (the model) is separate from the View.
    - References https://ionicframework.com/docs/api/alert for information about how to use Ionic alerts.

10. YouTube Service
    - src/app/services/youtube.service.ts
    - Implemented by Brad
    - This service models the data for retrieving YouTube information from the YouTube API. The function in this service makes a GET request that contains the desired API endpoint. This endpoint is made up of the video ID of the desired video and the generated API key that was needed to access the YouTube API. Angular’s HttpClient makes sending and retrieving the data from the request very easy because it takes care of all of the data handling and sending the actual request. It then returns an object containing the data to be sent to any component that requires it. 
    - This satisfies the “Well-Structured” requirement because having services allows us to reuse methods and make changes in one central location.
    - This satisfies the “Architecture” requirement because this service (the model) is separate from the View.
    - This satisfies the “Content” requirement since using YouTube’s API makes it easy to see what videos have been uploaded to the app to be voted on.
    - Referenced https://developers.google.com/youtube/v3/getting-started for information about implementing the youtube api and https://angular.io/guide/http for using HttpClient to make said call.

## Knowledge Gained
This project was predominantly built upon the knowledge we have obtained in class or from research for explorations. We expanded our knowledge on tools such as the Angular framework and Firebase cloud storage while implementing them in this project. A major part of our project revolved around playing videos. We had to research the best way to not only display a video from youtube, but also how to dynamically control when the video is played/paused and which video is being played. To provide additional information on the videos being played, we also did research on how to extract specific information about each video from the YouTube API. The JSON object return contained extensive information, so we had to figure out exactly how to gain access to the specific information we were looking for. After that, most of the knowledge we obtained came from implementing an oAuth system, and using user authentication to guard against certain types of users not being able to access certain functionality of our site. Knowledge gained about the Ionic framework was also helpful in creating a sleek and functional application, one which contains many of the easy-to-use features of most modern apps on the market today.

## Future Work
If we had more time to work on this, we had the idea to allow users to ask multiple questions per video rather than just one question per video. We could implement a way to limit the number of polls each user can make, and find a better way to indicate when polls have been closed. We could add a maximum amount of time that polls will stay open so they don’t remain that way indefinitely. Also, we could implement more complex form validation to ensure the questions that users submit are appropriate and that the Video ID they submit corresponds to an existing YouTube video. It would also stabilize the app home page if instead of calling the YouTube API every time the home page is loaded, it was only called when polls were created, and stored the desired information from the JSON object inside firebase along with the user entered poll data. This would ensure that the correct video was associated with the correct poll on the homepage cards. We were also thinking that we could allow users to submit videos from sites other than YouTube.

## Screenshots
1. This is what the Home Page looks like.
    - ![Picture](https://github.com/Mizzou-CSIT2830-CS7830-F19/hackweekprojects-triple-b/blob/master/screenshots/1_Home_Page.png)
2. This is what the New Poll Page looks like.
    - ![Picture](https://github.com/Mizzou-CSIT2830-CS7830-F19/hackweekprojects-triple-b/blob/master/screenshots/2_New_Poll_Page.png)
3. When filling out the form, users can click on the question marks on the right to read a description about what is required for each input. This is the pop-up for the Video ID input.
    - ![Picture](https://github.com/Mizzou-CSIT2830-CS7830-F19/hackweekprojects-triple-b/blob/master/screenshots/3_Video_Id_Help.png)
4. This is the help pop-up for the Question input.
    - ![Picture](https://github.com/Mizzou-CSIT2830-CS7830-F19/hackweekprojects-triple-b/blob/master/screenshots/4_Question_Help.png)
5. This is the help pop-up for the Voting Choice inputs.
    - ![Picture](https://github.com/Mizzou-CSIT2830-CS7830-F19/hackweekprojects-triple-b/blob/master/screenshots/5_Choices_Help.png)
6. On each of the form inputs there are validation errors that will inform the user what is making their data invalid and incapable of submitting. Here, the Video ID is required.
    - ![Picture](https://github.com/Mizzou-CSIT2830-CS7830-F19/hackweekprojects-triple-b/blob/master/screenshots/6_Video_Id_Required.png)
7. This form validation checks that the Video ID can only contain certain characters.
    - ![Picture](https://github.com/Mizzou-CSIT2830-CS7830-F19/hackweekprojects-triple-b/blob/master/screenshots/7_Video_Id_Characters.png)
8. This form validation requires that a Question be submitted.
    - ![Picture](https://github.com/Mizzou-CSIT2830-CS7830-F19/hackweekprojects-triple-b/blob/master/screenshots/8_Question_Required.png)
9. This form validation only allows certain characters to be included in the Question.
    - ![Picture](https://github.com/Mizzou-CSIT2830-CS7830-F19/hackweekprojects-triple-b/blob/master/screenshots/9_Question_Characters.png)
10. This is an example of a completed form.
    - ![Picture](https://github.com/Mizzou-CSIT2830-CS7830-F19/hackweekprojects-triple-b/blob/master/screenshots/10_Completed_Form.png)
11. Here we can see the poll we just submitted on the Home Page.
    - ![Picture](https://github.com/Mizzou-CSIT2830-CS7830-F19/hackweekprojects-triple-b/blob/master/screenshots/11_Poll_On_Home_Page.png)
12. This alert informs users that they cannot vote more than once on a poll.
    - ![Picture](https://github.com/Mizzou-CSIT2830-CS7830-F19/hackweekprojects-triple-b/blob/master/screenshots/12_Can_Only_Vote_Once.png)
13. This is the alert users will see when they close a poll that they created.
    - ![Picture](https://github.com/Mizzou-CSIT2830-CS7830-F19/hackweekprojects-triple-b/blob/master/screenshots/13_Closed_Poll.png)
14. This is the alert other users will see if they try to vote on a poll that has been closed.
    - ![Picture](https://github.com/Mizzou-CSIT2830-CS7830-F19/hackweekprojects-triple-b/blob/master/screenshots/14_Cant_Vote_On_Finished_Poll.png)
15. This is what the Results Page looks like.
    - ![Picture](https://github.com/Mizzou-CSIT2830-CS7830-F19/hackweekprojects-triple-b/blob/master/screenshots/15_Results_Page.png)
16. This is what the About Page looks like.
    - ![Picture](https://github.com/Mizzou-CSIT2830-CS7830-F19/hackweekprojects-triple-b/blob/master/screenshots/16_About_Page.png)
17. This is the bottom of the About Page, with the About Us section.
    - ![Picture](https://github.com/Mizzou-CSIT2830-CS7830-F19/hackweekprojects-triple-b/blob/master/screenshots/17_About_Page_Scroll.png)
18. This is what the Login Page looks like.
    - ![Picture](https://github.com/Mizzou-CSIT2830-CS7830-F19/hackweekprojects-triple-b/blob/master/screenshots/18_Login_Page.png)
19. This is what users will see if they aren't logged in and try to create a new poll.
    - ![Picture](https://github.com/Mizzou-CSIT2830-CS7830-F19/hackweekprojects-triple-b/blob/master/screenshots/19_Guarded_New_Poll.png)
20. This is what users will see if they aren't logged in and try to vote on a poll.
    - ![Picture](https://github.com/Mizzou-CSIT2830-CS7830-F19/hackweekprojects-triple-b/blob/master/screenshots/20_Blocked_Voting.png)
21. When logging in with your email, users will be notfied if the email is not in the form of a valid email address.
    - ![Picture](https://github.com/Mizzou-CSIT2830-CS7830-F19/hackweekprojects-triple-b/blob/master/screenshots/21_Email_Not_Valid.png)
22. The login form notifies users that a password is required.
    - ![Picture](https://github.com/Mizzou-CSIT2830-CS7830-F19/hackweekprojects-triple-b/blob/master/screenshots/22_Password_Required.png)
23. Users see a pop-up to signal to them that they successfully logged out.
    - ![Picture](https://github.com/Mizzou-CSIT2830-CS7830-F19/hackweekprojects-triple-b/blob/master/screenshots/23_Logout_Alert.png)
