# TrackWork re-written in Angular 1.5
A Phalcon-based project being re-written using Angular as its frontend.
Angular code style according to [github.com/johnpapa/angular-styleguide](https://github.com/johnpapa/angular-styleguide/blob/master/a1/README.md).

## About TrackWork
TrackWork is a personal project originally built in the PHP-MVC Phalcon. It's designed to be a tool for keeping your work-hours logged and displayed
in a neat and tidy way. On top of that, TrackWork gives a basic analysis on the logged hours and can export a PDF-document with all the information
to whoever is in need of it (an employer, cashier etc.).  

This project is only a personal one and is not planned to be built for commercial use as of this moment. Additions and suggestions on improvement is
much appreciated.

# Dependencies
+ [Node.js](https://nodejs.org/en/)

+ [npm](https://www.npmjs.com/)

+ [MongoDB](https://www.mongodb.org/)

# Configure

## MongoDB
The connection to MongoDB is set up in public/app.js. Follows the general guidelines displayed on the MongoDB website.

## Web port
The default port for the server is 3000. To change this, add '--webport X' as a flag when starting the node server. X will then become the new port.

# How to install
1. Clone the repository
2. Step into the folder ``` $ cd TrackWork-Angular ```
3. Install node modules ``` $ npm install ```
4. Run the node server ``` $ node server.js ```
5. Visit http://localhost:3000 in any modern browser( Firefox has been the primary target )
