## DAY 01

-Create a repository
-Intialize the repository
-node_modules,package.json,
package-lock.json
-Install express
-Create a server
-Listen to port 7777
-Write request handlers for /test, /hello
-Install nodemon and update scripts inside package.json
-What are dependencies ?
-What is the use of "-g" while npm install
-Difference between caret and tilde (^ vs ~)

## DAY 02

-Create .gitignore file
-Git command " git add ." - will add all the files and for particular file we can do git add and the path
-git commit -m "and the message in quote"
-local repo is on our system and remote will be on github

- we will push exisiting repository from command line
  -Play with routes and route extensions ex. /hello, / , hello/2,
  /xyz
  -Order of the routes matter a lot
  -Install postman app and make a workspace/collection > test API call
  -Write Logic to handle GET, POST, PATCH, DELETE API Calls and test them on the potsman app
  -Explore routing and use of ?, +, (), \* in the routes
  -Use of Regex in routes

Advance routing
/ab?c -b is optional
/abc, /ac will work

/ab+c - as many b we want to
/abc, /abbc, abbbbc

/ab\*cd - between ab abd cd anything we write will be accepted
/abcd /abSwapnilcd

/a(bc)?d - now bc is optional
/ad, /abcd /ahfndkfnfmd

Regex
/a/ - Any thing with a in url it will work

/.\*fly$/ - anything which ends with fly will work

/butterfly , /dragonfly

/user?userId=101 - query parmaters
/user?userId=101&password=testing -query params
we will use req.query

/user/:userId/:name - dynamic routes
req.params
/user/Swapnil/test

### DAY 03 - Route Handlers, Middlewares and Error Handlers

-app.use will handle any type of request whereas app.""specific routes like get, post etc" will handle that particular route.
-Multiple Route Handlers- Play with the code
-next function and errors along with res.send()
-app.use("/route", rh, [rH2, rH3], rH4), rH5);

- The function or route handler which sends res back is called route handler and the other handlers are called middlewares
  -What is a middleware
  -How express JS handles requests BTS
  -What is the use of Middlewares?
  -Middleware is generally used using app.use
  -There is also a method app.all
  -Difference app.use and app.all
  -Write a dummy auth middleware for admin
  -Write a dummy auth middleware for all user routes, except/ user/login
  -Wild Card Error Handling

## DAY 04 - Database, Schema & Models | Mongoose

- Create a free cluster on MongoDB official website - Mongo Atlas
- Install Mongoose
- Connect your applicaton to the DB "Connection URL"/tinderDB
- Call connectDB function and connect to database before starting application on 7777
  -Create a userSchema and userModel
  -Create POST/signup API to add datat to database
  -Push some documents using API calls from postman
  -Error Handling using try-catch

## DAY 05 Diving into the APIs

-JS Object vs JSON (difference)
-Add the express.json middleware to your app
-Make your signup API dynamic to recieve data from the end user
-User.findOne with duplicate emailIds which will it return latest object or older.
-API - Get user by email
-API - Feed API - GET /feed - get all the users from the database
-API- Get user by Id
-API - DELETE/user
-Diff between PATCH and PUT
-API- PATCH/user

## DAY 06 Data Sanitization & Schema Validations

-Explore schematype options from the documentation
-Add required, unique, lowercase, min, minLength, trim
-Add default
-Create a custom validate function for gender
-Improve the DB schema - Put all appropriate validations
-Add timestamps to the userSchema
