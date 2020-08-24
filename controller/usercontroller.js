
exports.home = async(req,res)=>{
    try{
        res.render('home');
    }
    catch(err){
        res.send(err);
    }
}