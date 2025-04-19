require('dotenv').config();
const mongoose=require('mongoose');

const ConnectDb=async()=>{
    try{
    await mongoose.connect(process.env.MONGODB_URI);
        console.log('database connected');
        console.log('Mongo URI:', process.env.MONGODB_URI);
    }catch(err){
        console.log(err.message);
        process.exit(1);
    }
}

module.exports=ConnectDb;