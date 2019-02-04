var express = require('express');

var app = express();
var port = process.env.PORT || 8080;
app.use(express.static(__dirname + '/public'));
 

app.get('/', function(req, res) {
    res.send('index.html');
});
app.get('/about', function(req, res) {
    res.sendFile('about.html', {root: __dirname + '/public'});
});
// app.get('/projects', function(req, res) {
//     res.sendFile('projects.htm', {root: __dirname + '/public'});
// });

app.listen(port, function() {
    console.log(`App listening on port ${port}!`);
});