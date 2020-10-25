
var employers=require('../models/employers');

exports.all=function(req,res){
    employers.all(function (err,docs){
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        }
        res.send(docs);
    })
}

exports.findById = function(req,res) {
    employers.findById(req.params.id,function (err,doc){
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        }
        res.send(doc)
    })
}

exports.create = function (req,res) {
    var employer = {
        name: req.body.name,
        features: req.body.features
    }
    employers.create(employer,function (err,result) {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        }
        res.send(employer);
    })
}

exports.update = function (req,res){
    employers.update(req.params.id,{$set: {name:req.body.name, features: req.body.features}}, function(err,result) {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        }
        res.sendStatus(200);
    })
}

exports.detete= function (req,res) {
    employers.delete(req.params.id,function(err,result){
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        }
        res.sendStatus(200);
    })
}