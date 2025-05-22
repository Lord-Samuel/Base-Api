// Import required modules
let express = require('express') // Express framework for building the API server
let path = require('path') // Node.js module for handling file paths
let cookieParser = require('cookie-parser') // Middleware to parse cookies from requests
let logger = require('morgan') // HTTP request logger middleware
let indexRouter = require('./routes/index') // Router for root (/) routes
let apiRouter = require('./routes/api') // Router for /api endpoints
const rateLimit = require("express-rate-limit") // Middleware for rate limiting
let PORT = process.env.PORT || 3000// Set the server port from environment or default to 3000

const app = express() // Create an Express application instance

// Set up rate limiting: max 2000 requests per minute per IP
const limiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 1 minute window
  max: 2000, // limit each IP to 2000 requests per windowMs
  message: 'Oops too many requests' // message sent when limit is exceeded
});
app.use(limiter); // Apply rate limiting to all requests

app.set('json spaces', 2) // Format JSON responses with 2 spaces for readability

app.use(logger('dev')) // Log HTTP requests in 'dev' format

app.use(express.json()) // Parse incoming JSON request bodies
app.use(express.urlencoded({ extended: false })) // Parse URL-encoded request bodies

app.use(cookieParser()) // Parse cookies attached to the client request

app.use(express.static(path.join(__dirname, 'public'))) // Serve static files from the 'public' directory

app.use('/', indexRouter) // Use the index router for root routes
app.use('/api', apiRouter) // Use the API router for all /api routes

// Catch-all route for undefined endpoints, returns a 404 error in JSON
app.get('*', function(req, res){
   res.status(404).json(global.status.error)
})

// Start the server and listen on the specified port
app.listen(PORT, () => {
    console.log(`Server is running in port ${PORT}`)
})