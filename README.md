# Mock-up Volvo S90 website

## Description

This website was created with the MEAN stack (MongoDB, Express, Angular and NodeJS), and is hosted on Railway (Backend) and GitHub Pages (Frontend). The site features CRUD and authentication functionality in the form of custom car configurations and profile preferences.

I had a few goals for this project:

-Expand and solidify the Angular skills I learnt during my UOA internship

-Research/implement image optimization

-Deploy a live site; From my UOA experiences, the deployment process can a very challenging stage of a project

## Details

### Authentication:

User profiles are saved in the MongoDB, with passwords encrypted using a salt and hash. Passwords are verified using asymmetric authentication (public-private key), with sha512 hash function. Sessions are tracked using JWTs handled by PassportJS, which expire after one day.

### CRUD

In addition to configuring cars, CRUD functionality also applies to user profiles. This is also RESTful, using the Express framework.

### Frontend:

The Angular side of things features custom components and directives, PrimeNG components, routing, and is responsive. I chose to use a component library as displaying my CSS knowledge wasn't really a priority for this project.

### Image optimisation:

I started with using a image CDN (ImageKit.io) and having all my CGI assests be in webp format. To make use of the CDN advantages, I originally was going to use the ImageKit Angular SDK, however it was out of date and incompatable with Angular versions 10+. Instead I used the ngImageOptimization module, however I've encountered behaviours not inline with the documentation, and integration is annoying (requires stand alone components, works best with static images, etc).

_Update: After reaching out to Imagekit support, they have acknowledged the issue and advised to open an issue on github to recieve updates. Will revisit this once I have more time on my hands_

## Endpoint documentation

All endpoints return 400 (bad request) or 401 (unauthorized) responses with error messages as appropriate.

_Authentication_

### /register POST

Creates user profile in DB

Successful response: 201

```shell
  {
    success: bool,
    user: User,
    token: str,
    expiresIn: str
  }
```

### /login POST

Validate password and log into a user profile

Successful response: 200

```shell
  {
    success: bool,
    user: User,
    token: str,
    expiresIn: str
  }
```

_Profile_

### /profile/{username} GET

Retrieve logged in user's profile details

Successful response: 200

```shell
  {
    success: bool,
    user: User,
  }
```

### /profile/{username} PUT

Update logged in user's profile details

Successful response: 200

```shell
  {
    success: bool,
    updatedUser: User,
  }
```

### /profile/{username} DELETE

Delete logged in user's profile

Successful response: 200

```shell
  {
    success: bool,
    deletedUser: User,
  }
```

_Car_

### /{username}/car GET

Retrive logged in user's cars

Successful response: 200

```shell
  {
    success: bool,
    cars: array,
  }
```

### /{username}/car POST

Create a car

Successful response: 201

```shell
  {
    success: bool,
    msg: Car,
  }
```

### /{username}/car/{index} GET

Retrive a logged in user's car

Successful response: 200

```shell
  {
    success: bool,
    car: Car,
  }
```

### /{username}/car/{index} PUT

Update a logged in user's car

Successful response: 200

```shell
  {
    success: bool,
    car: Car,
  }
```

### /{username}/car/{index} DELETE

Delete a logged in user's car

Successful response: 200

```shell
  {
    success: bool,
    car: Car,
  }
```

## Future version ideas

-Need to update configurator colour selection thumbnails to relate to their respective colour.

-The logic behind the site can be expanded easily to add more cars and edit content. Can do an admin dashboard to add/remove cars and edit information, could also create some kind of trade-me mockup

-Add prices, switch between currencies

-Need to change the logic behind editing the saved cars. Should be via an observable, not sure why used event chaining but no time to update at the moment

-Moment.js is depreciated, many other libraries do the same thing

### Notes for self:

-Started on 14/2, completed v1 on 27/3. Probably about 30 hrs per week.

-Use Figma for design not paper!
