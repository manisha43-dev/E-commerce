const express =require('express');

const app=express();

const dotenv=require('dotenv');

const path=require('path');

const cors =require('cors')


dotenv.config({path:path.join(__dirname,'.env')})


console.log('ENV CHECK:', {
  MONGODB_URI: process.env.MONGODB_URI ? '✅ Found' : '❌ Missing',
  PORT: process.env.PORT ? '✅ Found' : '❌ Missing',
});

const connectDatabase=require('./config/connectDatabase')
const products=require('./routes/product');
const orders=require('./routes/order');

connectDatabase();

app.use(express.json())
app.use(cors({
    origin:true,
    credentials:true,
}));

app.use('/api/v1',products);
app.use('/api/v1',orders);

const PORT=process.env.PORT || 5000

app.listen(PORT,()=>{
    console.log(`Server Listening to port ${process.env.PORT} in ${process.env.NODE_ENV}`);
    
});
;
