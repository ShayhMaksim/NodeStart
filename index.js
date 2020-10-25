const bodyParser = require('body-parser');
const express =require('express');
var employerController=require('./controllers/employers');

var app=express();
var db=require('./db');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));



const port=process.env.PORT || 3000;


app.get('/',function(req,res){
    res.send(`Hello API`);
});

app.get('/employers', employerController.all);

app.get('/employers/:id', employerController.findById);

app.post('/employers',employerController.create);

app.put('/employers/:id', employerController.update);

app.delete('/employers/:id', employerController.detete);

db.connect('mongodb://localhost:27017/employers',function(err){
    if (err) {
        return console.log(err);
    }

    
    app.listen(port,()=>{
        console.log(`API app started`);
    });

})