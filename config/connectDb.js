const mongoose = require('mongoose')
const colors = require ('colors')
const connectDb =async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log(`connect to mongoo & Server Running On ${mongoose.connection.host}`.bgCyan.white);
    }
    catch (error){
        console.log(`Mongo Connect Error ${error}`.bgRed)
    }
}
module.exports = connectDb