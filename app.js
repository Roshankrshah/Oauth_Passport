require('dotenv').config();
const express = require('express');
const authRoutes = require('./routes/auth-routes');
const passportSetup = require('./config/passport-setup');

const app = express();

// set view engine
app.set('view engine', 'ejs');

// set up routes
app.use('/auth', authRoutes);

// create home route
app.get('/', (req, res) => {
    res.render('home');
});

const port = 2002;

app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});