const mongoose= require('mongoose');
//const config= require('config');
const db='mongodb+srv://scott:tiger@cluster0.0vxog.mongodb.net/sample_airbnb?retryWrites=true&w=majority';
const connectDB = async() =>{
	try{
		await mongoose.connect(db,{ useNewUrlParser: true, useUnifiedTopology: true });
		console.log("Moo Server db connected")
	}
	catch(err){
		console.log(err.message);
	}
}
module.exports=connectDB;