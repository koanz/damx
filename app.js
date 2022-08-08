const mongoose = require('mongoose');

const DB_URI = 'mongodb://localhost:27017/app_damx';

/**
 * DB CONNECTION
 */
mongoose.connect(DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true, 
}, (err) => {
    if(err)
        console.log('DB CONNECTION ERROR');
    else   
        console.log('DB CONNECTED SUCCESSFULLY');
});

/**
 * SCHEMA MODEL
 */
