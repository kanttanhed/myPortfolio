const mongoose = require('mongoose');

mongoose.set('useCreateIndex', true)

mongoose.connect(process.env.MONGO_URL_CONNECT, { 
    useNewUrlParser: true,
    useUnifiedTopology: true
    }, () => {
    console.log("Connected to MongoDB");
})