var express = require('express');
var bodyParser = require('body-parser');
var router = require('./router');

var app = express();
var port = process.env.PORT || 3000;

app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));
app.set('views', __dirname + '/views');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



app.use('/', router);

app.listen(port, () => {
    console.log('live on port ' + port);
});
