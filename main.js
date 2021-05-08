const express = require("express")

const app = express();

app.use('/', express.static('src'));

app.use(express.json());
app.use(express.urlencoded());

// Heroku hack
var port = process.env.PORT || 3000;
// 
// local port
// var port = 3000

app.listen(port);