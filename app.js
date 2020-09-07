const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const app = express();

const ownerrouter = require('./router/ownerrouter');
const userrouter = require('./router/userrouter');

app.use(bodyParser.urlencoded({
  extended: true
}));


app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(express.static("public"));
app.use(express.json({limit:'10kb'}));

app.use('/',userrouter);
app.use('/owner/',ownerrouter)

app.all('*', (req, res, next) => {
  res.send('<html><head><title>500 Internal Server Error</title></head><body bgcolor="white"><center><h1>500 Internal Server Error</h1></center><hr><center>National institute of technology Patna <br>website in development mode plase contact :7250720774 (aman bharti)</center></body></html>');
});

module.exports = app;