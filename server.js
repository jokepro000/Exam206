const express = require('express');
const session = require('express-session');
const path = require('path');
const app = express();

app.use(session({
    secret: 'labExam206',
    resave: true,
    saveUninitialized: true,
}))

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.set('views', path.join(__dirname, 'page'));
app.set('view engine', 'ejs');

app.use('/image', express.static(path.join(__dirname, '/image')));
app.use('/service', express.static(path.join(__dirname, '/services')));
app.use('/css',express.static(path.join(__dirname, '/style')));
app.use('/api', require('./middlewares/api'));
app.use('/', require('./middlewares/view'));

const port = 5005;
app.listen(port, () => {
    console.log(`server is running on port: ${port}`);
})