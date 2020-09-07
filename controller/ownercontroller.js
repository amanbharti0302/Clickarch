exports.getintouch = async(req,res)=>{
    try{
        console.log(req.body);
        res
        .status(200)
        .send({
            status:"success",
            message:"your message has been sent successfully"
        })
    }
    catch(err){
        res.send(err);
    }
}