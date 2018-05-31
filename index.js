const express = require('express')
const app = express()
var port = process.env.PORT || 8080;

app.get('/', (req, res) => res.send('Hello abc!'))

app.listen(port);

