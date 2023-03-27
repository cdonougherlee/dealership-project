# Mock-up Volvo S90 website

## Description

This website was created with the MEAN stack (MongoDB, Express, Angular and NodeJS), and is hosted on Railway (API) and GitHub Pages (Client). The site features CRUD and authentication functionality in the form of custom car configurations and profile preferences. 

I had a few goals for this project:

-Expand and solidify the Angular skills I learnt during my UOA internship

-Research/implement image optimization

-Deploy a live site; From my experiences so far, I've seen the deployment process be one of the most challenging stages of a project like this

## Details

### Authentication:

User profiles are saved in the MongoDB, with passwords encrypted using a salt and hash. Passwords are verified using asymmetric authentication (public-private key). Sessions are tracked using JWTs handled by PassportJS, which expire after one day.

### CRUD

In addition to configuring cars, CRUD functionality also applies to user profiles. I designed the API to be RESTful using the Express framework.

### Frontend:

The Angular side of things features custom components and directives, PrimeNG components, routing and is responsive. I chose to use a component library as displaying my CSS knowledge wasn't really a priority for this project. 


### Image optimisation:

I started with using a image CDN (ImageKit.io) and having all my CGI assests be in webp format. To make use of the CDN advantages, I originally was going to use the ImageKit Angular SDK, however it was out of date and incompatable with Angular versions 10+. Instead I used the ngImageOptimization module, however I've encountered behaviours not inline with the documentation, and integration is annoying (requires stand alone components, works best with static images, etc).

*Update: After reaching out to Imagekit support, they have acknowledged the issue and advised to open an issue on github to recieve updates. Will revisit this once I have more time on my hands*

## Future version ideas

-The logic behind the site can be expanded easily to add more cars and edit content. Can do an admin dashboard to add/remove cars and edit information, could also create some kind of trade-me mockup

-Add prices, switch between currencies 

-Need to change the logic behind editing the saved cars. Should be via an observable, not sure why used event chaining but no time to update at the moment

-Moment.js is depreciated, many other libraries do the same thing

### Notes for self:

-Started on 14/2, completed v1 on 27/3. Probably about 30 hrs per week.

-Use Figma for design not paper!
