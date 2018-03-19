MyanLearn Pre-interview Coding Assignment

Please visit https://myanlearn-client.herokuapp.com/ to test the app.

This SPA (Single Page Application ) is built using:
    • Node.js
    • MongoDB
    • React.js
    • Redux (for state management)
    • React-Router

This app has 3 main UIs which are Register, Login and Tweets.

How To Test The App
===================

Register
-------
To register a new user you'll need to provide a valid username, password and password confirmation.
    * username must not contain spaces and special characters
    * username must not be in use
    * password and password confirmation must match

Login
-----
After you have registered you can log into the app.
    * try to log in with wrong username, password and empty fiels
    * if you are successfully logged in, you'll be redirected to `Tweet` page

Tweet with #education
---------------------
You cannot not visit this route if you are not logged in. If you try so, you will be redirected to log in page.
    * after log in, you can view the tweets and you can refresh the page or close the browser, and still accessible to this page (thanks to JWT credential)
    * as soon as you logged out, you'll not be able to visit it


How To Run the App Locally
==========================

* clone the github repo
* navigate to the directory
* install dependencies with npm install (you must have node installed on your pc)
* npm start / npm run start

