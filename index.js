//initial express app and some library
const express = require('express');
const authRoutes = require('./routes/auth');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
require('./models/user');
require('./services/passport');

//connect to mongoDb
mongoose.connect(keys.mongoURI);

const app = express();

//enable cookie
app.use(
  cookieSession({
    maxAge: 30*24*60*60*1000,
    keys: [keys.cookie]
  })
)

//tell pasport to use cookie
app.use(passport.initialize());
app.use(passport.session());


//Google OAuth routes
authRoutes(app);


//process.env.PORT = used for production
const PORT = process.env.PORT || 5000;
app.listen(PORT);