const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const requireCredits = require('../middlewares/requireCredits');
const surveyTemplate = require('../services/templates/surveyTemplate');
const Mailer = require('../services/mailer');
const Survey = mongoose.model('surveys');


module.exports = app => {
  app.post('/api/surveys',requireLogin,requireCredits, async (req,res)=>{
    const { title, body, subject, recipients } = req.body;

    const survey = new Survey({
      title,
      body,
      subject,
      recipients : recipients.split(',').map(email => ({ email: email.trim() })),
      _user : req.user.id,
      dateSent: Date.now()
    });

    //send a email
    const mailer = new Mailer(survey, surveyTemplate(survey));
    mailer.send();
  });
};