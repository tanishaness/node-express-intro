const express = require('express');
const app = express();

// Middleware example
app.use(function (req, res, next) {
    console.log("Hello from middleware");
    next();
});

// Dynamic routing
app.get('/profile/:username', function (req, res) {
    res.send(`Hello from ${req.params.username}`);
});

// EJS setup
app.set("view engine", "ejs");

// Route for root URL
app.get("/", function (req, res) {
    res.render("index"); // This assumes you have an index.ejs file in your views folder
});

/*
app.get("/", function (req, res) {
    res.send('Welcome to the Home Page'); // Simple response instead of rendering an EJS file
});
*/

// Contact page route
app.get("/contact", function (req, res) {
    res.render("contact"); // This assumes you have a contact.ejs file in your views folder
});

// Static profile route
app.get('/profile', function (req, res) {
    res.send('Hello World, it’s my profile');
});

//example
app.get("/error", function (req, res) {
    throw Error("420") //finds errorHandeller and executes it
});

// Catch-all route for handling invalid URLs
app.use(function (req, res, next) {
    res.status(404);
    res.render('error', { error: "404: Page Not Found" }); // Render error.ejs for 404 errors
});

//error handelling
app.use(function errorHandler(err, req, res, next) {
    if (res.headersSent) {
        return next(err)
    }
    res.status(500)
    res.render('error', { error: err })
})

// Start the server on port 3000
app.listen(3000, function () {
    console.log('Server is running on port 3000');
});

/*
Error Logging (Middleware)
app.use(function errorHandler(err, req, res, next) {
    // Log the error details
    console.error(`Error occurred: ${err.message}`); // Log error message
    console.error(`Request Method: ${req.method}`); // Log request method
    console.error(`Request URL: ${req.url}`); // Log request URL

    if (res.headersSent) {
        return next(err);
    }

    res.status(500);
    res.render('error', { error: err.message || "500: Internal Server Error" }); // Render error.ejs for 500 errors
});
*/

//which of these routes are get or post ?
/*
post routes syntax-->

app.post('/submit', function (req, res) {
    // Handle form submission here
    res.send('Form submitted successfully!');
});
*/

//task- convert index.ejs route into a post route
