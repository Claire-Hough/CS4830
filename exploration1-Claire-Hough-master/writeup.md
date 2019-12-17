# Exploration 1 Writeup

## Links to your code running
https://angular-c3td6n.stackblitz.io

## What framework did you choose and why?
I chose to look in Angular since that is what Professor Wergeles recommended. I have had very brief experience with AngularJS during my summer internship, so I was interested in seeing how Angular differs from AngularJS and to refresh my memory of the basic syntax, as well as gain a stronger understanding of why Angular main concepts and structure.

## What did you learn about this framework?
I learned that Angular is slightly different from AngularJS. I found that AngularJS is a separate framework that is maintained parallel to Angular. Angular is written using TypeScript, which is a superset of JavaScript, and it makes it easy for developers to host sites on just one page. Angular's syntax is slightly different from AngularJS's, and simplifies some ng functions. 
When making a demo app, I became familiar with template notation, the @Component decorator, the structure of .ts files, separating parts of a page into components, using directives to populate template info, and basic Angular syntax. 

## What resources did you utilize?
https://gorrion.io/blog/angularjs-vs-angular

  This is a well structured blog that highlights the main differences between Angular and AngularJS. It helped me see the distinctions between syntax, directives, components, and templates.

https://www.educba.com/angular-js-vs-angular/
  
  This site offers an easy to digest diagram and bullet points that outline the main differences between Angular and AngularJS. This site offers a more comprehensive list than the first link.

https://www.quora.com/What-is-the-difference-between-Angular-and-AngularJS
https://www.quora.com/What-is-the-difference-between-Angular-1-and-Angular-2/answer/Krishana-3
  
  These two links were helpful in seeing how people would give a crash course about Angular, rather than the more sophicated sites linked above. These forums had examples of actual code, which made the syntactic differences between Angular and AngularJS stick in my mind. They also offered simpler explanations of main concepts which I used to confirm that I understood the main concepts of each framework. 

https://www.youtube.com/playlist?list=PL0vfts4VzfNiX5kG1Q8pg2JQ_SB0_ADM1
  
  This playlist offered a walkthrough of basic Angular concepts by showing examples in code. I referenced some of the videos in this playlist when making my demo app in Stackblitz.

https://www.youtube.com/watch?v=16rQyEQtpyQ&list=PLC3y8-rFHvwhBRAgFinJR8KHIrCdTkZcZ&index=4
  
  This playlist is a comprehensive collection of basic Angular concepts. It was a little harder to follow than the playlist above since it discussed concepts in more higher level terms and used diagrams rather than code examples to explain main points.

https://stackblitz.com/edit/ngfor-example
  
  I referenced this Stackblitz example when I was having trouble implementing the ngFor directive. It helped me realized I was coding some things incorrectly.

## What do you still want to learn about this framework?
I would like to know more about how I should ultilize components efficiently and effectively, how to structure my apps so code is easy to follow when using multiple components, and I'd like to have a more in-depth understanding of routing and binding.

## What problems did you run into?
Making a demo app in Stackblitz was pretty straightforward, but I did run into a few hiccups. First, I wasn't sure how files were associated with each other so I started editing the wrong component.ts file. Once my changes were not being shown correctly, I realized that the @Component decorator specifies which .html and .css files are associated with the .ts file. Then, I had trouble implementing the ngFor directive. I referenced the last link above and realized that I had some values that needed to be in quotation marks, and I realized that I left off the semicolon that belongs at the end of the array. Also, the link above helped me correct my syntax for the ngFor directive in my .html file.
