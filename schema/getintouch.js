const mongoose = require('mongoose');

const getintouchSchema = new mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String
    },
    message:{
        type:String
    }
})

const getintouch = mongoose.model('getintouch',getintouchSchema);
module.exports = getintouch;