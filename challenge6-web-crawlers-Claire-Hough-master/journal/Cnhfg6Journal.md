## Link to instance 
- http://www.clairehough.com:8000/

## Description of App
- My app scrapes http://quotes.toscrape.com/ page by page and grabs the text and author of each quote. The site has simple html tags that made it easy to find paths to specific data. The site helped me learn more about scraping and ensured that I didn't spend time struggling to figure out css and xpaths rather than focusing on understanding how web scraping works.
- Users can view all of the quotes from the site on one page rather than having the data split up on separate pages like the original site has. If they want, they can Crtl+F and search the page based on keywords or author names.
- Web scrapers can be useful when needing to grab large amounts of public information. When using other web scrapers like Selenium - which acts like an actual person clicking through sites - developers can automate things that might otherwise be tedious to do.
- When using the app, the buttons require users to stop the reload initiated by the button click and then manually refresh the page. Note: Doing this too quickly will cause not all of the quotes to show up despite them all being scraped into mongodb.

## Examples
- The main function my site allows is to run "scrapy crawl quotes", "db.quotes.find()", and "db.quotes.drop()". If you choose to run my scraper on your server, you could go into mongodb and run "db.quotes.count()" to see how many total quotes are stored in the database.
- If I had more time to develop this into a more detailed app, I would've liked to add a function that scrapes quotes based on the tags they are associated with (i.e. humor, romance, etc.). For now, users can Crtl+F and search for keywords.

## Set Up for Your Server
1. Make sure nodejs, mongodb, python, scrapy, and pymongo are installed on your server as we have done in class
    - https://nodejs.org/en/download/
    - https://tecadmin.net/install-mongodb-on-ubuntu/
    - sudo apt-get install python-dev python-pip libxml2-dev libxslt1-dev zlib1g-dev libffi-dev libssl-dev
    - sudo apt-get install python3 python3-dev
    - pip install scrapy
    - pip install pymongo
2. cd into "Challenge6/Challenge6", so that you are within the scrapy project
3. Install express, mongojs, and node-cmd
    - sudo npm install express --save
    - sudo npm install mongojs --save
    - sudo npm install node-cmd --save
4. cd ..
5. run "scrapy crawl quotes"
    - You should see a list of all of the quotes as they are scraped
6. View the data in mongodb
    - run "mongo"
    - "use Challenge6"
    - "db.quotes.find()"
7. You can view this on your instance by running "node app.js". You should be in the directory where app.js is located.
    - The app will run on port 8000
8. Go to "http://your instance:8000"

## Problems/Troubleshooting
1. I ran into problems when trying to store the data I scraped into mongodb. The scraper would run correctly, but the data was not showing up in my database. After hours of googling and troubleshotting, I realized the function I was refering to in ITEM_PIPLEINES in my settings.py file wasn't named the same as the function in my pipelines.py file.
    - I referenced these links when trying to figure this out:
        - https://realpython.com/web-scraping-with-scrapy-and-mongodb/
        - https://github.com/Mizzou-CSIT2830-CS7830-F19/ScrapyMongo/blob/AfterClass-V2/brickset/pipelines.py
        - https://alysivji.github.io/mongodb-pipelines-in-scrapy.html
2. I tried to use Scrapyrt as a way to expose the data I scraped as an API but when I tried to install it, it gave me a segmentation fault. There weren't many resources online so I decided to drop this idea and use node and express instead.
    - https://medium.com/@mottet.dev/scrapy-and-scrapyrt-how-to-create-your-own-api-from-almost-any-website-ecfb0058ad64

## Sources
1. Scrapy Code
    - https://github.com/Mizzou-CSIT2830-CS7830-F19/ScrapyMongo/tree/AfterClass-V2
    - https://www.youtube.com/watch?time_continue=62&v=ez7WLkEF-Eg
    - https://seawaylee.github.io/2017/06/24/%E7%88%AC%E8%99%AB/python/Scrapy%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0%EF%BC%88%E4%B8%80%EF%BC%89-%20%E5%BF%AB%E9%80%9F%E5%85%A5%E9%97%A8/
    - Matt Hudson's discussion post
2. Express
    - https://www.youtube.com/watch?v=gnsO8-xJ8rs&t=3764s
3. MongoDB
    - https://www.tutorialkart.com/mongodb/mongodb-delete-collection/

## Screenshots
1. This is what the app looks like when you first enter the url.
    - ![Picture](https://github.com/Mizzou-CSIT2830-CS7830-F19/challenge6-web-crawlers-Claire-Hough/blob/develop/screenshots/1_opening_page.png)
2. This screenshot is trying to show that users need to cancel page reload after they click a button, and then refresh the page themselves. When running the scraper, wait a couple seconds before refreshing the page.
    - ![Picture](https://github.com/Mizzou-CSIT2830-CS7830-F19/challenge6-web-crawlers-Claire-Hough/blob/develop/screenshots/2_cancel_refresh.png)
3. After refreshing the page, users will be able to view all of the quotes scraped from the site.
    - ![Picture](https://github.com/Mizzou-CSIT2830-CS7830-F19/challenge6-web-crawlers-Claire-Hough/blob/develop/screenshots/3_quotes_displayed.png)
4. In my terminal, I can see the data scraped from the site.
    - ![Picture](https://github.com/Mizzou-CSIT2830-CS7830-F19/challenge6-web-crawlers-Claire-Hough/blob/develop/screenshots/4_scraped_quotes.png)
5. Going into mongo, I can run db.quotes.count() and see that all 100 quotes have been scraped in from the site.
    - ![Picture](https://github.com/Mizzou-CSIT2830-CS7830-F19/challenge6-web-crawlers-Claire-Hough/blob/develop/screenshots/5_100_quotes.png)
6. Running db.quotes.find() displays all of the quote data stored in mongodb.
    - ![Picture](https://github.com/Mizzou-CSIT2830-CS7830-F19/challenge6-web-crawlers-Claire-Hough/blob/develop/screenshots/6_quotes_in_mongodb.png)
7. My index.ejs code and how I am displaying the quote data.
    - ![Picture](https://github.com/Mizzou-CSIT2830-CS7830-F19/challenge6-web-crawlers-Claire-Hough/blob/develop/screenshots/7_index.ejs.png)
8. My books.py file, which tells the spider what to scrape.
    - ![Picture](https://github.com/Mizzou-CSIT2830-CS7830-F19/challenge6-web-crawlers-Claire-Hough/blob/develop/screenshots/8_books.py.png)
9. My app.js file. This screenshot shows how I am running the scraper, displaying data, and clearing the database.
    - ![Picture](https://github.com/Mizzou-CSIT2830-CS7830-F19/challenge6-web-crawlers-Claire-Hough/blob/develop/screenshots/9_app.js.png)
