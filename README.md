# EncryptedLoginServer
 Node.js, express.js, MongoDB, server for sign up and logins. Mongoose and bcrypt was used.
 
## To set up
Clone the repository and open in terminal. Then run node server.js
 
 ## Sign up
Requires you to send a POST request with {email, username, password}. Bcrypt will securely hash the password with a salt and store the information in a MongoDB atlas database
 
 ## Login
 Requires you to send a POST request with {username, password}. Mongoose finds if such a user exists and uses Bcrypt to compare the password to the hash. Then returns an appropriate response. 
