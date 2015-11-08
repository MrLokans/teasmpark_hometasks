var express = require('express');

var app = express();
var userRouter = express.Router();

var data = {"username": "Andrew", "pass_hash": "NoHash", "lists": [{"title": "My First ToDo-List", "tasks": [{"text": "buy milk", "completed": false}, {"text": "Buy TV", "completed": false}]}]};


userRouter.get('/', function(req, res){
    res.render('index');
});

userRouter.get('/:user', function(req, res){
    var username = req.params.user;

    console.log("GET /" + username);

    var db = req.db;
    var collection = db.get('lists');
    collection.find({"username": username}, {"_id": 0}, function(e, docs){
        console.log("Giving away: " + docs);
        res.json(docs);
    });
});

userRouter.post('/:user', function(req, res){
    var username = req.params.user;
    var todoText = req.body.todoText;
    console.log("POST /" + username + ': ' +todoText);

    var db = req.db;
    var collection = db.get('lists');
    collection.update({"username": username}, {$push: {'todos': todoText}}, function(e,docs){
    });
    res.json(data);

});

module.exports = userRouter;