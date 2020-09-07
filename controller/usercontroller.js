const getintouchschema = require('../schema/getintouch');

exports.home = async(req,res)=>{
    try{
        res.render('home');
    }
    catch(err){
        res.send(err);
    }
}

exports.getintouch = async(req,res)=>{
    try{
        const newuser = new getintouchschema(req.body);
        console.log(newuser);
        res.send({
            status:200,
            message:'We will inform you about our latest updates'
        });
    }
    catch(err){
        res.send({
            status:500,
            message:'Please try again later..'
        });
    }
}