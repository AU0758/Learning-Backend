let express = require('express');
let app = express();

console.log('Hello world')

indexPath = __dirname + '/views/index.html'
stylePath = __dirname + '/public/style.css'

app.get(
    '/json',
    function(req, res) {
        res.json({"message": "Hello json"});
    }
);


res.sendFile(stylePath);
module.exports = app;
