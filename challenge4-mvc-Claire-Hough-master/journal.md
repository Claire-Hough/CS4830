# Journal
## Link to runnning code
https://www.clairehough.com/Challenges/Challenge4

A detailed summary of what you did
Talk about each component and what it is supposed to do
Review your architecture and determine if there is a better way to implement
Compare MVC and Angular’s MVC
Resources you utilized
Challenges you faced and how you overcame them
Screenshots
Include your screenshots in the journal with captions
You can directly reference the screenshots in the screenshots/ directory from the markdown

## Summary
1. City component
    - Displays a list of all cities that have reviewed restaurants in them
    - Displays the number of reviewed restaurants for each city
    - Displays the total number of reviewed restaurants in the system
    - You can click on each city and see the restaurants for that city
    - At the bottom there is a link where you can add a new review
2. Restaurant Component
    - Displays a list of all restaurants in the specific city
    - Displays the cuisine served at each restaurant
    - Displays the average review (out of 5) for each restaurant
    - Displays the total number of reviews for each restaurant
    - You can click on a restaurant to see the reviews for that restaurant
    - You can click the browser's back button to go back to the city component
3. Review Component
    - Displays the list of all reviews for that specific restaurant
    - Displays the author of each review
    - Displays the rating for each review
    - Displays the body of each review
    - You can click the browser's back button to go back to the restaurant component
4. Add-Review Component
    - User can add a new city
    - User can add a new restaurant
    - User can add a new review
    - Angular validation checks to make sure form is filled out correctly
    - When the user clicks "Submit", they are redirected back to the city component

5. Architecture
    - I feel like I followed the MVC architecture pretty closely. I deal with the data in my DataService and only read/filter data in my components. There were a few times where I was copying and pasting lines of code (so I probably could've made them into their own functions), but overall I didn't repeat myself too much.
    - Angular's MVC is a little less restrictive than the MVC architecture we use in Java. Angular's use of component.ts files already kind of separates the data-handling from the view, so having DataService was more of a convienient way to keep shared/similar functions in one place and handle data safely away from the component.

6. Resources
    - Forms
        - https://angular.io/start/forms
        - https://stackblitz.com/edit/angular-material-editable-table-fazhbc?file=src%2Fapp%2Fapp.component.html
        - https://appdividend.com/2019/06/07/angular-8-forms-tutorial-angular-reactive-and-template-forms-example/
        - https://angular.io/guide/reactive-forms
        - https://angular.io/guide/user-input
    - Form Validation
        - https://angular.io/guide/form-validation
        - https://malcoded.com/posts/angular-reactive-form-validation/
        - https://stackoverflow.com/questions/44493815/angular2-only-allow-alpha-characters-to-be-entered-in-an-input
        -  
    - Testing (DataService)
        - https://angular.io/guide/testing
    - Routing
        - https://www.techiediaries.com/angular-router-routerlink-navigate-navigatebyurl/
        - https://angular-2-training-book.rangle.io/routing/routeparams
        - https://plnkr.co/edit/UjUlWKpO0wxQfB3P6YUG?p=preview
    - Services
        - https://angular.io/guide/architecture-services
        - https://angular.io/cli/generate#service-command
        - https://www.youtube.com/watch?v=69VeYoKzL6I&list=PLC3y8-rFHvwhBRAgFinJR8KHIrCdTkZcZ&index=19
    - Id Generator
        - https://stackoverflow.com/questions/1349404/generate-random-string-characters-in-javascript
    - Arrays
        - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find

7. Challenges
    - I struggled figuring out where to start. At first, I thought I should write Add-Review first so I could populate the arrays and go from there, but I eventually realized that it would be easier to write the required functions first and test them with some hard-coded data. Then I did the add-review last with a better understanding of my city, restaurant, and review structures.
    - I had trouble figuring out which type of form I should use. After reading the angular documentation, I figured out that I should use a Reactive Form.
    - Form Validation gave me some trouble since there are so many places where you have to write the validation in order for it to work.

8. Screenshots
![Picture](https://github.com/Mizzou-CSIT2830-CS7830-F19/challenge4-mvc-Claire-Hough/blob/develop/screenshots/openingPage.png)
    - This is the opening page of my app.
![Picture](https://github.com/Mizzou-CSIT2830-CS7830-F19/challenge4-mvc-Claire-Hough/blob/develop/screenshots/addReview.png)
    - This is what my add-review component looks like
![Picture](https://github.com/Mizzou-CSIT2830-CS7830-F19/challenge4-mvc-Claire-Hough/blob/develop/screenshots/exampleValidationBodyIsRequired.png)
    - Here is an example of the form validation
![Picture](https://github.com/Mizzou-CSIT2830-CS7830-F19/challenge4-mvc-Claire-Hough/blob/develop/screenshots/cityNowAdded.png)
    - You can see that now the review has been added
![Picture](https://github.com/Mizzou-CSIT2830-CS7830-F19/challenge4-mvc-Claire-Hough/blob/develop/screenshots/restaurantComponent.png)
    - This is the restaurant component of the city I just made.
![Picture](https://github.com/Mizzou-CSIT2830-CS7830-F19/challenge4-mvc-Claire-Hough/blob/develop/screenshots/ReviewComponent.png)
    - This is the review component of the city I just made.
![Picture](https://github.com/Mizzou-CSIT2830-CS7830-F19/challenge4-mvc-Claire-Hough/blob/develop/screenshots/DataService.png)
![Picture](https://github.com/Mizzou-CSIT2830-CS7830-F19/challenge4-mvc-Claire-Hough/blob/develop/screenshots/Routing.png)
![Picture](https://github.com/Mizzou-CSIT2830-CS7830-F19/challenge4-mvc-Claire-Hough/blob/develop/screenshots/Validators.png)
![Picture](https://github.com/Mizzou-CSIT2830-CS7830-F19/challenge4-mvc-Claire-Hough/blob/develop/screenshots/createReview.png)
