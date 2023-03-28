var express = require('express');
var router = express.Router();

/* GET home page.*/
let x;
let y;
router.get('/',function(req,res,next){
    if(req.query.x == undefined){
        //S559254 4 has hypot,ceil and clz32
        x = Math.floor(Math.random()*5);
        y = Math.floor(x);
        let result = Math.hypot(x,y );
        let result2 = Math.ceil(x);
        let result3 = Math.clz32(x);
        res.send(`Math.hypot() applied to ${x} is ${result} \n
        Math.ceil() applied to ${x} is ${result2}\n
        Math.clz32() applied to ${x} is ${result3}\n
        `);
    }
    else {
        x = req.query.x;
        let result = Math.hypot(x,y);
        let result2 = Math.ceil(x);
        let result3 = Math.clz32(x);
        res.send(`Math.hypot() applied to ${x}is ${result}
        Math.ceil() applied to ${x} is ${result2}
        Math.clz32() applied to ${x} is ${result3}
        `);
    }
})
module.exports = router;
