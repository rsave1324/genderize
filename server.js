const express = require("express")

const app = express();

app.use('/', express.static('src'));

app.use(express.json());
app.use(express.urlencoded());

var port = 3000

app.listen(port);