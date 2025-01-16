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

- POST /request/send/:status/:userId - either ignore or accept

- POST /request/review/accepted/:requestId
- POST /request/review/rejected/:requestId

userRouter
GET /user/connections
GET /user/requests/received
GET /user/feed - Gets you the profiles of other users on platform

Status: ignore, interested, interested, accepted
