var db = require ('../db');
const ObjectID=require('mongodb').ObjectID;

exports.all= function (cb){
    db.get().collection('employers').find().toArray(function(err,docs){
        cb(err,docs);
    })
}

exports.findById = function(id,cb) {
    db.get().collection('employers').findOne({ _id: ObjectID(id)},function(err,doc){
        cb(err,doc);
    })
}

exports.create = function (employer,cb) {

    db.get().collection('employers').insertOne(employer,function(err,result) {
        cb(err,result);
    });
}

exports.update = function (id,newData, cb) {
    db.get().collection("employers").updateOne(
        {_id: ObjectID(id)},
        newData,
        { new: true, upsert: true, returnOriginal: false },
        function(err,result){
            cb(err,result);
        }
    )
}

exports.delete = function (id, cb) {
    db.get().collection('employers').deleteOne(
        { _id: ObjectID(id)},
        function (err,result) {
            cb(err,result);
        }
    )
}