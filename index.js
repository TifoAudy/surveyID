//initial express app and some library
const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const bodyParser = require('body-parser');
const passport = require('passport');
const keys = require('./config/keys');
require('./models/user');
require('./models/Survey');
require('./services/passport');

//connect to mongoDb
mongoose.connect(keys.mongoURI);

const app = express();


app.use(bodyParser.json());
//enable cookie
app.use(
  cookieSession({
    maxAge: 30*24*60*60*1000,
    keys: [keys.cookie]
  })
);

//tell pasport to use cookie
app.use(passport.initialize());
app.use(passport.session());


//Google OAuth routes
require('./routes/auth')(app);
require('./routes/billing')(app);
require('./routes/survey')(app);

if (process.env.NODE_ENV === 'production') {
  //some request looking for production assets
  app.use(express.static('client/build'));

  //some request that tell express to serve up the html file
  const path = require('path');
  app.get('*', (req,res)=> {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });

};


//process.env.PORT = used for production
const PORT = process.env.PORT || 5000;
app.listen(PORT);