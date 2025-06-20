import mongoose from "mongoose";
const uri = 'mongodb://dhruvinughareja:abc@ac-fpbmxfe-shard-00-02.letcfon.mongodb.net:27017?retryWrites=true&w=majority&appName=Cluster';

const connectDB = async () => {

    mongoose.connection.on('connected', () => {
        console.log("Database Connected");
    })
    
        await mongoose.connect(uri, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
          ssl: true,
        });

}

export default connectDB;