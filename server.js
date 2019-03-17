const express = require('express');
const mongoose = require('mongoose');

const users = require('./routes/api/users');
const posts = require('./routes/api/posts');
const profile = require('./routes/api/profile');

const app = express();
 
//Db connection
const db = require('./config/keys').mongoURI

//Connecting to MongoDB
mongoose.connect(db).then(()=>{
    console.log('Mongo Database Connected')
})
.catch((err)=>console.log(err))

app.get('/',(req, res)=> {
    res.send('Hello DevConnector welcome to')
    console.log('just test')
})

// Use routes
app.use('/api/users', users);
app.use('/api/profile', profile);
app.use('/api/posts', posts);

const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>{console.log(
    `server is listening on ${PORT}`
)});