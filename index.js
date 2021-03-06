const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');
const keys = require('./config/keys');
const EXPIRATION_TIME = 30 * 24 * 60 * 60 * 1000; // 30 Days
require('./models/User');
require('./models/Survey');
require('./services/passport');

mongoose.connect(keys.mongoURI, { useMongoClient: true });

const app = express();

app.use(bodyParser.json());

app.use(
    cookieSession({
        maxAge: EXPIRATION_TIME,
        keys: [keys.cookieKey],
    }),
);

app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);
require('./routes/billingRoutes')(app);
require('./routes/surveysRoutes')(app);

if (process.env.NODE_ENV === 'production') {
    // Make sure Express will server up production assets
    app.use(express.static('client/build'));
    // Express will server up the index.html file if it dosn't recognize the route
    const path = require('path');
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT);
