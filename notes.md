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
