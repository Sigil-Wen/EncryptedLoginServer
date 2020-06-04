const router = require('express').Router();
let User = require('../models/user.model'); //mongoose model
const bcrypt = require('bcrypt')

//routes for /Users/ get request
router.route('/').post((req,res) =>{ 
    const requsername = req.body.username;
    const reqpassword = req.body.password;

    User.findOne({'username': requsername}, 'username passwordHash', function(err, specificUser){
        if (err) {
            res.status(400).json('error1: ' + err)
        }else{
            if(specificUser == null){
                res.json(`${requsername} does not exist, would you like to sign up?`)
            }else{
            bcrypt.compare(reqpassword, specificUser.passwordHash, function(error, result) {
                if(error){
                    res.status(400).json('error2: ' + error)
                }else{
                if(result){
                    res.json(`${requsername} has successfully logged in!`)
                }else{
                res.json(`password incorrect`)
                }
            }

            });
        }}
        
    })

}
)
module.exports = router;