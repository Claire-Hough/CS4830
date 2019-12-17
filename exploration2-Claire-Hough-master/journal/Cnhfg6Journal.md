## Journal
- When first approaching this exploration, I decided to try to implement a MEAN stack.
- I found a tutorial that promised to walk me through setting up a RESTful app with Node:
    - https://www.codementor.io/olatundegaruba/nodejs-restful-apis-in-10-minutes-q0sgsfhbd
but I had trouble figuring out how to install MongoDB on my EC2 instance. 
- Because of this, I decided to follow the mongodb tutorial suggested by Professor Wergeles:
    - https://www.mongodb.com/blog/post/the-modern-application-stack-part-2-using-mongodb-with-nodejs
This tutorial was more comprehesive than the other one, so I decided to go along with it and try using MongoDB Atlas and MongoPop to test some simple Mongo functions. I had a couple hiccups when trying to run MongoPop on my localhost, but I realized that I just needed to run "npm start" in order for it to launch. 
- After that small success, I hit a roadblock when I tried to connect to my MongoDB Atlas cluster. The resources I found online seemed to be for an older version of MongoDB Atlas, and I couldn't find anything using the new connection method, which is structured differently that the online tutorials. I watched these videos which helped me notice that the connection structure is different:
    - https://www.youtube.com/watch?v=z7IE1NHh6FE
    - https://www.youtube.com/watch?v=eS8R7z_FaVo
- These were the only things I could find on Google when searching "MongoPop". It was surprising to find so few resources online, especially since the MongoDB website itself recommends to use that project in it's tutorial. Anyway, the tutorial had no troubleshooting suggestions, so I decided to cut my losses and look into Firebase. It felt like I was spending more time troubleshooting rather than learning the basics of MongoDB. I don't think the time I spent researching MongoDB was wasted, though. I detailed what I learned from that in the "What I Learned" section below. 
- When I switched to Firebase, there was an abundance of tutorials and documents online to reference in order to get started. I like the UI of Firebase much more than that of MongoDB Atlas. First, I followed this tutorial:
    - https://www.youtube.com/playlist?list=PL4cUxeGkcC9itfjle0ji1xOZ2cjRGY_WB
to set up my Firebase account, but I quickly realized that I needed a tutorial that specifically uses Firebase with Angular. 
- So, I searched for a new tutorial and found this one:
    - https://www.youtube.com/watch?v=mqWXRX5fxGQ&t=764s
- I trusted it since I've watched videos made by this guy in the past. This is where I ran into another wall. I was having trouble getting VS Code to recognize my AngularFireModule import, and I thought this was due to me not installing Firebase properly. 
- After a while, I realized that the tutorial was for Angular 4 and the imports as well as the installation commands had changed for Angular 8. Thus, I needed to find a new tutorial and landed on this one:
    - https://www.youtube.com/watch?v=6AX-fhx59Hg
- It's short and to the point, and I was able to quickly change my errors, replicate the tutorial, and get it to run in my localhost.
- To build off the tutorial, I decided to make a simple app where users can add to a list of attractions in Disney World's Magic Kingdom. Users submit the location of the attraction as well as it's name.
- On my own, I was able to figure out how to clear the list using the ".remove()" method.
- The challenge when making my demo was figuring out how to add multiple inputs into one data item, which just took a bit of trial and error.

## Problems/Troubleshooting
1. Understanding how to set up MongoDB on my server.
2. Running MongoPop on my localhost.
    - needed to run "npm start"
    - https://www.mongodb.com/blog/post/the-modern-application-stack-part-2-using-mongodb-with-nodejs
3. Connecting to MongoPop using MongoDB Atlas
    - Surprisingly, there were very few online resources available to troubleshoot this problem. Considering that MongoPop is a github project that hasn't been updated since 2017, I figure that the creator(s) haven't changed the connection function to adapt to the new MongoDB Atlas structure.
4. Installing and importing firebase into my Angular app. I referenced the following links when trying to figure out what was wrong with the syntax in my app.module.ts.
    - https://github.com/angular/angularfire2/blob/master/docs/install-and-setup.md
    - https://github.com/angular/angularfire2/issues/1001
    - https://www.positronx.io/deploy-angular-8-app-to-firebase/
    - https://www.npmjs.com/package/@angular/fire
5. Figuring out how to submit mulitple user inputs into one list item.
    - This took some messing around to figure out that I can have multiple input tags and push them to the firebase list by separating each item with a comma in the ".push()" method.

## What I learned
- MEAN stands for: MongoDB, Express, Angular, and Node.js.
- MongoDB stores data in flexible JSON documents, so data can vary between items. MongoDB is a NoSQL database and the JSON documents are, in my opinion, easier to comprehend and edit. MongoDB simplies databases for large-scale applications.
- Express is a web app framework for Node.js.

- Firebase is Backend-as-a-Service (BaaS) on the Google Cloud Platform. It allows developers to store data in a NoSQL form and synchronize the data across users.
I learned that I need to install Firebase in my Angular app, include AngularFireModule and AngularFireDatabaseModule in my imports, as well as initialize the app using the firebase project details I added to my environment folder. I gained experience with the .push() and .remove() Angular-Firebase methods, and I was able to see how the data stored in my firebase project updates immediately when users interact with with my website.

## What would you like to learn more about?
I would like to have a deeper understanding of MEAN stacks and implement one on my server. I would also like to gain experience with the REST api.

With Firebase, I would like to explore more complicated ways of implementing CRUD operations.