const router = require('express').Router();
let User = require('../models/user.model'); //mongoose model
const bcrypt = require('bcrypt')


//post request
router.route('/').post((req,res)=> { 
    const email = req.body.email;
    const username = req.body.username; //new username is apart of request body
    const password = req.body.password;

    const saltRounds = 4
    bcrypt.genSalt(saltRounds, function(err, salt) {
        if(err){ 
            res.status(400).json('Error: ' + err)
        }
        else{
            bcrypt.hash(password, salt, function(error, hash) {
                if (error){
                    res.status(400).json('Error: ' + err)

                }
                const newUser = new User({email, username, passwordHash: hash}); //creates a new instance of User
                newUser.save() //after it is saved
                    .then(() => res.json(`User ${username} successfully added!`))
                    .catch(err => res.status(400).json('Error: ' + err));
    
            });
        }
        
    });
    
});

module.exports = router;