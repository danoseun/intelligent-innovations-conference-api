# Conference-API

## Getting Started

```
# Clone the repository
>$ git clone https://github.com/danoseun/intelligent-innovations-conference-api.git

# Change directory into it
>$ cd intelligent-innovations-conference-api

# Install all dependencies
> npm install

# Create a .env file and fill it with the sample provided in .env.sample file
> $ touch .env

# Start the application in development mode
> $ npm run start:dev

# Start the application in production mode
> $ npm run start

# Open running application on browser
    > $ https://conference-talk-api.herokuapp.com
If you change the port in your .env file then use the port instead of the one above

```

## Application features
* Add a Talk.
    * Method
      POST
      Required:
      title=[string]
      abstract=[string]
      speaker_firstname=[string]
      speaker_lastname=[string]
      speaker_company=[string]
      speaker_email=[string]
      speaker_bio=[string]
* Add an Attendee.
    * Method
      POST
      Required:
      firstname=[string]
      lastname=[string]
      email=[string]
* Add an Attendee to a Talk.
    * Method
      POST
      Required:
      email=[string]
* Delete a Talk.
    * Method
      DELETE

## Optional Features
* Get all Talks.


## Authors
* Oluwaseun Somefun
