const client=require('mongodb').MongoClient;

client.connect('mongodb://localhost:27017/Users',(err,db)=>{
	if(err){
		return console.log('Unable to connect to users');
	}
	db.collection('Users').insertOne({
		name : 'Oyush',
		age :   23,
		location: 'India'
	},(err,resu)=>{
		if(err){
		return console.log('Unable to add user');
	}
	console.log('user added', resu.ops);
	})
	db.close();


});