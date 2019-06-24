const express=require('express');
const bodyparser=require('body-parser');
const {ObjectId}=require('mongodb');
var app=express();

var {mongoose}=require('./db/mongoose');
var {Todo}=require('./models/todo');
var {user}=require('./models/user');

app.use(bodyparser.json());

app.post('/todos', (req,res)=>{

	var todo=new Todo({
     text : req.body.text
	});
	todo.save().then( (doc)=>{
		console.log('ho gaaya save', doc);
		res.send( doc);
	}, (err)=>{
		res.send(err);
		console.log('unable to process this');
          
	});

})

app.get('/todos',(req,res)=>{
   Todo.find().then((todos)=>{
   	 res.send({todos ,  done : 'hi bro'});
   	 console.log(todos);
   }, (err)=>{
   	 res.send('unable to fetch');
   	 console.log(err);
   })

})
app.get('/todos/:id',(req,res)=>{
     
     var id=req.params.id;
       if(!ObjectId.isValid(id)){
           console.log('invalid id');
           res.status(400).send();
       }
       else {
       	  Todo.findById(id).then((doc)=>{

               if(doc) {console.log('mila');
               res.send(doc); }
               else {
               	 res.send(' id sahi  pr mila nhi ');
               }
       	  },(err)=>{
                  console.log('unable to find');
                  res.send(' try to correct it');
       	  });
       }
});


app.listen(3000,()=>{
	console.log('hi this is port 3000' );
});

 
