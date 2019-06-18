const client=require('mongodb').MongoClient;

client.connect('mongodb://localhost:27017/Users',(err,db)=>{
	if(err){
		return console.log('Unable to connect to users');
	}
	db.collection('Users').find({age :'20',name:'Piyush'}).toArray().then((docs)=>{
      console.log('Users');
      console.log(JSON.stringify(docs));
		}, (err)=>{
			if(err){
				return console.log('Unable to find that');
			}
		});


});