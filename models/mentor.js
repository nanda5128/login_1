const mongoose = require('mongoose');
const mentorSchema = mongoose.Schema({
    name:String,
    email:String,
    phone:String,
    password:String
})
module.exports=mongoose.model('mentors',mentorSchema)
