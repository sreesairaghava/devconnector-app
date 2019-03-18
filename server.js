const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');

const users = require('./routes/api/users');
const posts = require('./routes/api/posts');
const profile = require('./routes/api/profile');

const app = express();

// Body Parser middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json())
 
//Db connection
const db = require('./config/keys').mongoURI

//Connecting to MongoDB
mongoose.connect(db).then(()=>{
    console.log('Mongo Database Connected')
})
.catch((err)=>console.log(err))

// Passport Middleware
app.use(passport.initialize())

// Passport Configuration
require('./config/passport.js')(passport);
// Use routes
app.use('/api/users', users);
app.use('/api/profile', profile);
app.use('/api/posts', posts);

const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>{console.log(
    `server is listening on ${PORT}`
)});