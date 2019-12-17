# Link and Blurb (Journal) 

## Improvements:
1) Title changes with current page
2) Navigation tags are active for current page
3) There is a fallback for users who don’t have javascript enabled
4) Navigating to an endpoint does not result in a 404 error
5) Site is on https and users cannot use http
6) The app is made using Angular

## Issues:
I had problems separating the home, about, and contact pages into separate components, so I followed this tutorial: https://www.youtube.com/playlist?list=PLC3y8-rFHvwhBRAgFinJR8KHIrCdTkZcZ
That tutorial also has videos which I referenced when routing between components.

I had a little trouble with setting up my ssl certificate so I followed Professor Wergeles’ tutorial and the class videos, as well as going to office hours. I was missing a few minor details in my default-ssl.conf file, and I was just reloading the server instead of restarting it.

This site helped me bind to an href for the contact page: https://stackoverflow.com/questions/40336155/angular-2-binding-appending-to-href/48958396

This site helped me with making the title of the page change dynamically: https://angular.io/guide/set-document-title

This site helped me implement the active class and activerouterlink: https://stackoverflow.com/questions/35422526/how-to-set-bootstrap-navbar-active-class-in-angular-2?rq=1

I referenced this site for my .htaccess file: https://github.com/angular/angular-cli/issues/4607

This challenge helped me learn more about Angular components, routing, the <noscript> tag, and setting up https on my server. I highly recommend people watch the tutorial I linked at the beginning of this document when first learning Angular.

