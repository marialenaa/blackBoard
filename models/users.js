var mongoose = require('mongoose')

var messagesSchema = mongoose.Schema({
    title:String,
    content:String,
    dateExp:Date,
    read:Boolean,
    sender: String
})

var tasksSchema = mongoose.Schema({
    name:String,
    category:String,
    owner:String,
    dateInsert:Date,
    dateDue:Date,
    dateCloture:Date
})

var userSchema = mongoose.Schema({
    firstName:String,
    lastName:String,
    email:String,
    password:String ,
    age:Number,
    status:String,
    gender:String,
    dateInsert: Date,
    messages:[messagesSchema],
    tasks:[tasksSchema],
})

var usersModel = mongoose.model('users', userSchema)
module.exports = usersModel