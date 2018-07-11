# Webtrekk
![npm](https://img.shields.io/npm/v/npm.svg)

***A frontend display of my skills that shows the list and details of customers.
This project gives you the ability to search for customers. You are also able to edit/view their extra information. You can also delete the customer as well.***

## Setup Instructions:

 - With [node](http://nodejs.org) [installed](http://nodejs.org/en/download), clone the repository, change your current directory to the project root folder and install the dependencies.
    ```sh
    $ cd <project_root_folder>
    $ npm install
    ```
 - When this is done, issue the following command to start the application, please ensure you are still in the project root folder and you have a good internet connection.
    ```sh
    $ npm run server
    ```
 - You should see a message 
    ```sh
    ...

    Webtrekk App listening on port 3000! 
    ```
 - Visit [Localhost](http://localhost:3000) on your computer or [Heroku link](https://toniton-webtrekk.herokuapp.com/) to see a live version.

> Cheers, I hope you like what you see.

## Technologies
-   Angular/cli
-   Karma
-   Jasmine
-   Webpack
-   Angular 5
-   NodeJs
-   Express
-   MongoDb
-   Scss

### Listing Page
This displays a simple catalogue of customers, with filter options, a quick delete button, and a link to edit.
I implemented the add customer as a modal to make it easier for users to add more customers. Also a quick delete button to help users easily delete a particular customer.

### Details Page
The details page provides users with basic info of the selected customer. You can choose to edit the details or view it. This is being toggled based on the query parameter set in the url.
