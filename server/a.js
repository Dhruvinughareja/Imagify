import mongoose from 'mongoose';

const uri = 'mongodb://dhruvinughareja:abc@ac-fpbmxfe-shard-00-02.letcfon.mongodb.net:27017?retryWrites=true&w=majority&appName=Cluster';

async function testConnection() {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      ssl: true,
    });
    console.log('✅ MongoDB connection successful!');
    await mongoose.disconnect();
  } catch (error) {
    console.error('❌ MongoDB connection failed:', error);
  }
}

testConnection();