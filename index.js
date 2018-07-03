//initial express app
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send({ hi: 'sayang' })
});

//process.env.PORT = used for production
const PORT = process.env.PORT || 5000;
app.listen(PORT);