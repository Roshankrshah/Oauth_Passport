const express = require('express')
const router = express.Router();

const authCheck = (req,res,next)=>{
    if(!req.user){
        res.redirect('/auth/login');
    }else{
        console.log('bye');
        next();
    }
};

router.get('/',authCheck,(req,res)=>{
    console.log('hi');
    res.send('suck my dick '+req.user.username);
});

module.exports = router;