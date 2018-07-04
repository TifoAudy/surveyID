const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

//retrieve a User Collection model from mongoose and create a model class of User
const User = mongoose.model('users');

//generate token for user
passport.serializeUser((user, done) => {
  done(null, user.id);
})

//turn the id back to mongoose user model for incoming request
passport.deserializeUser((id, done) => {
  //checking the id with the id of all user in database
  User.findById(id)
    .then(user => {
      done(null, user);
    })
})


//passport ( a general handler for auth ) used GoogleStrategy for handling OAuth with Google
passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback'
    },
    (accessToken, refreshToken, profile, done) => {
      User.findOne({ googleID: profile.id })
        .then((existingUser) => {
          if (existingUser) {
            //user already recorded
            done(null, existingUser);
          } else {
            //create model instance from model class
            new User({ googleID: profile.id })
              .save()
              .then(user => done(null, user));
          }
        })

    }
  )
);