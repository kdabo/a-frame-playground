const express = require('express')
const fs = require('fs');
const serveStatic = require('serve-static');
const path = require('path');

const app = express();
const port = 8000;

app.use(serveStatic(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
    fs.readFile(__dirname + '/public/index.html', 'utf8', (err, text) => {
        res.send(text);
    });
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
});