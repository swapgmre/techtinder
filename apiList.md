## TechTinder API

authRouter

- POST /signup
- POST /login
- POST /logout

profileRouter

- GET /profile/view
- PATCH /profile/edit
- PATCH /profile/password //Forgotpassword API (it will take the existing password is correct or not check if the new password is strong enough or not )

connectionRequestRouter

--POST /request/send/:status/:userId
-- POST /request/review/:status/:requestId

userRouter
GET /user/connections
GET /user/requests/received
GET /user/feed - Gets you the profiles of other users on platform

-

Status: ignore, interested, interested, accepted

Pagination Notes
/feed?page=1&limit=10 => first 10 users 1-10 -- .skip(0) & .limit(10) first 10users

/feed?page=2&limit=10 => first 10 users 11-20 -- .skip(10) & .limit(10) next 10 users

/feed?page=3&limit=10 => first 10 users 21-30 -- .skip(20) & .limit(10) next 10 users

skip = (page-1)\*limit ----formula
