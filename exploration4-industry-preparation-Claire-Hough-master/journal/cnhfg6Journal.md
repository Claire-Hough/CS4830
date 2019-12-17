## Link to Running Instance
- https://www.clairehough.com/Challenges/Exploration4

## Journal
- When looking for a job posting for this exploration, I was inspired by the assignment's description where Professor Wergeles suggested that React.js would be a viable option for people who haven't explored it earlier in the semester. I have been interested in learning other frontend frameworks, so I decided to look and see if there were any frontend developer jobs that required experience with React.
- It's always been a dream of mine to work for Disney, so I found a listing on their career website, which you can see here: https://jobs.disneycareers.com/job/greenwich/software-engineer-front-end-web-development/391/14243217
- The job requires applicants to be knowledgeable in HTML, JavaScript, CSS, TypeScript, SCSS, NodeJS, Python, and React. I am familiar with most of those topics from class except React, so this seemed like the perfect position for me.
- I decided the best place to learn about React was from the React.js docs themselves, so I went on the website and followed the tutorial there (https://reactjs.org/tutorial/tutorial.html).
- The tutorial was very well written and walked me through how to make a well-rounded app for tic-tac-toe. From this I was able to become familiar with the structure and syntax of React.
- React is a lot different from what I was expecting, since I'm so used to the highly formatted structure of Angular. The tutorial had me only using index.js, index.css, and index.html files. However, I'm sure this tutorial was keeping things simple by not going into how to separate and maintain components and just had me write all of my javascript in index.js.
- I learned that in React, you can pass data between components through parameters called "props" and the components return what to display on the webpage in its render() function.
- The tutorial demonstrated how immutability - refraining from changing data directly - is useful when implementing the history function of the app, where users can go back and view past moves in the game. If I didn't slice() the squares array after each move in order to edit a copy of the data rather than the current board data itself, it would have been harder to track each move as users play the game.
- I thought it was interesting that there is a sort of shortcut in React where you can write components as "function components" where they just take in props and return what should be rendered.
- From the tutorial, I learned that it's important when rendering lists to include a unique key with each list item so that the items are consistently displayed in the same order. It was surprising to see that my code would not compile until I added keys to the history buttons.
- To go beyond the tutorial, I increased the board size from 3x3 to 5x5 for Epic tic-tac-toe. I had to change how many squares are rendered by the Board component, the numbers assigned to those squares so a winner can be determined, the winning line combinations, and the logic checking that a player has won no matter the order the line was filled in. I also added a title, which required some additions to be made to what was rendered by the Game component.

## Problems/Troubleshooting
- I didn't run into many problems, just a few times where I mistyped something from the tutorial or accidently added a function to the wrong component since everything was in the index.js file.
- The tutorial was a little limiting, and I would've liked to learn more about how to style my web page with the dynamically generated tic-tac-toe board, and how separate components work in React. Currently, my webpage is just white with black text, and all of my components are in the same file.
- The tutorial hardcoded the winning box combinations, which when I scaled up the game board from 3x3 to 5x5 proved to be something I would want to automate/dynamically check if I were developing a full web app.

## Screenshots
1. This is the home page of the web app.
    - ![Picture](https://github.com/Mizzou-CSIT2830-CS7830-F19/exploration4-industry-preparation-Claire-Hough/blob/develop/screenshots/1_Home_Page.png)
2. Users take turns playing. Whose turn it is is displayed at the top right, and as moves are made, they are saved to the history that displays on the right.
    - ![Picture](https://github.com/Mizzou-CSIT2830-CS7830-F19/exploration4-industry-preparation-Claire-Hough/blob/develop/screenshots/2_Players_Take_Turns.png)
3. When the game is won, the winner is displayed on the top right. Users are unable to add more X's and O's to the board once the game is won.
    - ![Picture](https://github.com/Mizzou-CSIT2830-CS7830-F19/exploration4-industry-preparation-Claire-Hough/blob/develop/screenshots/3_Finished_Game.png)
4. Here I have gone back to Move 2 after the game was finished as part of the history functionality.
    - ![Picture](https://github.com/Mizzou-CSIT2830-CS7830-F19/exploration4-industry-preparation-Claire-Hough/blob/develop/screenshots/4_History_Move_2.png)
5. If you want to go back and change a move, you can chose the history you want and then play the game from there. In this example, I went back to Move 2 and then played a new Move 3, which then set the history to Move 3 as the most current change.
    - ![Picture](https://github.com/Mizzou-CSIT2830-CS7830-F19/exploration4-industry-preparation-Claire-Hough/blob/develop/screenshots/5_New_Move_3.png)