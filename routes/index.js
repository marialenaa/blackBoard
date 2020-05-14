var express = require('express');
var router = express.Router();
var articlesModel = require('../models/articles')
var orderModel = require('../models/orders')
var usersModel = require('../models/users')

// var date = new Date("2018-09-07T17:06:27.000Z");

/* GET home page. */
router.get('/', async function(req, res, next) {
  var counterM = 0
  var counterT = 0
  var tasksMess = await usersModel.findById("5c52e4efaa4beef85aad5e52")
  for(var i=0;i<tasksMess.messages.length;i++){
    if(tasksMess.messages[i].read == false){
      counterM ++
    }}
  for(var i=0;i<tasksMess.tasks.length;i++){
    if(tasksMess.messages[i].dateCloture == null){
      counterT ++
    }}
  var articlesIndispo = await articlesModel.find({stock:0})
  var indispo = articlesIndispo.length
  res.render('index',{counterT, counterM, indispo});
});

/* GET tasks page. */
router.get('/tasks-page', async function(req, res, next) {
  var admin = await usersModel.findById("5c52e4efaa4beef85aad5e52")
  res.render('tasks', {admin});
});

/* GET Messages page. */
router.get('/messages-page', async function(req, res, next) {
    var admin = await usersModel.findById("5c52e4efaa4beef85aad5e52")
  res.render('messages', {admin});
});

/* GET Users page. */
router.get('/users-page', async function(req, res, next) {
  var users = await usersModel.find({status:"customer"})
  res.render('users', {users});
});

/* GET Catalog page. */
router.get('/catalog-page', async function(req, res, next) {
  var allArticles = await articlesModel.find()
  res.render('catalog', {allArticles});
});

/* GET Orders-list page. */
router.get('/orders-list-page', async function(req, res, next) {
  var orderList = await orderModel.find()
  res.render('orders-list',{orderList} );
});

/* GET Order detail page. */
router.get('/order-page', async function(req, res, next) {
  var order = await orderModel.findById(req.query.id)
  .populate('articles')
  .exec()
  order.save()
  res.render('order', {order});
});

/* GET chart page. */
router.get('/charts', async function(req, res, next) {
var user = await usersModel.find()
var femaleNb = 0
var maleNb = 0
for(var i=0; i <user.length; i++)
{
  if(user[i].gender == "male"){
    maleNb++
  }else{
    femaleNb++
  }
}  

var mess = await usersModel.findById("5c52e4efaa4beef85aad5e52")
var messnnLu = 0
var messlu = 0
for(var i=0; i <mess.messages.length; i++)
{
  if(mess.messages[i].read == false){
    messnnLu++
  }else{
    messlu++
  }
} 

var orderStat = await orderModel.find({status_payment: "validated"})
var exp = 0
var nnExp = 0
for(var i=0; i< orderStat.length;i++){
  if(orderStat[i].status_shipment == true){
    exp++
  }else{
    nnExp++
  }
}
var aggr = orderModel.aggregate()
aggr.match({"status_payment": "validated"})
aggr.group({ _id :   {year: {$year:"$date_insert"}, month: {$month:"$date_insert"}}, ca:{$sum: "$total"} });
aggr.sort({_id:1})
var dataCA = await aggr.exec();

console.log(dataCA)

res.render('charts', {maleNb,femaleNb,messlu, messnnLu, exp, nnExp, dataCA} );
});

module.exports = router;
