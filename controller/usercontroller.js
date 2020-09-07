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
        const newuser = await getintouchschema.create(req.body);

        console.log(newuser);
        res.status(200)
            .send({
            status:"success",
            message:'We will inform you about our latest updates'
        });
    }
    catch(err){
        res.staus(500)
            .send({
            status:"fail",
            message:'Please try again later..'
        });
    }
}