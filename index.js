const express = require('express');
const bodyParser = require('body-parser');

const app = express()

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

require('./routes/shopifyRoutes')(app);
require('./routes/instagramRoutes')(app);

const path = require('path');

if (process.env.NODE_ENV === 'production') {
  // Express will serve up production assets
  // Like our main.js file, or main.css file!
  app.use(express.static('client/build'));

  // Express will serve up the index.html file
  // if it doesn't recognize the route
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
};

const PORT = process.env.PORT || 5000;
app.listen(PORT);
